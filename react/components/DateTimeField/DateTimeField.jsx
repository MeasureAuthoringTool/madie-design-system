import React from "react";
import PropTypes from "prop-types";
import InputLabel from "../InputLabel";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormControl } from "@mui/material";
import { kebabCase } from "lodash";

export const dateTimeTextFieldStyle = {
    width: "240px",
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
        Width: "240px",
        "&::placeholder": {
            opacity: 1,
            color: "#717171",
            fontFamily: "Rubik",
            fontSize: 14,
        },
    },
};

const DateTimeField = ({ label, dateTimeValue, handleDateTimeChange,disabled }) => {
    console.log(disabled)
    return (
        <FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <InputLabel
                    style={{ marginBottom: 0, height: 16 }}
                    data-testId={`${kebabCase(label)}`}
                >
                    {`${label}`}
                </InputLabel>
                <DateTimePicker
                    value={dateTimeValue ? dateTimeValue : null}
                    onChange={handleDateTimeChange}
                    views={["year", "day", "hours", "minutes"]}
                    disabled={disabled}
                    slotProps={{
                        textField: {
                            id: "dateTime",
                            sx: dateTimeTextFieldStyle,
                        },
                    }}
                />
            </LocalizationProvider>
        </FormControl>
    );
};
DateTimeField.propTypes = {
    dateTimeValue: PropTypes.object,
    handleDateTimeChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    disabled:PropTypes.bool.isRequired
};

export default DateTimeField;