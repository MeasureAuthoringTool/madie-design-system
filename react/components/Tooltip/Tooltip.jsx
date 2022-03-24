import React, { cloneElement, useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";
import positionTip, { positionTriangle } from "./position";
import { useTooltip, TooltipPopup } from "@reach/tooltip";
import Portal from "@reach/portal";

// TODO: investigate ways to allow more styling via css? the triangle
// positioning effect issue may need to be resolved to allow for this.
const TEXT_COLOR = "#FFF";
const BACKGROUND_COLOR = "#333";

/**
 * Generic styled tooltip component.
 * Corresponding styles: /styles/components/_tooltip.scss
 *
 * Extends implementation from @reach/tooltip:
 * https://reacttraining.com/reach-ui/tooltip
 */
const Tooltip = ({ children, label, ariaLabel, DEBUG_STYLE }) => {
    const [trigger, tooltip] = useTooltip({ DEBUG_STYLE });
    const { isVisible, triggerRect } = tooltip;
    const tooltipPopupRef = useRef();
    const triangleRef = useRef();

    useLayoutEffect(() => {
        // For some reason, the forwardRef for the tooltipPopup points to an undefined
        // dom element when we first render the portal containing the triangle. Using
        // an effect here will ensure that the ref is available when applying styles.
        // TODO: investigate and make issue for @reach-ui/tooltip?
        if (isVisible && tooltipPopupRef.current && triggerRect) {
            const tooltipRect = tooltipPopupRef.current.getBoundingClientRect();
            const positionCssText = positionTriangle(triggerRect, tooltipRect);
            const cssText = `
                  position: absolute;
                  width: 0;
                  height: 0;
                  ${positionCssText}
                  border-top-color: ${BACKGROUND_COLOR};
                  border-bottom-color: ${BACKGROUND_COLOR};
                  z-index: 1;
                `;
            triangleRef.current.style.cssText = cssText;
        }
    });

    return (
        <>
            {cloneElement(children, trigger)}
            <TooltipPopup
                {...tooltip}
                label={label}
                ariaLabel={ariaLabel}
                style={{
                    background: BACKGROUND_COLOR,
                    color: TEXT_COLOR,
                }}
                ref={tooltipPopupRef}
                position={positionTip}
            />
            {isVisible && (
                <Portal>
                    <div
                        ref={triangleRef}
                        style={{
                            position: "absolute",
                            width: 0,
                            height: 0,
                        }}
                    />
                </Portal>
            )}
        </>
    );
};

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.node.isRequired,
    ariaLabel: PropTypes.string,
    DEBUG_STYLE: PropTypes.bool,
};

Tooltip.defaultProps = {
    ariaLabel: undefined,
    DEBUG_STYLE: undefined,
};

export default Tooltip;
