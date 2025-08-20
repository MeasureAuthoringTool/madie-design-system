import React, { useState } from "react";
import MadieDeleteDialog from "./index";
import Button from "../Button";

export default {
    title: "MadieDeleteDialog",
    component: MadieDeleteDialog,
};

const Wrapper = ({ children }) => (
    <div className="qpp-u-padding--16" style={{ width: 300 }}>
        {children}
    </div>
);
const contentWithHtmlTag =
    '<p><strong>test &amp;</strong></p><table class="rich-text-table" style="min-width: 75px"><colgroup><col style="min-width: 25px"><col style="min-width: 25px"><col style="min-width: 25px"></colgroup><tbody><tr><th colspan="1" rowspan="1"><p></p></th><th colspan="1" rowspan="1"><p></p></th><th colspan="1" rowspan="1"><p></p></th></tr><tr><td colspan="1" rowspan="1"><p>table col 1</p></td><td colspan="1" rowspan="1"><p>table col 2</p></td><td colspan="1" rowspan="1"><p>table col 3</p></td></tr><tr><td colspan="1" rowspan="1"><p>table col 4</p></td><td colspan="1" rowspan="1"><p>table col 5</p></td><td colspan="1" rowspan="1"><p>table col 6</p></td></tr></tbody></table><ol><li><p><strong>test2</strong></p></li><li><p><strong>test3</strong></p></li></ol>';

export const DeleteDialog = () => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);
    const onContinue = () => setOpen(false);

    return (
        <Wrapper>
            <Button variant="cyan" onClick={() => setOpen(true)}>
                open Dialog
            </Button>
            <MadieDeleteDialog
                open={open}
                onContinue={onContinue}
                onClose={onClose}
            />
        </Wrapper>
    );
};

export const DeleteDialogNoWarning = () => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);
    const onContinue = () => setOpen(false);

    return (
        <Wrapper>
            <Button variant="cyan" onClick={() => setOpen(true)}>
                open Dialog
            </Button>
            <MadieDeleteDialog
                open={open}
                onContinue={onContinue}
                onClose={onClose}
                hideWarning={true}
            />
        </Wrapper>
    );
};

export const DeleteDialogWithHtmlTags = () => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);
    const onContinue = () => setOpen(false);

    return (
        <Wrapper>
            <Button variant="cyan" onClick={() => setOpen(true)}>
                open Dialog
            </Button>
            <MadieDeleteDialog
                open={open}
                onContinue={onContinue}
                onClose={onClose}
                hideWarning={true}
                dialogTitle="Delete Measure Reference"
                name={contentWithHtmlTag}
            />
        </Wrapper>
    );
};
