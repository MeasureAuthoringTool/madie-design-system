import React from "react";
import PropTypes from "prop-types";
import InputLabel from "../InputLabel";
import TextField from "../TextField";
import { Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { kebabCase } from "lodash";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.utc();
export const dateTextFieldStyle = {
    width: "170px",
    height: 40,
    marginTop: "8px",
    "& .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #8C8C8C",
        borderRadius: "3px",
        "& legend": {
            width: 0,
        },
    },
    "& .MuiOutlinedInput-root": {
        "&&": {
            borderRadius: "3px",
        },
    },
    "& .MuiInputBase-input": {
        color: "#333333",
        fontFamily: "Rubik",
        fontSize: 14,
        borderRadius: "3px",
        padding: "9px",
        Width: "170px",
        "&::placeholder": {
            opacity: 1,
            color: "#717171",
            fontFamily: "Rubik",
            fontSize: 14,
        },
    },
};

const DateField = ({
    id = "default_id",
    label,
    value,
    handleDateChange,
    disabled,
    error,
    helperText,
    required = false,
    containerSx = {},
    textFieldSx = {},
    ...rest
}) => {
    if (containerSx === undefined || containerSx === null) {
        containerSx = {};
    }
    if (textFieldSx === undefined || textFieldSx === null) {
        textFieldSx = {};
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ ...containerSx }}>
                <InputLabel
                    data-testid={`${kebabCase(label)}`}
                    style={{ marginBottom: 0, height: 16 }}
                    sx={[
                        {
                            backgroundColor: "transparent",
                            display: "flex",
                            flexDirection: "row-reverse",
                            alignSelf: "baseline",
                            justifyContent: "left",
                            textTransform: "none",
                            // force it outside the select box
                            position: "initial",
                            transform: "translateX(0px) translateY(0px)",
                            fontFamily: "Rubik",
                            fontWeight: 500,
                            fontSize: 14,
                            color: "#333",
                            "& .MuiInputLabel-asterisk": {
                                color: "#AE1C1C !important",
                                marginRight: "3px !important", //this was
                            },
                        },
                        required && {
                            transform: "translateX(-12px) translateY(0px)",
                            "& .MuiInputLabel-asterisk": {
                                color: "#D92F2",
                                marginRight: "3px !important", //this was
                            },
                        },
                        disabled && {
                            color: "rgba(0,0,0,0.6)",
                        },
                        error && {
                            color: "#AE1C1C !important",
                        },
                    ]}
                    required={required}
                >
                    {`${label}`}
                </InputLabel>
                <DatePicker
                    value={value ? dayjs.utc(value) : null}
                    onChange={handleDateChange}
                    disabled={disabled}
                    onClose={() => rest?.onBlur()}
                    slotProps={{
                        textField: (params) => {
                            const { InputProps } = params;
                            InputProps["data-testid"] = id;
                            InputProps["aria-required"] = required;

                            return {
                                id: id,
                                sx: { ...dateTextFieldStyle, ...textFieldSx },
                                value: value ? dayjs.utc(value) : null,
                                onChange: handleDateChange,
                                //...rest,
                                error: error,
                                helperText: helperText,
                                onBlur: rest?.onBlur,
                            };
                        },
                        openPickerButton: {
                            id: `${id}-open-picker-button`,
                            dataTestId: `${id}-open-picker-button`,
                        },
                    }}
                    slots={{ textField: TextField }}
                />
            </Box>
        </LocalizationProvider>
    );
};
DateField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.object,
    handleDateChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    required: PropTypes.bool,
    containerSx: PropTypes.object,
    textFieldSx: PropTypes.object,
};

export default DateField;
