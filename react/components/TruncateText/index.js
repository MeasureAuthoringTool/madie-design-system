import { IconButton } from "@mui/material";
import React, { useState } from "react";
import _ from "lodash";

const TruncateText = ({
    text,
    maxLength = 120,
    dataTestId,
    fontSize = "1rem",
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!text || _.trim(text) === "") {
        return null;
    }

    const toggleExpanded = () => setIsExpanded((prev) => !prev);

    const displayedText = isExpanded ? text : _.slice(text, 0, maxLength);

    return (
        <div data-testid={`${dataTestId}-content`} style={{ fontSize }}>
            <span>{displayedText}</span>
            {text.length > maxLength && (
                <IconButton
                    onClick={toggleExpanded}
                    data-testid={`${dataTestId}-toggle-button`}
                    color="primary"
                    sx={{
                        marginLeft: "5px",
                        padding: "0",
                        cursor: "pointer",
                        textDecoration: "underline",
                        fontSize: "inherit",
                    }}
                >
                    {isExpanded ? "Show less" : "Show more"}
                </IconButton>
            )}
        </div>
    );
};

export default TruncateText;
