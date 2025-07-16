import React from "react";

import PropTypes from "prop-types";
import { EditorContent, useEditor } from "@tiptap/react";
import InputLabel from "../InputLabel";

import Gapcursor from "@tiptap/extension-gapcursor";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";
import { IconButton } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import TableChartIcon from "@mui/icons-material/TableChart";
import { Tooltip } from "@mui/material";
import { kebabCase } from "lodash";
import DOMPurify from "dompurify";

const MenuBar = ({ editor, disabled }) => {
    if (!editor) {
        return null;
    }
    return (
        <div className="control-group" data-testid="rich-text-editor-toolbar">
            <div className="button-group">
                <Tooltip
                    data-testid="bold-tooltip"
                    title="Bold"
                    placement="top"
                    enterDelay={1000}
                    arrow
                >
                    <IconButton
                        key={"bold"}
                        onClick={() =>
                            editor.chain().focus().toggleBold().run()
                        }
                        className={editor.isActive("bold") ? "is-active" : ""}
                        disabled={disabled}
                    >
                        <FormatBoldIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip
                    data-testid="italic-tooltip"
                    title="Italic"
                    placement="top"
                    enterDelay={1000}
                    arrow
                >
                    <IconButton
                        key={"italic"}
                        onClick={() =>
                            editor.chain().focus().toggleItalic().run()
                        }
                        className={editor.isActive("italic") ? "is-active" : ""}
                        disabled={disabled}
                    >
                        <FormatItalicIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip
                    data-testid="underline-tooltip"
                    title="Underline"
                    placement="top"
                    enterDelay={1000}
                    arrow
                >
                    <IconButton
                        key={"underline"}
                        onClick={() =>
                            editor.chain().focus().toggleUnderline().run()
                        }
                        className={
                            editor.isActive("underline") ? "is-active" : ""
                        }
                        disabled={disabled}
                    >
                        <FormatUnderlinedIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip
                    data-testid="strikethrough-tooltip"
                    title="Strikethrough"
                    placement="top"
                    enterDelay={1000}
                    arrow
                >
                    <IconButton
                        key={"strike"}
                        onClick={() =>
                            editor.chain().focus().toggleStrike().run()
                        }
                        className={editor.isActive("strike") ? "is-active" : ""}
                        style={{ borderRight: "solid 1px #9c9c9c" }}
                        disabled={disabled}
                    >
                        <StrikethroughSIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip
                    data-testid="orderedlist-tooltip"
                    title="Ordered List"
                    placement="top"
                    enterDelay={1000}
                    arrow
                >
                    <IconButton
                        key={"orderedList"}
                        onClick={() =>
                            editor.chain().focus().toggleOrderedList().run()
                        }
                        className={
                            editor.isActive("orderedList") ? "is-active" : ""
                        }
                        disabled={disabled}
                    >
                        <FormatListNumberedIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip
                    data-testid="bulletedlist-tooltip"
                    title="Bulleted List"
                    placement="top"
                    enterDelay={1000}
                    arrow
                >
                    <IconButton
                        key={"bulletList"}
                        onClick={() =>
                            editor.chain().focus().toggleBulletList().run()
                        }
                        className={
                            editor.isActive("bulletList") ? "is-active" : ""
                        }
                        style={{ borderRight: "solid 1px #9c9c9c" }}
                        disabled={disabled}
                    >
                        <FormatListBulletedIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip
                    data-testid="table-tooltip"
                    title="Table"
                    placement="top"
                    enterDelay={1000}
                    arrow
                >
                    <IconButton
                        key={"insertTable"}
                        onClick={() =>
                            editor.commands.insertTable({
                                rows: 3,
                                cols: 3,
                                withHeaderRow: true,
                            })
                        }
                        className={
                            editor.isActive("insertTable") ? "is-active" : ""
                        }
                        disabled={disabled}
                    >
                        <TableChartIcon />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    );
};

const RichTextEditor = ({
    id,
    error = false,
    required = false,
    label,
    onChange,
    content,
    disabled = false,
    readOnly = false,
}) => {
    const editor = useEditor(
        {
            extensions: [
                StarterKit,
                Gapcursor,
                Table.configure({
                    resizable: true,
                }),
                TableRow,
                TableHeader,
                TableCell,
                Underline,
            ],
            shouldRerenderOnTransaction: false,
            content,
            onUpdate: ({ editor }) => {
                const newValue = editor.getHTML();
                onChange(newValue);
            },
            editable: !disabled,
        },
        [content, disabled]
    );
    return (
        <div
            className="rich-text-editor"
            data-testid={`${kebabCase(label)}-rich-text-editor`}
        >
            <InputLabel
                shrink
                required={required}
                error={error}
                htmlFor={id}
                style={{ marginBottom: 0, height: 16 }} // force a height
                sx={[
                    {
                        backgroundColor: "transparent",
                        borderColor: "#8C8C8C",
                        display: "inline-flex",
                        flexDirection: "row-reverse",
                        alignSelf: "baseline",
                        textTransform: "none",
                        // force it outside the select box
                        position: "initial",
                        transform: "translateX(0px) translateY(0px)",
                        fontFamily: "Rubik",
                        fontWeight: 500,
                        fontSize: 14,
                        color: "#333",
                        "& .MuiInputLabel-asterisk": {
                            color: "#AE1C1C !important",
                            marginRight: "3px !important", //this was
                        },
                    },
                    required && {
                        transform: "translateX(-12px) translateY(0px)",
                        "& .MuiInputLabel-asterisk": {
                            color: "#D92F2",
                            marginRight: "3px !important", //this was
                        },
                    },
                    error && {
                        color: "#AE1C1C !important",
                    },
                ]}
            >
                {label}
            </InputLabel>
            {readOnly ? (
                <p
                    data-testid={`${id}-value`}
                    aria-labelledby={label}
                    dangerouslySetInnerHTML={{
                        __html: content ? DOMPurify.sanitize(content) : "-",
                    }}
                />
            ) : (
                <>
                    <MenuBar editor={editor} disabled={disabled} />
                    <EditorContent editor={editor} />
                </>
            )}
        </div>
    );
};

RichTextEditor.propTypes = {
    id: PropTypes.string,
    error: PropTypes.bool,
    required: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func,
    content: PropTypes.any,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
};

MenuBar.propTypes = {
    editor: PropTypes.any,
    readOnly: PropTypes.bool,
};

export default RichTextEditor;
