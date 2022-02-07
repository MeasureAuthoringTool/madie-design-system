import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Collapsible extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };

    this._toggleExpanded = this.toggleExpanded.bind(this);
    this._renderShowButton = this.renderShowButton.bind(this);
    this._renderHideButton = this.renderHideButton.bind(this);
  }

  toggleExpanded() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }

  renderShowButton() {
    return (
      <span className="collapsible-show-label">{this.props.showLabel}</span>
    );
  }

  renderHideButton() {
    if (this.props.hideLabel) {
      return (
        <span className="collapsible-hide-label">{this.props.hideLabel}</span>
      );
    } else {
      return '';
    }
  }

  render() {
    const isArray = Array.isArray(this.props.content);
    const isHidden = this.state.isExpanded ? undefined : true;

    return (
      <div className="collapsible-container">
        <button
          onClick={this._toggleExpanded}
          className="collapsible-summary"
          type="button"
          aria-expanded={this.state.isExpanded ? true : false}
        >
          {this._renderShowButton()}
          {this._renderHideButton()}
        </button>

        <div className="collapsible-details" hidden={isHidden}>
          {isArray ? (
            <ul className="items">
              {this.props.content.map((c) => (
                <li key={c.contentTitle}>
                  <p>
                    <b>{c.contentTitle}</b>
                  </p>
                  <p>{c.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <p>
                <b>{this.props.contentTitle}</b>
              </p>
              <p>{this.props.content}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Collapsible.propTypes = {
  showLabel: PropTypes.string.isRequired,
  hideLabel: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  contentTitle: PropTypes.string,
};

export default Collapsible;
