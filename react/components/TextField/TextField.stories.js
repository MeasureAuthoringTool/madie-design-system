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
            label="Disabled Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
            disabled
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
            helperText="An error message"
        />
    </Wrapper>
);

export const WithToolTipText = () => (
    <Wrapper>
        <TextField
            placeholder="Placeholder"
            label="Confirm New Version #"
            data-testid="measure-name-text-field"
            size="small"
            tooltipText="Input the new version # located to the left to confirm."
            helperText="test"
            id="measure-name"
            // previously this was how it was done. it could make more sense to only pass it an id and progrematically determine it. Example:
            // inputProps={{
            //     "data-testid": "measure-name-input",
            //     "aria-describedby":
            //         "measure-name-helper-text measure-name-tooltip",
            // }}
        />
    </Wrapper>
);

export const VariedHeights = () => (
    <div
        className="qpp-u-padding--16"
        style={{ width: 900, marginBottom: "16px" }}
    >
        <div style={{ display: "flex", flexDirection: "row" }}>
            <TextField
                placeholder="Placeholder"
                required
                label="Text Label"
                id="measureName"
                inputProps={{ "data-testid": "measure-name-input" }}
                data-testid="measure-name-text-field"
                size="small"
                helperText="An error message"
            />
            <TextField
                placeholder="Placeholder"
                label="Text Label"
                id="measureName"
                inputProps={{ "data-testid": "measure-name-input" }}
                data-testid="measure-name-text-field"
                size="small"
                helperText="An error message designed to take up a lot of space to see how we space multiple input elements within the same row in a responsive manner "
            />
            <TextField
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
