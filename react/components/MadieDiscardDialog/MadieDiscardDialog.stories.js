import React, { useState } from "react";
import PropTypes from "prop-types";
import MadieDiscardDialog from "./index";
import Button from "../Button";

export default {
    title: "MadieDiscardDialog",
    component: MadieDiscardDialog,
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

export const DiscardDialog = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("I'm some text that you may discard");

    const onClose = () => setOpen(false);
    const onContinue = () => {
        setText("");
        setOpen(false);
    };

    return (
        <Wrapper>
            <p>{text}</p>
            <Button variant="cyan" onClick={() => setOpen(true)}>
                open Dialog
            </Button>
            <MadieDiscardDialog
                open={open}
                onContinue={onContinue}
                onClose={onClose}
            />
        </Wrapper>
    );
};
