import React from "react";
import PropTypes from "prop-types";
import { withKnobs } from "@storybook/addon-knobs";
import MUISelect from "./index";
import { MenuItem, FormHelperText } from "@mui/material";

export default {
    title: "Select",
    component: Select,
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

const options = [
    { key: "key1", value: "value1", testId: "testid1", name: "name1" },
    { key: "key2", value: "value2", testId: "testid2", name: "name2" },
    { key: "key3", value: "value2", testId: "testid3", name: "name3" },
];
export const Select = () => (
    <Wrapper>
        <MUISelect
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
        <MUISelect
            placeHolder={{ name: "placeholder", value: "" }}
            defaultValue=""
            label="Text Label"
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            size="small"
            helperText={
                <FormHelperText data-testid={`helper-text`} error={false}>
                    {" "}
                    A descriptive message
                </FormHelperText>
            }
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
        <MUISelect
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

export const Required = () => (
    <Wrapper>
        <MUISelect
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
        <MUISelect
            error
            placeHolder={{ name: "placeholder", value: "" }}
            defaultValue=""
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
