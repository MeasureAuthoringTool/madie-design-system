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
import { FormHelperText, IconButton } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import TableChartIcon from "@mui/icons-material/TableChart";
import { Tooltip } from "@mui/material";
import { kebabCase } from "lodash";
import DOMPurify from "dompurify";

const MenuBar = ({ editor }) => {
    if (!editor) return null;

    return (
        <div
            className="control-group"
            role="toolbar"
            aria-label="Text formatting toolbar"
            data-testid="rich-text-editor-toolbar"
        >
            <div className="button-group">
                <Tooltip title="Undo" placement="top" enterDelay={1000} arrow>
                    <IconButton
                        onClick={() => editor.chain().focus().undo().run()}
                        aria-label="Undo"
                        type="button"
                    >
                        <UndoIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Redo" placement="top" enterDelay={1000} arrow>
                    <IconButton
                        onClick={() => editor.chain().focus().redo().run()}
                        aria-label="Redo"
                        type="button"
                        style={{ borderRight: "solid 1px #9c9c9c" }}
                    >
                        <RedoIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Bold" placement="top" enterDelay={1000} arrow>
                    <IconButton
                        onClick={() =>
                            editor.chain().focus().toggleBold().run()
                        }
                        aria-label="Bold"
                        aria-pressed={editor.isActive("bold")}
                        className={editor.isActive("bold") ? "is-active" : ""}
                        type="button"
                    >
                        <FormatBoldIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Italic" placement="top" enterDelay={1000} arrow>
                    <IconButton
                        onClick={() =>
                            editor.chain().focus().toggleItalic().run()
                        }
                        aria-label="Italic"
                        aria-pressed={editor.isActive("italic")}
                        className={editor.isActive("italic") ? "is-active" : ""}
                        type="button"
                    >
                        <FormatItalicIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip
                    title="Underline"
                    placement="top"
                    enterDelay={1000}
                    arrow
                >
                    <IconButton
                        onClick={() =>
                            editor.chain().focus().toggleUnderline().run()
                        }
                        aria-label="Underline"
                        aria-pressed={editor.isActive("underline")}
                        className={
                            editor.isActive("underline") ? "is-active" : ""
                        }
                        type="button"
                    >
                        <FormatUnderlinedIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip
                    title="Strikethrough"
                    placement="top"
                    enterDelay={1000}
                    arrow
                >
                    <IconButton
                        onClick={() =>
                            editor.chain().focus().toggleStrike().run()
                        }
                        aria-label="Strikethrough"
                        aria-pressed={editor.isActive("strike")}
                        className={editor.isActive("strike") ? "is-active" : ""}
                        type="button"
                        style={{ borderRight: "solid 1px #9c9c9c" }}
                    >
                        <StrikethroughSIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip
                    title="Ordered List"
                    placement="top"
                    enterDelay={1000}
                    arrow
                >
                    <IconButton
                        onClick={() =>
                            editor.chain().focus().toggleOrderedList().run()
                        }
                        aria-label="Ordered List"
                        aria-pressed={editor.isActive("orderedList")}
                        className={
                            editor.isActive("orderedList") ? "is-active" : ""
                        }
                        type="button"
                    >
                        <FormatListNumberedIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip
                    title="Bulleted List"
                    placement="top"
                    enterDelay={1000}
                    arrow
                >
                    <IconButton
                        onClick={() =>
                            editor.chain().focus().toggleBulletList().run()
                        }
                        aria-label="Bulleted List"
                        aria-pressed={editor.isActive("bulletList")}
                        className={
                            editor.isActive("bulletList") ? "is-active" : ""
                        }
                        type="button"
                        style={{ borderRight: "solid 1px #9c9c9c" }}
                    >
                        <FormatListBulletedIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip
                    title="Insert Table"
                    placement="top"
                    enterDelay={1000}
                    arrow
                >
                    <IconButton
                        onClick={() =>
                            editor.commands.insertTable({
                                rows: 3,
                                cols: 3,
                                withHeaderRow: true,
                            })
                        }
                        aria-label="Insert Table"
                        type="button"
                    >
                        <TableChartIcon />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    );
};

const RichTextEditor = ({
    name,
    id,
    error = false,
    helperText,
    required = false,
    label,
    onChange,
    onBlur,
    content,
    disabled,
}) => {
    const editor = useEditor({
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
    });

    React.useEffect(() => {
        if (editor && content !== editor.getHTML()) {
            editor.commands.setContent(content);
        }
    }, [content, editor]);

    React.useEffect(() => {
        if (!editor || !onBlur || !name) return;

        const handleBlur = () => {
            onBlur({ target: { name } });
        };

        editor.on("blur", handleBlur);

        return () => {
            editor.off("blur", handleBlur);
        };
    }, [editor, onBlur, name]);

    return (
        <div
            className="rich-text-editor"
            data-testid={`${kebabCase(label)}-rich-text-editor`}
        >
            <InputLabel
                id={`${id}-label`}
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

            {helperText && (
                <FormHelperText
                    tabIndex={0}
                    aria-live="polite"
                    id={`${id}-helper-text`}
                    data-testid={`${id}-helper-text`}
                    sx={[
                        {
                            margin: "4px 0px 0px 0px",
                            color: "#515151",
                            lineHeight: 1,
                        },
                        error && {
                            color: "#AE1C1C !important",
                        },
                    ]}
                >
                    {helperText}
                </FormHelperText>
            )}

            {disabled ? (
                <p
                    id={id}
                    className="rich-text-editor_read_only"
                    data-testid={`${id}-value`}
                    aria-labelledby={`${id}-label`}
                    dangerouslySetInnerHTML={{
                        __html: content ? DOMPurify.sanitize(content) : "-",
                    }}
                />
            ) : (
                <>
                    <MenuBar editor={editor} />
                    <EditorContent
                        id={id}
                        tabIndex={0}
                        data-testid="rich-text-editor-content"
                        editor={editor}
                        aria-labelledby={`${id}-label`}
                        aria-describedby={
                            helperText ? `${id}-helper-text` : undefined
                        }
                        aria-multiline="true"
                        aria-required={required || undefined}
                        aria-invalid={error || undefined}
                        role="textbox"
                        className={`ProseMirror ${error ? "has-error" : ""}`}
                    />
                </>
            )}
        </div>
    );
};

RichTextEditor.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    error: PropTypes.bool,
    required: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    content: PropTypes.any,
    disabled: PropTypes.bool,
};

MenuBar.propTypes = {
    editor: PropTypes.any,
};

export default RichTextEditor;
