import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import { expect } from "chai";
import FooterUI from "../../components/Footer/FooterUI";

class Wrapper extends Component {
    render() {
        return this.props.children;
    }
}

describe("FooterUI", () => {
    it("renders the footer HTML", () => {
        // Native elements and functional stateless react components don't have public instances and
        // cannot be used with renderIntoDocument. React has a separate package install for a shallow
        // renderer that allows this. Otherwise, you need a wrapper when testing presentational components.
        const component = ReactTestUtils.renderIntoDocument(
            <Wrapper>
                <FooterUI />
            </Wrapper>
        );
        const footer = ReactTestUtils.findRenderedDOMComponentWithTag(
            component,
            "footer"
        );
        const footerNode = ReactDOM.findDOMNode(footer);
        expect(ReactTestUtils.isDOMComponent(footerNode)).to.be.true;
    });

    it("renders the footer HTML", () => {
        const version = "1.2.3.4";
        const component = ReactTestUtils.renderIntoDocument(
            <Wrapper>
                <FooterUI buildVersion={version} />
            </Wrapper>
        );
        const buildVersion = ReactTestUtils.findRenderedDOMComponentWithClass(
            component,
            "build-version"
        );
        const buildVersionNode = ReactDOM.findDOMNode(buildVersion);
        expect(ReactTestUtils.isDOMComponent(buildVersionNode)).to.be.true;
        expect(buildVersion.textContent).to.equal(version);
    });

    it("renders the footer properly in the Authenticated experience", () => {
        const component = ReactTestUtils.renderIntoDocument(
            <Wrapper>
                <FooterUI isFullWidth={true} />
            </Wrapper>
        );
        const isFullWidth = ReactTestUtils.scryRenderedDOMComponentsWithClass(
            component,
            "container-full-width"
        )[1];
        const isFullWidthNode = ReactDOM.findDOMNode(isFullWidth);
        expect(ReactTestUtils.isDOMComponent(isFullWidthNode)).to.be.true;
    });
});

describe("renders the footer properly in the non-authenticated experience", () => {
    it("renders by default the non-authenticated experience", () => {
        const component = ReactTestUtils.renderIntoDocument(
            <Wrapper>
                <FooterUI />
            </Wrapper>
        );
        const isNotFullWidth =
            ReactTestUtils.scryRenderedDOMComponentsWithClass(
                component,
                "responsive-container"
            )[1];
        const isNotFullWidthNode = ReactDOM.findDOMNode(isNotFullWidth);
        expect(ReactTestUtils.isDOMComponent(isNotFullWidthNode)).to.be.true;
    });

    it("explicitly renders the non-authenticated experience", () => {
        const component = ReactTestUtils.renderIntoDocument(
            <Wrapper>
                <FooterUI isFullWidth={false} />
            </Wrapper>
        );
        const isNotFullWidth =
            ReactTestUtils.scryRenderedDOMComponentsWithClass(
                component,
                "responsive-container"
            )[1];
        const isNotFullWidthNode = ReactDOM.findDOMNode(isNotFullWidth);
        expect(ReactTestUtils.isDOMComponent(isNotFullWidthNode)).to.be.true;
    });
});
