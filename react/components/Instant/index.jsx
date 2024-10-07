import React from "react";
import TextField from "../TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { FormControl, Box } from "@mui/material";

dayjs.extend(utc);
dayjs.utc();
dayjs.extend(timezone);
const formatDateTime = (dateTime) => dayjs.utc(dateTime).format('YYYY-MM-DDTHH:mm:ss.SSSZ');
export const defaultDateFieldStyles = {
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
const Instant = ({
    dateTimeValue,
    handleDateTimeChange,
    required = false,
    disabled,
    id = "default_dateTime-input",
    textFieldSx = {},
    dateFieldSx = {},
    error = false,
    helperText,
    datePickerProps = {},
    ...rest
}) => {
    const textFieldStyles = {
        width: "55px",
        height: "40px",
        "& .MuiInputBase-input": {
            color: "#333",
            fontFamily: "Rubik",
            fontSize: 14,
            borderRadius: "3px",
            padding: "9px 5px 9px 5px",
            "&::placeholder": {
                opacity: 1,
                color: "#717171",
            },
        },
    };
    const handleHoursChange = (e) => {
        const newHours = parseInt(e.target.value, 10);
        if (dateTimeValue){
            const updatedDateTime = dayjs.utc(dateTimeValue)
            .set('hour', newHours)
            handleDateTimeChange(formatDateTime(updatedDateTime));

        }
    };
    const handleMinutesChange = (e) => {
        const newMinutes = parseInt(e.target.value, 10);
        if (dateTimeValue){
            const updatedDateTime = dayjs.utc(dateTimeValue)
            .set('minute', newMinutes)
            handleDateTimeChange(formatDateTime(updatedDateTime));
        }
    };
    const handleSecondsChange = (e) => {
        const newSeconds = parseInt(e.target.value, 10);
        if (dateTimeValue) {
            const updatedDateTime = dayjs.utc(dateTimeValue)
            .set('second', newSeconds)
            handleDateTimeChange(formatDateTime(updatedDateTime));
        }
    };
    const handleMillisecondsChange = (e) => {
        const newMilliseconds = parseInt(e.target.value, 10);
        if (dateTimeValue) {
            const updatedDateTime = dayjs.utc(dateTimeValue)
            .set('millisecond', newMilliseconds)
            handleDateTimeChange(formatDateTime(updatedDateTime));
        }
    };
    const onDateChange = (newDate) => {
        if (isNaN(newDate)){
            return
        }
        if (dateTimeValue){
            const updatedDate = dayjs.utc(newDate);
            handleDateTimeChange(formatDateTime(updatedDate));
        } 
        else {
            const updatedDate = newDate.utc(newDate);
            handleDateTimeChange(formatDateTime(updatedDate));
        }
    }
    return (
        <FormControl error={error}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexGrow: 1,
                    }}
                >
                    <Box sx={{ marginRight: "24px" }}>
                        <DatePicker
                            value={
                                dateTimeValue ? dayjs.utc(dateTimeValue) : null
                            }
                            onChange={onDateChange}
                            disabled={disabled}
                            onClose={() => rest?.onBlur ? onBlur() : undefined}
                            slotProps={{
                                textField: (params) => {
                                    const { InputProps } = params;
                                    InputProps["data-testid"] = id;
                                    InputProps["aria-required"] = required;
                                    return {
                                        id: id,
                                        label: "Date",
                                        sx: {
                                            ...defaultDateFieldStyles,
                                            ...dateFieldSx,
                                        },
                                        value: dateTimeValue
                                            ? dayjs.utc(dateTimeValue)
                                            : null,
                                        onChange: onDateChange,
                                        error,
                                        helperText: helperText,
                                        onBlur: rest?.onBlur,
                                        ...rest,
                                    };
                                },
                                openPickerButton: {
                                    id: `${id}-open-picker-button`,
                                    "data-testid": `${id}-open-picker-button`,
                                },
                            }}
                            slots={{ textField: TextField }}
                        />
                    </Box>

                    <TextField
                        id={`${id}-hour-input`}
                        data-testid={`${id}-hour-input`}
                        value={dateTimeValue ? dayjs.utc(dateTimeValue).hour() : 0}
                        onChange={handleHoursChange}
                        label="Hr"
                        type="number"
                        disabled={!dateTimeValue}
                        inputProps={{
                            min: 0,
                            max: 24,
                        }}
                        textFieldStyles={textFieldStyles}
                        required={required}
                    />
                    <TextField
                        id={`${id}-minute-input`}
                        data-testid={`${id}-minute-input`}
                        value={dateTimeValue ? dayjs.utc(dateTimeValue).minute() : 0}
                        onChange={handleMinutesChange}
                        label="Min"
                        type="number"
                        disabled={!dateTimeValue}
                        inputProps={{
                            min: 0,
                            max: 60,
                        }}
                        textFieldStyles={textFieldStyles}
                        required={required}
                    />
                    <TextField
                        id={`${id}-second-input`}
                        data-testid={`${id}-second-input`}
                        value={dateTimeValue ? dayjs.utc(dateTimeValue).second() : 0}
                        onChange={handleSecondsChange}
                        label="Sec"
                        type="number"
                        disabled={!dateTimeValue}
                        inputProps={{
                            min: 0,
                            max: 60,
                        }}
                        textFieldStyles={textFieldStyles}
                        required={required}
                    />
                    <TextField
                        id={`${id}-millisecond-input`}
                        data-testid={`${id}-millisecond-input`}
                        value={dateTimeValue ? dayjs.utc(dateTimeValue).millisecond() : 0}
                        onChange={handleMillisecondsChange}
                        label="MS"
                        type="number"
                        disabled={!dateTimeValue}
                        inputProps={{
                            min: 0,
                            max: 999,
                        }}
                        textFieldStyles={textFieldStyles}
                        required={required}

                    />
                </Box>
            </LocalizationProvider>
        </FormControl>
    );
};

export default Instant;
