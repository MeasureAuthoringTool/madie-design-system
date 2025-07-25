import React from "react";
import Popover from "@mui/material/Popover";

const MadiePopover = ({
    optionsOpen,
    anchorEl,
    handleClose,
    canEdit,
    editViewSelectOptionProps = {},
    additionalSelectOptionProps = [],
    otherSelectOptionProps = [],
}) => {
    return (
        <Popover
            open={optionsOpen}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
            sx={{
                ".MuiPopover-paper": {
                    background: "none",
                    boxShadow: "none",
                    overflow: "visible",
                    ".popover-content": {
                        border: "solid 1px #8c8c8c",
                        position: "relative",
                        marginTop: "16px",
                        marginLeft: "-70px",
                        borderRadius: "6px",
                        background: "#F7F7F7",
                        width: "fit-content",
                        "&::before": {
                            borderWidth: "thin",
                            position: "absolute",
                            top: "-8px",
                            left: "calc(50% - 8px)",
                            height: "16px",
                            width: "16px",
                            background: "#F7F7F7",
                            border: "solid 1px #8c8c8c",
                            borderColor:
                                "#8c8c8c transparent transparent #8c8c8c",
                            content: '""',
                            transform: "rotate(45deg)",
                        },
                        ".btn-container": {
                            display: "flex",
                            flexDirection: "column",
                            padding: "10px 0",
                            button: {
                                zIndex: 2,
                                fontSize: 14,
                                padding: "0px 12px",
                                textAlign: "left",
                                "&:hover": {
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                },
                            },
                        },
                    },
                },
            }}
        >
            <div className="popover-content" data-testid="popover-content">
                <div className="btn-container">
                    <button
                        data-testid={editViewSelectOptionProps.dataTestId}
                        onClick={editViewSelectOptionProps.toImplementFunction}
                    >
                        {editViewSelectOptionProps.label}
                    </button>
                    {additionalSelectOptionProps &&
                        additionalSelectOptionProps.map((res) => {
                            return (
                                <button
                                    key={res.dataTestId}
                                    data-testid={res.dataTestId}
                                    onClick={res.toImplementFunction}
                                >
                                    {res.label}
                                </button>
                            );
                        })}
                    {canEdit &&
                        otherSelectOptionProps.map((res) => {
                            return (
                                <button
                                    key={res.dataTestId}
                                    data-testid={res.dataTestId}
                                    onClick={res.toImplementFunction}
                                >
                                    {res.label}
                                </button>
                            );
                        })}
                </div>
            </div>
        </Popover>
    );
};

export default MadiePopover;
