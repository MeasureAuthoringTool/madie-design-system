import { IconButton } from "@mui/material";
import React, { useState } from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const TruncateText = ({
                          text,
                          maxLength = 120,
                          dataTestId,
                      }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!text || _.trim(text) === "") {
        return null;
    }

    const toggleExpanded = () => setIsExpanded((prev) => !prev);

    const displayedText = isExpanded ? text : _.slice(text, 0, maxLength);

    return (
        <div data-testid={`${dataTestId}-content`}>
            <span>{displayedText}</span>
            {text.length > maxLength && (
                <IconButton
                    onClick={toggleExpanded}
                    data-testid={`${dataTestId}-toggle-button`}
                    color={"primary"}
                    sx={{
                        marginLeft: "5px",
                        padding: "0",
                        cursor: "pointer",
                        textDecoration: "underline",
                        fontSize: "0.9rem",
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
};

export default TruncateText;
