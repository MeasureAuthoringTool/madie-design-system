import * as React from "react";
import TextField from "../TextField";

export default function NumberInput({
    id,
    error = false,
    helperText = undefined,
    required = false,
    disabled = false,
    label,
    tooltipText,
    inputProps,
    allowNegative = true,
    ...rest
}) {
    const newInputProps = { ...inputProps } || {};
    if (!newInputProps["data-testid"]) {
        newInputProps["data-testid"] = `${id}-input`;
    }
    // if aria-describedBy is not provided, add it depending on helper-text and tooltip presence
    if (!newInputProps["aria-describedby"]) {
        let newDescribedBy = "";
        if (helperText) {
            newDescribedBy += `${id}-helper-text `;
        }
        if (tooltipText) {
            newDescribedBy += `${id}-tooltip`;
        }
        if (newDescribedBy) {
            newInputProps["aria-describedby"] = newDescribedBy;
        }
    }
    newInputProps["type"] = "number";
    if (!allowNegative) {
        newInputProps["min"] = 0;
    }
    return (
        <TextField
            id={`integer-field-${id}`}
            error={error}
            helperText={helperText}
            required={required}
            disabled={disabled}
            label={label}
            tooltipText={tooltipText}
            inputProps={newInputProps}
            placeholder={`Enter ${label}`}
            data-testid={`integer-field-${id}`}
            onKeyDown={(e) => {
                if (
                    e.key === "e" ||
                    e.key === "E" ||
                    e.key === "+" ||
                    e.key === "."
                ) {
                    e.preventDefault();
                }
            }}
            {...rest}
        />
    );
}
