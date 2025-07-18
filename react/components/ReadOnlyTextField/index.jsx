import React from "react";
import { FormControl, TextareaAutosize } from "@mui/material";
import InputLabel from "../InputLabel";
import PropTypes from "prop-types";
import _ from "lodash";

const ReadOnlyTextField = ({
    id,
    required = false,
    disabled = false,
    label,
    ...rest
}) => {
    return (
        <FormControl fullWidth>
            <InputLabel
                disabled={disabled}
                shrink
                required={required}
                htmlFor={id}
                sx={[
                    {
                        backgroundColor: "transparent",
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignSelf: "baseline",
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
                            marginRight: "3px !important",
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
                ]}
            >
                {label}
            </InputLabel>
            <TextareaAutosize
                style={{
                    color: "#333",
                    fontFamily: "Rubik",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "24px",
                    border: "none",
                    resize: "none",
                    padding: "0px 0px",
                    outline: "none",
                    boxShadow: "none",
                }}
                readOnly={true}
                disableUnderline={true}
                label={null}
                disabled={disabled}
                id={id}
                {...rest}
                value={
                    rest?.value == null ||
                    rest.value === "" ||
                    (typeof rest.value === "object" &&
                        Object.keys(rest.value).length === 0)
                        ? "-"
                        : rest.value
                }
            />
        </FormControl>
    );
};

ReadOnlyTextField.propTypes = {
    id: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string, // expects placeholder objects of { name: value } and inserts into the render item function.
    label: PropTypes.string,
};
export default ReadOnlyTextField;
