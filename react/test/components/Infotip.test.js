import React from "react";
import ReactDOM from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import { expect } from "chai";
import { spy } from "sinon";
import Infotip from "../../components/Infotip";

describe("Infotip", () => {
    let container;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    it("renders an svg icon for tooltip anchor", () => {
        act(() => {
            ReactDOM.render(<Infotip label="tooltip text" />, container);
        });
        const svg = container.querySelector("svg");
        expect(svg).to.be.ok;
    });

    it("renders white icon when lightIcon prop is true", () => {
        act(() => {
            ReactDOM.render(
                <Infotip lightIcon label="tooltip text" />,
                container
            );
        });
        const paths = container.querySelectorAll("path");
        expect(paths[1].getAttribute("fill")).to.equal("#FFF");
        expect(paths[2].getAttribute("fill")).to.equal("#04838A");
    });

    it('overrides "touchstart" events for button', () => {
        act(() => {
            ReactDOM.render(<Infotip label="tooltip text" />, container);
        });
        const button = container.querySelector("button");
        const stopPropagation = spy();
        Simulate.touchStart(button, { stopPropagation });
        expect(stopPropagation.called).to.be.true;
    });

    it('uses "touchend" event on button to prevent default and toggle focus', () => {
        act(() => {
            ReactDOM.render(<Infotip label="tooltip text" />, container);
        });
        const button = container.querySelector("button");
        const preventDefault = spy();
        const focus = spy(button, "focus");
        const blur = spy(button, "blur");
        Simulate.touchEnd(button, {
            preventDefault,
        });
        expect(preventDefault.calledOnce).to.be.true;
        expect(button.focus.calledOnce).to.be.true;
        expect(button.blur.calledOnce).to.be.false;
        Simulate.touchEnd(button, {
            preventDefault,
            currentTarget: {
                focus,
                blur,
            },
        });
        expect(preventDefault.calledTwice).to.be.true;
        expect(focus.calledOnce).to.be.true;
        expect(blur.calledOnce).to.be.true;
    });
});
