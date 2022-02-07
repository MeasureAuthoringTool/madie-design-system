import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { expect } from 'chai';
import Tooltip from '../../components/Tooltip';
import positionTip, {
  positionTriangle,
} from '../../components/Tooltip/position';

class Wrapper extends Component {
  render() {
    return this.props.children;
  }
}

describe('Tooltip', () => {
  it('renders children into document', () => {
    const component = ReactTestUtils.renderIntoDocument(
      <Wrapper>
        <Tooltip label="tooltip text">
          <button>Tooltip Button</button>
        </Tooltip>
      </Wrapper>
    );
    const tooltipButton = ReactTestUtils.findRenderedDOMComponentWithTag(
      component,
      'button'
    );
    const node = ReactDOM.findDOMNode(tooltipButton);
    expect(ReactTestUtils.isDOMComponent(node)).to.be.true;
  });

  it('tooltip is not rendered until activted', () => {
    const component = ReactTestUtils.renderIntoDocument(
      <Wrapper>
        <Tooltip label="tooltip text">
          <button>Tooltip Button</button>
        </Tooltip>
      </Wrapper>
    );
    const tooltip = document.body.querySelector('div[data-reach-tooltip]');
    expect(tooltip).to.equal(null);
  });

  it('renders a tooltip when activated', () => {
    const component = ReactTestUtils.renderIntoDocument(
      <Wrapper>
        <Tooltip DEBUG_STYLE label="tooltip text">
          <button>Tooltip Button</button>
        </Tooltip>
      </Wrapper>
    );
    const tooltip = document.body.querySelector('div[data-reach-tooltip]');
    expect(tooltip).not.to.equal(null);
  });

  describe('position', () => {
    it('returns empty object if triggerRect or tooltipRect are falsy', () => {
      const position = positionTip();
      expect(position).to.deep.equal({});
    });

    it('calculates tooltip position above trigger', () => {
      const triggerRect = {
        x: 100,
        y: 100,
        width: 16,
        height: 16,
        top: 100,
        right: 116,
        bottom: 116,
        left: 100,
      };
      const tooltipRect = {
        width: 130,
        height: 50,
      };
      const position = positionTip(triggerRect, tooltipRect);
      expect(position).to.deep.equal({
        left: '43px',
        top: '38px',
      });
    });

    it('calculates tooltip position below trigger', () => {
      const triggerRect = {
        x: 100,
        y: 40,
        width: 16,
        height: 16,
        top: 40,
        right: 116,
        bottom: 56,
        left: 100,
      };
      const tooltipRect = {
        width: 130,
        height: 50,
      };
      const position = positionTip(triggerRect, tooltipRect);
      expect(position).to.deep.equal({
        left: '43px',
        top: '68px',
      });
    });

    it('calculates triangle tip position above trigger', () => {
      const triggerRect = {
        x: 100,
        y: 100,
        width: 16,
        height: 16,
        top: 100,
        right: 116,
        bottom: 116,
        left: 100,
      };
      const tooltipRect = {
        width: 130,
        height: 50,
      };
      const positionCSS = positionTriangle(triggerRect, tooltipRect);
      expect(positionCSS).to.match(/border-top: 8px solid;/);
      expect(positionCSS).to.match(/top: 88px;/);
    });

    it('calculates triangle tip position below trigger', () => {
      const triggerRect = {
        x: 100,
        y: 40,
        width: 16,
        height: 16,
        top: 40,
        right: 116,
        bottom: 56,
        left: 100,
      };
      const tooltipRect = {
        width: 130,
        height: 50,
      };
      const positionCSS = positionTriangle(triggerRect, tooltipRect);
      expect(positionCSS).to.match(/border-bottom: 8px solid;/);
      expect(positionCSS).to.match(/top: 60px;/);
    });
  });
});
