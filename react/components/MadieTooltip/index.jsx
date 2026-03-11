import React from "react";
import { Tooltip } from "@mui/material";
import TooltipIcon from "../MadieTooltipIcon";
import PropTypes from "prop-types";

// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role
const MadieToolTip = 
({
  id,
  widthContainer = 14,
  heightContainer = 14,
  ...rest
}) => {
    return (
        <Tooltip
          placement="bottom"
          arrow
          slotProps={{
            tooltip: {
              sx: {
                zIndex: 99,
                backgroundColor: "#333",
                "& .MuiTooltip-arrow": {
                  color: "#333",
                },
              },
            },
          }}
              {...rest}
        >
              <div style={{ width: widthContainer, height: heightContainer}} data-testId={id} id={id}>
                <TooltipIcon />
              </div>
            </Tooltip>
          );
};

MadieToolTip.propTypes = {
    tooltipText: PropTypes.string,
    id: PropTypes.string,
};

export default MadieToolTip;
