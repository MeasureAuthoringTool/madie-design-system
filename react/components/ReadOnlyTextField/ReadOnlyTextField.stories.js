import React from "react";
import PropTypes from "prop-types";
import { withKnobs } from "@storybook/addon-knobs";
import ReadOnlyTextField from "./index";
import { FormHelperText } from "@mui/material";
export default {
    title: "ReadOnlyTextField",
    component: ReadOnlyTextField,
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
        <ReadOnlyTextField
            placeholder="Placeholder"
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
            value="This is a read-only text field"
        />
    </Wrapper>
);

export const Disabled = () => (
    <Wrapper>
        <ReadOnlyTextField
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
        <ReadOnlyTextField
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
        <ReadOnlyTextField
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
