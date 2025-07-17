import React from "react";
import PropTypes from "prop-types";
import { withKnobs } from "@storybook/addon-knobs";
import Select from "./index";
import { MenuItem, Box } from "@mui/material";

export default {
    title: "Select",
    component: Select,
    decorators: [withKnobs],
};

const Wrapper = ({ children }) => (
    <div
        className="qpp-u-padding--16"
        style={{ width: 300, marginBottom: "16px" }}
    >
        {children}
    </div>
);
Wrapper.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

const options = [
    { key: "key1", value: "value1", testId: "testid1", name: "name1" },
    { key: "key2", value: "value2", testId: "testid2", name: "name2" },
    { key: "key3", value: "value2", testId: "testid3", name: "name3" },
];
export const SelectWithLabel = () => (
    <Wrapper>
        <Select
            defaultValue=""
            placeHolder={{ name: "placeholder", value: "" }}
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
            options={options.map(({ key, value, testId, name }) => {
                return (
                    <MenuItem
                        key={key}
                        value={value}
                        data-testid={`option-${testId}`}
                    >
                        {name}
                    </MenuItem>
                );
            })}
        />
    </Wrapper>
);

export const WithHelperText = () => (
    <Wrapper>
        <Select
            placeHolder={{ name: "placeholder", value: "" }}
            defaultValue=""
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
            helperText="A descriptive message"
            options={options.map(({ key, value, testId, name }) => {
                return (
                    <MenuItem
                        key={key}
                        value={value}
                        data-testid={`option-${testId}`}
                    >
                        {name}
                    </MenuItem>
                );
            })}
        />
    </Wrapper>
);

export const Disabled = () => (
    <Wrapper>
        <Select
            placeHolder={{ name: "placeholder", value: "" }}
            defaultValue=""
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
            disabled
            options={options.map(({ key, value, testId, name }) => {
                return (
                    <MenuItem
                        key={key}
                        value={value}
                        data-testid={`option-${testId}`}
                    >
                        {name}
                    </MenuItem>
                );
            })}
        />
    </Wrapper>
);

export const ReadOnlyWithNoValue = () => (
    <Wrapper>
        <Select
            placeHolder={{ name: "placeholder", value: "" }}
            defaultValue=""
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
            readOnly
            options={options.map(({ key, value, testId, name }) => {
                return (
                    <MenuItem
                        key={key}
                        value={value}
                        data-testid={`option-${testId}`}
                    >
                        {name}
                    </MenuItem>
                );
            })}
        />
    </Wrapper>
);

export const ReadOnlyWithValue = () => (
    <Wrapper>
        <Select
            placeHolder={{ name: "placeholder", value: "" }}
            defaultValue=""
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
            readOnly
            options={options.map(({ key, value, testId, name }) => {
                return (
                    <MenuItem
                        key={key}
                        value={value}
                        data-testid={`option-${testId}`}
                    >
                        {name}
                    </MenuItem>
                );
            })}
            value="name1"
        />
    </Wrapper>
);

export const Required = () => (
    <Wrapper>
        <Select
            required
            placeHolder={{ name: "placeholder", value: "" }}
            defaultValue=""
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
            options={options.map(({ key, value, testId, name }) => {
                return (
                    <MenuItem
                        key={key}
                        value={value}
                        data-testid={`option-${testId}`}
                    >
                        {name}
                    </MenuItem>
                );
            })}
        />
    </Wrapper>
);

export const Error = () => (
    <Wrapper>
        <Select
            error
            placeHolder={{ name: "placeholder", value: "" }}
            defaultValue=""
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
            helperText="An error message An error message An error message"
            options={options.map(({ key, value, testId, name }) => {
                return (
                    <MenuItem
                        key={key}
                        value={value}
                        data-testid={`option-${testId}`}
                    >
                        {name}
                    </MenuItem>
                );
            })}
        />
    </Wrapper>
);

export const VariedHeights = () => (
    <div
        className="qpp-u-padding--16"
        style={{ width: 900, marginBottom: "16px" }}
    >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Select
                error
                placeHolder={{ name: "placeholder", value: "" }}
                defaultValue=""
                label="Text Label"
                id="measureName"
                inputProps={{ "data-testid": "measure-name-input" }}
                data-testid="measure-name-text-field"
                size="small"
                helperText="An error message"
                options={options.map(({ key, value, testId, name }) => {
                    return (
                        <MenuItem
                            key={key}
                            value={value}
                            data-testid={`option-${testId}`}
                        >
                            {name}
                        </MenuItem>
                    );
                })}
            />
            <Select
                // error
                placeHolder={{ name: "placeholder", value: "" }}
                defaultValue=""
                label="Text Label"
                id="measureName"
                inputProps={{ "data-testid": "measure-name-input" }}
                data-testid="measure-name-text-field"
                size="small"
                helperText=""
                options={options.map(({ key, value, testId, name }) => {
                    return (
                        <MenuItem
                            key={key}
                            value={value}
                            data-testid={`option-${testId}`}
                        >
                            {name}
                        </MenuItem>
                    );
                })}
            />
            <Select
                // error
                placeHolder={{ name: "placeholder", value: "" }}
                defaultValue=""
                label="Text Label"
                id="measureName"
                inputProps={{ "data-testid": "measure-name-input" }}
                data-testid="measure-name-text-field"
                size="small"
                helperText="An error message designed to take up a lot of space to see how we space multiple input elements within the same row in a responsive manner "
                options={options.map(({ key, value, testId, name }) => {
                    return (
                        <MenuItem
                            key={key}
                            value={value}
                            data-testid={`option-${testId}`}
                        >
                            {name}
                        </MenuItem>
                    );
                })}
            />
        </Box>
    </div>
);
