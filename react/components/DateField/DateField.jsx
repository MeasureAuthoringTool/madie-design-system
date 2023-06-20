import React from "react";
import PropTypes from "prop-types";
import InputLabel from "../InputLabel";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { kebabCase } from "lodash";

export const dateTextFieldStyle = {
    width: "170px",
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

const DateField = ({ label, value, handleDateChange, disabled }) => {
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
            >
                {`${label}`}
            </InputLabel>
            <DatePicker
                value={value ? value : null}
                onChange={handleDateChange}
                disabled={disabled}
                slotProps={{
                    textField: {
                        id: "date",
                        sx: dateTextFieldStyle,
                    },
                }}
            />
        </LocalizationProvider>
    );
};
DateField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.object,
    handleDateChange: PropTypes.func.isRequired,
    disabled:PropTypes.bool.isRequired
};

export default DateField;
