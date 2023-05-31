import React from "react";
import PropTypes from "prop-types";
import InputLabel from "../InputLabel";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import InputAdornment from "@mui/material/InputAdornment";
import EventIcon from "@mui/icons-material/Event";

export const textFieldStyle = {
    maxWidth: "160px",
    borderRadius: "3px",
    height: 40,
    border: "1px solid #DDDDDD",
    background: "#FFFFFF",
    marginTop: "7px",
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
        background: "#FFFFFF",
        fontFamily: "Rubik",
        fontSize: 14,
        borderRadius: "3px",
        padding: "9px 3px 9px 0px",
        maxWidth: "150px",
        "&::placeholder": {
            color: "#333333",
            fontFamily: "Rubik",
            fontSize: 14,
            padding: "9px 3px 9px 0px",
        },
    },
};

const DateField = ({ label, value, onChange, dataTestId }) => {
    return (
        <div style={{ maxWidth: "155px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <InputLabel
                    data-testid={dataTestId}
                    sx={[
                        {
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
                    {`${label} Date`}
                </InputLabel>

                <DatePicker
                    disableOpenPicker
                    value={value ? value : null}
                    onChange={onChange}
                    slotProps={{
                        textField: {
                            id: "label",
                            sx: textFieldStyle,
                            InputProps: {
                                startAdornment: (
                                    <InputAdornment
                                        position="start"
                                        style={{
                                            color: "#515151",
                                            left: "10.42%",
                                        }}
                                    >
                                        <EventIcon />
                                    </InputAdornment>
                                ),
                            },
                        },
                    }}
                />
            </LocalizationProvider>
        </div>
    );
};
DateField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    dataTestId: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default DateField;
