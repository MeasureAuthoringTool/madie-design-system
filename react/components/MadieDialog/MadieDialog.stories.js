import React, { useState } from "react";
import PropTypes from "prop-types";
import { withKnobs } from "@storybook/addon-knobs";
import MadieDialog from "./index";
import TextArea from "../TextArea/index";
import Select from "../Select/index";
import Button from "../Button";
import { Switch, FormGroup, FormControlLabel } from "@mui/material";

export default {
    title: "MadieDialog",
    component: MadieDialog,
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

export const Dialog = () => {
    const [open, setOpen] = useState(false);
    const onClose = () => {
        setOpen(false);
    };
    const onContinue = () => {
        setOpen(false);
    };

    const [form, setForm] = useState(false);
    const [required, setRequired] = useState(false);
    return (
        <div className="qpp-u-padding--16" style={{ width: 300 }}>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={form}
                            onChange={(e) => setForm(e.target.checked)}
                            name="Form"
                        />
                    }
                    label="Form"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={required}
                            onChange={(e) => setRequired(e.target.checked)}
                            name="Required"
                        />
                    }
                    label="Required"
                />
            </FormGroup>
            <Button variant="cyan" onClick={() => setOpen(true)}>
                open Dialog
            </Button>
            <MadieDialog
                form={form}
                required={required}
                title="Madie Dialog"
                dialogProps={{
                    open,
                    onClose,
                    onSubmit: onContinue,
                }}
                cancelButtonProps={{
                    cancelText: "Discard Changes",
                    "data-testid": "cancel-button",
                }}
                continueButtonProps={{
                    continueText: "Save",
                    "data-testid": "save-button",
                }}
            >
                <div>
                    <Select
                        id={`measure-referenceType`}
                        label="Type"
                        placeHolder={{ name: "Select", value: "" }}
                        inputProps={{
                            "data-testid": `measure-referenceType-input`,
                        }}
                        data-testid={`measure-referenceType`}
                        required
                        SelectDisplayProps={{
                            "aria-required": "true",
                        }}
                    />

                    <TextArea
                        required
                        label="Reference"
                        placeholder="Enter"
                        id="measure-referenceText"
                        data-testid="measure-referenceText"
                        inputProps={{
                            "data-testid": "measure-referenceText-input",
                            "aria-describedby":
                                "measure-referenceText-helper-text",
                        }}
                    />
                </div>
            </MadieDialog>
        </div>
    );
};
