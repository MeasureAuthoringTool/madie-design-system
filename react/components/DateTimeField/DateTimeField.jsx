import React from "react";
import PropTypes from "prop-types";
import InputLabel from "../InputLabel";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc';

import { FormControl } from "@mui/material";
import { kebabCase } from "lodash";

dayjs.extend(utc)
dayjs.utc();
export const dateTimeTextFieldStyle = {
    width: "240px",
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
                    value={dateTimeValue ? dayjs.utc(dateTimeValue) : null}
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
    disabled:PropTypes.bool
};

export default DateTimeField;