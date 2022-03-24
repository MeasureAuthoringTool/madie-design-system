const OFFSET = 12; // modified from reach-ui/tooltip OFFSET value
const TRIANGLE_SCALE_X = 6;
const TRIANGLE_SCALE_Y = 8;

const isDirectionUp = (triggerRect, tooltipRect) => {
    const collisions = {
        top: triggerRect.top - tooltipRect.height < 0,
        bottom:
            window.innerHeight <
            triggerRect.bottom + tooltipRect.height + OFFSET,
    };

    return !collisions.top || collisions.bottom;
};

// modified from @reach/tooltip default positioning function
// positions Tooltip relative to trigger
// https://github.com/reach/reach-ui/blob/master/packages/tooltip/src/index.tsx#L532
const positionTip = (triggerRect, tooltipRect) => {
    if (!triggerRect || !tooltipRect) {
        return {};
    }

    const triggerCenter = triggerRect.left + triggerRect.width / 2;
    const left = triggerCenter - tooltipRect.width / 2;
    const maxLeft = window.innerWidth - tooltipRect.width - 2;
    const centerLeft =
        Math.min(Math.max(2, left), maxLeft) + window.pageXOffset;

    const directionUp = isDirectionUp(triggerRect, tooltipRect);

    return {
        left: `${centerLeft}px`,
        top: directionUp
            ? `${
                  triggerRect.top -
                  OFFSET -
                  tooltipRect.height +
                  window.pageYOffset
              }px`
            : `${
                  triggerRect.top +
                  OFFSET +
                  triggerRect.height +
                  window.pageYOffset
              }px`,
    };
};

export default positionTip;

// position triangle relative to tooltip position
// TODO: figure out a better way to render these updates from within react
// rendering. This method causes an additional repaint after the Tooltip
// has been rendered. may require changes to @reach/tooltip.
export const positionTriangle = (triggerRect, tooltipRect) => {
    const directionUp = isDirectionUp(triggerRect, tooltipRect);
    const triangleTop = directionUp
        ? triggerRect.top + window.pageYOffset - OFFSET
        : triggerRect.bottom + window.pageYOffset + OFFSET - TRIANGLE_SCALE_Y;

    const triangleLeft =
        triggerRect.left - TRIANGLE_SCALE_X + triggerRect.width / 2;

    const triangleBorder = directionUp
        ? `border-top: ${TRIANGLE_SCALE_Y}px solid;`
        : `border-bottom: ${TRIANGLE_SCALE_Y}px solid;`;

    return `
        border-left: ${TRIANGLE_SCALE_X}px solid transparent;
        border-right: ${TRIANGLE_SCALE_X}px solid transparent;
        left: ${triangleLeft}px;
        top: ${triangleTop}px;
        ${triangleBorder}
    `;
};
