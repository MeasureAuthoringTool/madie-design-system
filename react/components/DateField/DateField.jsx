import React from "react";
import PropTypes from "prop-types";
import InputLabel from "../InputLabel";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import InputAdornment from "@mui/material/InputAdornment";
import EventIcon from "@mui/icons-material/Event";

export const textFieldStyle = {
  width: "160px",
  borderRadius: "3px",
  height: 40,
  border: "1px solid #DDDDDD",
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
    padding: "9px 5px 9px 4px",
    Width: "160px",
    "&::placeholder": {
      opacity: 1,
      color: "#717171",
      fontFamily: "Rubik",
      fontSize: 14,
      padding: "9px 5px 9px 4px",
    },
  },
};

const DateField = ({ label, value, onChange, dataTestId }) => {
    return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <InputLabel
                    data-testid={dataTestId}
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
    );
};
DateField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any,
    dataTestId: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default DateField;
