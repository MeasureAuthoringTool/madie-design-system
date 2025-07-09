import React from "react";

/**
 * @param {{
 *   children?: React.ReactNode,
 *   value?: number,
 *   id: string,
 *   index?: number,
 *   className?: string,
 *   disabled?: boolean
 * }} props
 */
export const TabPanel = ({
    children,
    value = 0,
    index = 0,
    id,
    className = "",
    disabled = false,
}) => {
    const classes = ["qpp-c-tabs__panel", className].filter(Boolean).join(" ");

    return (
        <div
            role="tabpanel"
            id={id}
            aria-hidden={value !== index}
            aria-labelledby={`qpp-c-tabs__item--${id}`}
            aria-disabled={disabled}
            className={classes}
        >
            {value === index && children}
        </div>
    );
};

export default TabPanel;
