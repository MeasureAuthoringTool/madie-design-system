import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Chevron } from "../../lib/Chevron.jsx";

const Accordion = (props) => {
    const content = useRef(null);
    const [setActive, setActiveState] = useState(props.isOpen ? "active" : "");
    const ariaPressed = setActive ? "true" : "false";
    const getHeight = (node) => {
        if (node) {
            return `${node.scrollHeight}px`;
        }
        return "auto";
    };
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
        if (props.isOpen) {
            openAccordion();
        } else {
            closeAccordion();
        }
    }, [props.isOpen]);

    return (
        <div className="accordion-section" data-testid="accordion">
            <button
                className={`accordion ${setActive}`}
                aria-label={props.title}
                aria-pressed={ariaPressed}
                aria-expanded={ariaPressed}
                tabIndex="0"
                onClick={toggleAccordion}
            >
                <div className="accordion-left-title">
                    <p className="accordion-title">{props.title}</p>
                    {props.subTitle && (
                        <p className="accordion-subtitle">{props.subTitle}</p>
                    )}
                </div>
                {props.centerItem && (
                    <div className="accordion-center">
                        <p>{props.centerItem}</p>
                    </div>
                )}
                {props.rightItem && (
                    <div className="accordion-right">
                        <p>{props.rightItem}</p>
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
                <div className="accordion-text dashed-border">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    children: PropTypes.any.isRequired,
    centerItem: PropTypes.string,
    rightItem: PropTypes.string,
    isOpen: PropTypes.bool,
};

Accordion.defaultProps = {
    title: "",
    isOpen: false,
};

export default Accordion;
