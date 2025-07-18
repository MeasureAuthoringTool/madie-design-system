import React from "react";
import PropTypes from "prop-types";
import { withKnobs } from "@storybook/addon-knobs";
import TextArea from "./index";
import { FormHelperText } from "@mui/material";
export default {
    title: "TextArea",
    component: TextArea,
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
export const Textarea = () => (
    <Wrapper>
        <TextArea
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
        <TextArea
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

export const ReadOnlyWithValue = () => (
    <Wrapper>
        <TextArea
            placeholder="Placeholder"
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
            value="This is a read only text area"
            readOnly
            required
        />
    </Wrapper>
);

export const DisabledWithValue = () => (
    <Wrapper>
        <TextArea
            placeholder="Placeholder"
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
            value="This is a disabled text area"
            disabled
            required
        />
    </Wrapper>
);

export const DisabledWithNoValue = () => (
    <Wrapper>
        <TextArea
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
        <TextArea
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
        <TextArea
            placeholder="Placeholder"
            error
            required
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
            helperText="An error message"
        />
    </Wrapper>
);

export const VariedHeights = () => (
    <div
        className="qpp-u-padding--16"
        style={{ width: 900, marginBottom: "16px" }}
    >
        <div style={{ display: "flex", flexDirection: "row" }}>
            <TextArea
                placeholder="Placeholder"
                required
                label="Text Label"
                id="measureName"
                inputProps={{ "data-testid": "measure-name-input" }}
                data-testid="measure-name-text-field"
                size="small"
                helperText="An error message"
            />
            <TextArea
                placeholder="Placeholder"
                required
                label="Text Label"
                id="measureName"
                inputProps={{ "data-testid": "measure-name-input" }}
                data-testid="measure-name-text-field"
                size="small"
                helperText="An error message"
            />
            <TextArea
                placeholder="Placeholder"
                label="Text Label"
                id="measureName"
                inputProps={{ "data-testid": "measure-name-input" }}
                data-testid="measure-name-text-field"
                size="small"
                helperText="An error message designed to take up a lot of space to see how we space multiple input elements within the same row in a responsive manner "
            />
            <TextArea
                placeholder="Placeholder"
                error
                required
                label="Text Label"
                id="measureName"
                inputProps={{ "data-testid": "measure-name-input" }}
                data-testid="measure-name-text-field"
                size="small"
                helperText="An error message"
            />
        </div>
    </div>
);
