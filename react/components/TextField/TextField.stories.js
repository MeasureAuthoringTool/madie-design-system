import React from "react";
import PropTypes from "prop-types";
import { withKnobs } from "@storybook/addon-knobs";
import TextField from "./index";
import { FormHelperText } from "@mui/material";
export default {
    title: "TextField",
    component: TextField,
    decorators: [withKnobs],
};

const Wrapper = ({ children }) => (
    <div className="qpp-u-padding--16" style={{ width: 300 }}>
        {children}
    </div>
);
Wrapper.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
export const Textfield = () => (
    <Wrapper>
        <TextField
            placeholder="Placeholder"
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
        />
    </Wrapper>
);

export const WithHelperText = () => (
    <Wrapper>
        <TextField
            placeholder="Placeholder"
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
            helperText={
                <FormHelperText data-testid={`helper-text`} error={false}>
                    a descriptive message
                </FormHelperText>
            }
        />
    </Wrapper>
);

export const Disabled = () => (
    <Wrapper>
        <TextField
            placeholder="Placeholder"
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
            disabled
            required
        />
    </Wrapper>
);

export const Required = () => (
    <Wrapper>
        <TextField
            placeholder="Placeholder"
            required
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
        />
    </Wrapper>
);

export const Error = () => (
    <Wrapper>
        <TextField
            placeholder="Placeholder"
            error
            required
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
            helperText={
                <FormHelperText data-testid={`helper-text`} error={true}>
                    An error message
                </FormHelperText>
            }
        />
    </Wrapper>
);
