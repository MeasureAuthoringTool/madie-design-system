import React from "react";
import TextField from "../TextField";
import { Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import ReadOnlyTextField from "../ReadOnlyTextField";

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
    if (disabled) {
        return (
            <ReadOnlyTextField
                required={required}
                label={label}
                id={id}
                size="small"
                {...rest}
                value={value ? dayjs.utc(value).format("MM/DD/YYYY") : "-"}
            />
        );
    }

    if (containerSx === undefined || containerSx === null) {
        containerSx = {};
    }
    if (textFieldSx === undefined || textFieldSx === null) {
        textFieldSx = {};
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ ...containerSx }}>
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
                                label,
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

export default DateField;
