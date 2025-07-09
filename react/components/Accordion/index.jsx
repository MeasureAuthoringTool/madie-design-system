import React, { useState, useRef, useEffect } from "react";
import { Chevron } from "../../lib/Chevron.jsx";

/**
 * @param {{
 *   title?: string,
 *   subTitle?: string,
 *   children: React.ReactNode,
 *   centerItem?: string,
 *   rightItem?: string,
 *   isOpen?: boolean
 * }} props
 */
const Accordion = ({
    title = "",
    subTitle,
    children,
    centerItem,
    rightItem,
    isOpen = false,
}) => {
    const content = useRef(null);
    const [setActive, setActiveState] = useState(isOpen ? "active" : "");
    const ariaPressed = setActive ? "true" : "false";

    const getHeight = (node) => (node ? `${node.scrollHeight}px` : "auto");
    const height = setActive ? getHeight(content.current) : "0px";
    const rotate = setActive ? "accordion-icon rotate" : "accordion-icon";

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
    }

    function openAccordion() {
        setActiveState("active");
    }

    function closeAccordion() {
        setActiveState("");
    }

    useEffect(() => {
        if (isOpen) {
            openAccordion();
        } else {
            closeAccordion();
        }
    }, [isOpen]);

    return (
        <div className="accordion-section" data-testid="accordion">
            <button
                className={`accordion ${setActive}`}
                aria-label={title}
                aria-pressed={ariaPressed}
                aria-expanded={ariaPressed}
                tabIndex="0"
                onClick={toggleAccordion}
            >
                <div className="accordion-left-title">
                    <p className="accordion-title">{title}</p>
                    {subTitle && (
                        <p className="accordion-subtitle">{subTitle}</p>
                    )}
                </div>
                {centerItem && (
                    <div className="accordion-center">
                        <p>{centerItem}</p>
                    </div>
                )}
                {rightItem && (
                    <div className="accordion-right">
                        <p>{rightItem}</p>
                    </div>
                )}
                <div className="chevron-container">
                    <Chevron className={rotate} />
                </div>
            </button>
            <div
                ref={content}
                style={{ maxHeight: height }}
                className="accordion-content"
            >
                <div className="accordion-text dashed-border">{children}</div>
            </div>
        </div>
    );
};

export default Accordion;
