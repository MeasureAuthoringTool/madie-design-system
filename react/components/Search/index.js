import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({
  id,
  name,
  placeholder,
  disableSearchBtn,
  disabled,
  inputValue,
  onClick,
  onChange,
  inputAriaLabel,
  buttonAriaLabel,
  inputWidth,
}) => {
  const inputStyle = {
    width: inputWidth,
  };
  return (
    <form role="search" className="qpp-c-search qpp-c-search--compact">
      <label className="qpp-u-visually-hidden" htmlFor={id}>
        Search
      </label>
      <div className="qpp-c-search__wrap">
        <input
          style={inputStyle}
          className="qpp-c-text-input"
          type="search"
          id={id}
          name={name}
          placeholder={placeholder}
          value={inputValue}
          disabled={disabled}
          onChange={onChange}
          aria-label={inputAriaLabel}
        />

        <button
          data-testid="search-btn"
          aria-label={buttonAriaLabel}
          onClick={onClick}
          disabled={disableSearchBtn}
          id={`${id}-submit`}
          type="submit"
          className="qpp-c-search__submit qpp-c-button qpp-c-button--text"
        >
          <span className="qpp-u-visually-hidden">Search</span>
          <SearchIcon classes={{ root: 'qpp-icon-mat' }} />
        </button>
      </div>
    </form>
  );
};

Search.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disableSearchBtn: PropTypes.bool,
  disabled: PropTypes.bool,
  inputValue: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  inputAriaLabel: PropTypes.string,
  buttonAriaLabel: PropTypes.string,
  inputWidth: PropTypes.string,
};

Search.defaultProps = {
  id: 'search-input',
  name: '',
  placeholder: '',
  disableSearchBtn: false,
  disabled: false,
  inputValue: '',
  onClick: () => null,
  onChange: () => null,
  inputAriaLabel: '',
  buttonAriaLabel: '',
  inputWidth: 'auto',
};

export default Search;
