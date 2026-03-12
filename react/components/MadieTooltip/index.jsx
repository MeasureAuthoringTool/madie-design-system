import React from "react";
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
              <div style={{ width: widthContainer, height: heightContainer}} data-testId={id} id={id}>
                <TooltipIcon />
              </div>
            </Tooltip>
          );
};

export default MadieToolTip;
