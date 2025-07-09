import React from "react";
import TextField from "./index";
import { FormHelperText, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

export default {
    title: "TextField",
    component: TextField,
    argTypes: {
        disabled: { control: "boolean" },
        error: { control: "boolean" },
        required: { control: "boolean" },
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"], // adjust if your component supports different sizes
        },
        helperText: { control: "text" },
        label: { control: "text" },
        placeholder: { control: "text" },
        labelColor: { control: "color" },
        value: { control: "text" },
    },
};

const Wrapper = ({ children }) => (
    <div className="qpp-u-padding--16" style={{ width: 300 }}>
        {children}
    </div>
);

const Template = (args) => (
    <Wrapper>
        <TextField
            {...args}
            id={args.id || "measureName"}
            inputProps={{
                "data-testid": "measure-name-input",
                ...args.inputProps,
            }}
            data-testid={args["data-testid"] || "measure-name-text-field"}
        />
    </Wrapper>
);

export const Interactive = Template.bind({});
Interactive.args = {
    size: "small",
    disabled: false,
    error: false,
    required: false,
    helperText: "",
    label: "Text Label",
    placeholder: "Placeholder",
    labelColor: undefined,
    value: "",
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
    ...Interactive.args,
    helperText: (
        <FormHelperText data-testid="helper-text" error={false}>
            a descriptive message
        </FormHelperText>
    ),
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Interactive.args,
    disabled: true,
    label: "Disabled Text Label",
};

export const Required = Template.bind({});
Required.args = {
    ...Interactive.args,
    required: true,
};

export const Error = Template.bind({});
Error.args = {
    ...Interactive.args,
    error: true,
    required: true,
    helperText: "An error message",
};

export const WithToolTipText = Template.bind({});
WithToolTipText.args = {
    ...Interactive.args,
    label: "Confirm New Version #",
    tooltipText: "Input the new version # located to the left to confirm.",
    helperText: "test",
    id: "measure-name",
};

export const VariedHeights = () => (
    <div
        className="qpp-u-padding--16"
        style={{ width: 900, marginBottom: "16px", display: "flex", gap: 16 }}
    >
        <TextField
            placeholder="Placeholder"
            required
            label="Text Label"
            id="measureName1"
            inputProps={{ "data-testid": "measure-name-input1" }}
            data-testid="measure-name-text-field1"
            size="small"
            helperText="An error message"
        />
        <TextField
            placeholder="Placeholder"
            label="Text Label"
            id="measureName2"
            inputProps={{ "data-testid": "measure-name-input2" }}
            data-testid="measure-name-text-field2"
            size="small"
            helperText="An error message designed to take up a lot of space to see how we space multiple input elements within the same row in a responsive manner "
        />
        <TextField
            placeholder="Placeholder"
            error
            required
            label="Text Label"
            id="measureName3"
            inputProps={{ "data-testid": "measure-name-input3" }}
            data-testid="measure-name-text-field3"
            size="small"
            helperText="An error message"
        />
    </div>
);

export const WithLeftAndRightIcon = () => (
    <Wrapper>
        <TextField
            id="search"
            tw="w-full"
            label="Search"
            placeholder="Search"
            inputProps={{
                "data-testid": "test-case-list-search-input",
            }}
            data-testid="test-case-list-search"
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={() => {}}>
                                <ClearIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                },
            }}
            name="test-case-list-search"
        />
    </Wrapper>
);

export const TextfieldDifferentLabel = Template.bind({});
TextfieldDifferentLabel.args = {
    ...Interactive.args,
    label: "Text Label with different color",
    labelColor: "#1976d2",
};
