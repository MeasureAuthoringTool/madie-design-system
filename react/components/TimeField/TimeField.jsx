import React from "react";
import { TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import InputLabel from "../InputLabel";
import { kebabCase } from "lodash";
import PropTypes from "prop-types";

export const timeFieldStyle = {
    width: "134px",
    borderRadius: "3px",
    height: 40,
    border: "1px solid #B0B0B0",
    marginTop: "8px",
    "& .MuiOutlinedInput-notchedOutline": {
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

const TimeField = ({
    label,
    value,
    handleTimeChange,
    disabled,
    required,
    error,
}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <InputLabel
                data-testid={`${kebabCase(label)}`}
                style={{ marginBottom: 0, height: 16 }}
                sx={[
                    {
                        backgroundColor: "transparent",
                        textTransform: "none",
                        height: 17,
                        left: 0,
                        right: 0,
                        top: 0,
                        fontFamily: "Rubik",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: 14,
                        color: "#333333",
                    },
                ]}
                required={required}
                disabled={disabled}
                error={error}
            >
                {`${label}`}
            </InputLabel>
            <TimePicker
                sx={timeFieldStyle}
                disableOpenPicker
                disabled={disabled}
                value={value ? value : null}
                onChange={handleTimeChange}
                slotProps={{
                    textField: {
                        id: "time",
                    },
                }}
            />
        </LocalizationProvider>
    );
};

TimeField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.object,
    handleTimeChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    error: PropTypes.string,
};

export default TimeField;
