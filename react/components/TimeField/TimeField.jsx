import React from "react";
import { TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import InputLabel from "../InputLabel";
import { kebabCase } from "lodash";

const timeFieldStyle = {
    width: "170px",
    height: 40,
    marginTop: "8px",
    "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "3px",
        borderColor: "#8C8C8C",
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
    ...rest
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
                disabled={disabled}
                value={value ? value : null}
                onChange={handleTimeChange}
                slotProps={{
                    textField: {
                        id: "time",
                    },
                }}
                {...rest}
            />
        </LocalizationProvider>
    );
};

export default TimeField;
