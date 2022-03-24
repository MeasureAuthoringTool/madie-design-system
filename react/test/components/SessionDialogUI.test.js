import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import { expect } from "chai";
import sinon from "sinon";
import SessionDialogUI from "../../components/SessionDialogUI";
import * as Modal from "react-modal";

// Dependencies to stub out
import * as refreshModule from "../../session/refresh";
import * as logoutModule from "../../session/logout";

describe("SessionDialogUI", () => {
    // Sample token via: https://github.com/auth0/jwt-decode/blob/master/test/tests.js
    var token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJleHAiOjEzOTMyODY4OTMsImlhdCI6MTM5MzI2ODg5M30.4-iaDojEVl0pJQMjrbM1EzUIfAZgsbK_kgnVyVxFSVo";
    var clock = null;

    beforeEach(() => {
        let container = document.querySelector(
            "#qpp-style-session-dialog-container"
        );
        let modal = document.querySelector(".ReactModalPortal");
        clock = sinon.useFakeTimers();
        document.cookie = `qpp_auth_token=${token}`;

        if (container) {
            container.remove();
        }
        if (modal) {
            modal.remove();
        }
        Modal.setAppElement = jest.fn(() => null);
    });

    afterEach(() => {
        clock.restore();
    });

    it("closes the dialog when Refresh button is clicked", () => {
        const refreshSpy = sinon.spy(
            SessionDialogUI.prototype,
            "refreshSession"
        );
        const dialog = ReactTestUtils.renderIntoDocument(
            <SessionDialogUI
                showImmediate={true}
                startTimer={sinon.spy()}
                appElement="body"
            />
        );
        const refresh = sinon
            .stub(refreshModule, "default")
            .yieldsTo("onSuccess");

        sinon.spy(dialog, "startTimer");
        sinon.spy(dialog, "handleCloseModal");

        const button = document.querySelector(
            "[data-testid='modal-primary-btn']"
        );
        ReactTestUtils.Simulate.click(button);

        expect(refreshSpy.calledOnce).to.be.true;
        expect(refresh.calledOnce).to.be.true;
        expect(dialog.handleCloseModal.calledOnce).to.be.true;
        expect(dialog.startTimer.calledOnce).to.be.true;

        refreshSpy.restore();
        dialog.startTimer.restore();
        dialog.handleCloseModal.restore();
        refresh.restore();
    });

    it("closes the dialog when Sign Out button is clicked", () => {
        const signOutSpy = sinon.spy(SessionDialogUI.prototype, "signOut");
        const dialog = ReactTestUtils.renderIntoDocument(
            <SessionDialogUI
                showImmediate={true}
                startTimer={sinon.spy()}
                appElement="body"
            />
        );
        const logout = sinon.stub(logoutModule, "default");

        sinon.spy(dialog, "handleCloseModal");

        const button = document.querySelector(
            "[data-testid='modal-secondary-btn']"
        );
        ReactTestUtils.Simulate.click(button);

        expect(signOutSpy.calledOnce).to.be.true;
        expect(dialog.handleCloseModal.calledOnce).to.be.true;
        expect(logout.calledOnce).to.be.true;

        signOutSpy.restore();
        dialog.handleCloseModal.restore();
    });

    it("renders the dialog HTML", () => {
        const dialog = ReactTestUtils.renderIntoDocument(
            <SessionDialogUI
                showImmediate={true}
                startTimer={sinon.spy()}
                appElement="body"
            />
        );

        dialog.handleOpenModal();

        // The dialog gets rendered as a sibling of the composite
        // component, so check for it in the document instead
        const node = document.querySelector(".ReactModal__Overlay");

        expect(node).to.exist;
    });

    it("has a default warningTimeout of 2 minutes", () => {
        const dialog = ReactTestUtils.renderIntoDocument(
            <SessionDialogUI appElement="body" />
        );
        expect(dialog.props).to.have.property("warningTimeout", 2);
    });

    it("warningTimeout can be set to a different number", () => {
        const dialog = ReactTestUtils.renderIntoDocument(
            <SessionDialogUI warningTimeout={666} appElement="body" />
        );
        expect(dialog.props).to.have.property("warningTimeout", 666);
    });

    it("calls #startTimer by default", () => {
        const spy = sinon.spy(SessionDialogUI.prototype, "startTimer");
        const dialog = ReactTestUtils.renderIntoDocument(
            <SessionDialogUI appElement="body" />
        );

        expect(spy.calledOnce).to.be.true;
        expect(dialog.state.showModal).to.be.false;
        spy.restore();
    });

    it("bypasses #startTimer if showImmediate is true", () => {
        const spy = sinon.spy(SessionDialogUI.prototype, "startTimer");
        const dialog = ReactTestUtils.renderIntoDocument(
            <SessionDialogUI showImmediate={true} appElement="body" />
        );
        expect(spy.called).to.be.false;
        expect(dialog.state.showModal).to.be.true;
        spy.restore();
    });

    describe("#shouldShowDialog", () => {
        it("time_remaining returns true within warning timeout", () => {
            let expiry = 1800; // 30 minutes reminaing
            const dialog = ReactTestUtils.renderIntoDocument(
                <SessionDialogUI appElement="body" />
            );

            expect(dialog.shouldShowDialog(expiry)).to.be.false;

            // 2 minutes remaining
            expiry = 120;

            expect(dialog.shouldShowDialog(expiry)).to.be.true;
        });

        it("ttl returns true within warning timeout", () => {
            const now = new Date().getTime();
            // Set session expiration 30 minutes from now
            const expiry = new Date(now + 30 * 60000);
            const dialog = ReactTestUtils.renderIntoDocument(
                <SessionDialogUI appElement="body" />
            );

            expect(dialog.shouldShowDialog(expiry)).to.be.false;

            // Advance clock 28 minutes
            clock.tick(28 * 60000);

            expect(dialog.shouldShowDialog(expiry)).to.be.true;
        });

        it("time_remaining works with custom warningTimeout", () => {
            let expiry = 1800; // 30 minutes remaining
            const dialog = ReactTestUtils.renderIntoDocument(
                <SessionDialogUI warningTimeout={0.25} appElement="body" /> // 15 seconds warning
            );

            expect(dialog.shouldShowDialog(expiry)).to.be.false;

            // At 2 minutes remaining, should still be false
            expiry = 120;
            expect(dialog.shouldShowDialog(expiry)).to.be.false;

            // At 15 seconds left
            expiry = 15;
            expect(dialog.shouldShowDialog(expiry)).to.be.true;
        });

        it("ttl works with custom warningTimeout", () => {
            const now = new Date().getTime();
            // Set session expiration 4 minutes from now
            const expiry = new Date(now + 4 * 60000);
            const dialog = ReactTestUtils.renderIntoDocument(
                <SessionDialogUI warningTimeout={0.25} appElement="body" />
            );

            expect(dialog.shouldShowDialog(expiry)).to.be.false;

            // Advance clock 2 minutes, should still be false
            clock.tick(120000);
            expect(dialog.shouldShowDialog(expiry)).to.be.false;

            // Advance clock another 00:01:45, to have 15 seconds left
            clock.tick(105000);
            expect(dialog.shouldShowDialog(expiry)).to.be.true;
        });
    });

    describe("#shouldSignOut", () => {
        it("returns true when time_remaining expiration is up", () => {
            let expiry = 1800; // 30 minutes remaining
            const dialog = ReactTestUtils.renderIntoDocument(
                <SessionDialogUI appElement="body" />
            );

            // 1 minute remaining
            expiry = 60;
            expect(dialog.shouldSignOut(expiry)).to.be.false;

            // 0 minutes remaining
            expiry = 0;
            expect(dialog.shouldSignOut(expiry)).to.be.true;
        });

        it("returns true when time_remaining within threshold", () => {
            let expiry = 1800; // 30 minutes remaining
            const dialog = ReactTestUtils.renderIntoDocument(
                <SessionDialogUI appElement="body" />
            );

            // 1 minute remaining
            expiry = 60;
            expect(dialog.shouldSignOut(expiry)).to.be.false;

            // 1 second remaining
            expiry = 1;
            expect(dialog.shouldSignOut(expiry)).to.be.true;
        });

        it("returns true when ttl expiration is up", () => {
            const now = new Date().getTime();
            // Set session expiration 30 minutes from now
            const expiry = new Date(now + 30 * 60000);
            const dialog = ReactTestUtils.renderIntoDocument(
                <SessionDialogUI appElement="body" />
            );

            // Advance clock 29 minutes
            clock.tick(29 * 60000);
            expect(dialog.shouldSignOut(expiry)).to.be.false;

            // Advance clock 1 more minute
            clock.tick(60000);
            expect(dialog.shouldSignOut(expiry)).to.be.true;
        });
    });

    describe("#minutesUntil", () => {
        it("#minutesUntil returns minutes until the time provided", () => {
            const now = new Date().getTime();
            // Set session expiration 30 minutes from now
            const expiry = new Date(now + 30 * 60000);
            const dialog = ReactTestUtils.renderIntoDocument(
                <SessionDialogUI appElement="body" />
            );

            // Advance clock 15 minutes
            clock.tick(15 * 60000);

            expect(dialog.minutesUntil(expiry)).to.equal(15);
        });
    });

    describe("#getTokenExpiry", () => {
        it("extracts exp from token cookie and returns a date", () => {
            const dialog = ReactTestUtils.renderIntoDocument(
                <SessionDialogUI showImmediate={true} appElement="body" />
            );
            const cookies = {
                qpp_auth_token: token,
            };

            const expected = 1393286893 * 1000;
            const actual = dialog.getTokenExpiry(cookies);

            expect(actual.getTime()).to.equal(expected);
        });

        it("returns null when the cookie is nonexistent", () => {
            const dialog = ReactTestUtils.renderIntoDocument(
                <SessionDialogUI showImmediate={true} appElement="body" />
            );
            const cookies = {};

            const actual = dialog.getTokenExpiry(cookies);

            expect(actual).to.be.null;
        });
    });

    describe("#startTimer", () => {
        it("interval will be cleared if expiry is falsy", () => {
            const spy = sinon.spy(SessionDialogUI.prototype, "startTimer");
            const dialog = ReactTestUtils.renderIntoDocument(
                <SessionDialogUI showImmediate={true} appElement="body" />
            );

            document.cookie =
                "qpp_auth_token=; expires=Thu, 1 Jan 1970 00:00:01 GMT";

            dialog.startTimer();

            clock.tick(120000);

            expect(spy.calledOnce).to.be.true;
            expect(spy.calledTwice).to.be.false;
            spy.restore();
        });

        it("sets a warningInterval if given an expiration date", () => {
            const dialog = ReactTestUtils.renderIntoDocument(
                <SessionDialogUI showImmediate={true} appElement="body" />
            );
            const expiry = new Date(1393286893 * 1000);

            dialog.startTimer(expiry);

            // Sinon's fake timer seems to return an object from setInterval
            // instead of a number. This may break if that bug gets fixed.
            // expect(dialog.warningInterval).to.be.a('number');
            expect(dialog.warningInterval).to.be.a("number");
        });
    });
});
