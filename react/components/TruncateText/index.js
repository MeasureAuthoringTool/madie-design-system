import { IconButton } from "@mui/material";
import React, { useState } from "react";
import _ from "lodash";
import PropTypes from "prop-types";

let idCounter = 0;

const TruncateText = ({
    text,
    maxLength = 120,
    dataTestId,
    fontSize = "1rem",
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [contentId] = useState(() => `truncate-text-${++idCounter}`);

    if (!text || _.trim(text) === "") {
        return null;
    }

    const toggleExpanded = () => setIsExpanded((prev) => !prev);

    const displayedText = isExpanded ? text : _.slice(text, 0, maxLength);

    return (
        <div data-testid={`${dataTestId}-content`} style={{ fontSize }}>
            <span id={contentId}>{displayedText}</span>
            {text.length > maxLength && (
                <IconButton
                    type="button"
                    onClick={toggleExpanded}
                    aria-expanded={isExpanded}
                    aria-controls={contentId}
                    data-testid={`${dataTestId}-toggle-button`}
                    color="primary"
                    sx={{
                        marginLeft: "5px",
                        padding: "0",
                        cursor: "pointer",
                        textDecoration: "underline",
                        fontSize: "inherit",
                        borderRadius: "2px",
                        "&:focus-visible": {
                            outline: "2px solid #0073c8",
                            outlineOffset: "2px",
                        },
                    }}
                >
                    {isExpanded ? "Show less" : "Show more"}
                </IconButton>
            )}
        </div>
    );
};

TruncateText.propTypes = {
    text: PropTypes.string,
    maxLength: PropTypes.number,
    dataTestId: PropTypes.string,
    fontSize: PropTypes.string,
};

export default TruncateText;
