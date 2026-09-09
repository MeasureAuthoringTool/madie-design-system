import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "@mui/material";
import TooltipIcon from "../MadieTooltipIcon";

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
              <div
                aria-describedby={id} 
                tabIndex={0}
                style={{ width: widthContainer, height: heightContainer}}
                data-testId={id} 
                id={id}
                role="tooltip"
              >
                <TooltipIcon />
              </div>
            </Tooltip>
          );
};


MadieToolTip.propTypes = {
  id: PropTypes.string,
  widthContainer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  heightContainer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default MadieToolTip;
