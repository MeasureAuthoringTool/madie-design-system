import React from "react";
import SearchIcon from "@mui/icons-material/Search";

/**
 * @param {{
 *   id?: string,
 *   name?: string,
 *   placeholder?: string,
 *   disableSearchBtn?: boolean,
 *   disabled?: boolean,
 *   inputValue?: string,
 *   onClick?: () => void,
 *   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
 *   inputAriaLabel?: string,
 *   buttonAriaLabel?: string,
 *   inputWidth?: string
 * }} props
 */
const Search = ({
    id = "search-input",
    name = "",
    placeholder = "",
    disableSearchBtn = false,
    disabled = false,
    inputValue = "",
    onClick = () => null,
    onChange = () => null,
    inputAriaLabel = "",
    buttonAriaLabel = "",
    inputWidth = "auto",
}) => {
    const inputStyle = {
        width: inputWidth,
        borderColor: "#8C8C8C",
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
                    <SearchIcon classes={{ root: "qpp-icon-mat" }} />
                </button>
            </div>
        </form>
    );
};

export default Search;
