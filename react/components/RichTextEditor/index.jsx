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
import { IconButton, FormHelperText } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import { Tooltip } from "@mui/material";
import { kebabCase } from "lodash";
import DOMPurify from "dompurify";
import {
  DeleteTableIcon,
  AddRowBelowIcon,
  AddRowAboveIcon,
  DeleteRowIcon,
  AddColumnLeftIcon,
  AddColumnRightIcon,
  DeleteColumnIcon,
} from "./tableIcons/tabelIconsIndex.js";

const iconStyle = {
  fontSize: "18px",
  display: "block",
};

const MenuBar = ({ editor, disabled }) => {
    if (!editor) {
        return null;
    }
    return (
        <div
            className="control-group"
            role="toolbar"
            aria-label="Text formatting toolbar"
            data-testid="rich-text-editor-toolbar"
        >
            <div className="button-group">
                <Tooltip
                    data-testid="undo-tooltip"
                    title="Undo"
                    placement="top"
                    enterDelay={1000}
                    arrow
                >
                    <IconButton
                        key={"undo"}
                        onClick={() =>
                            editor.chain().focus().undo().run()
                        }
                    >
                        <UndoIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip
                    data-testid="redo-tooltip"
                    title="Redo"
                    placement="top"
                    enterDelay={1000}
                    arrow
                >
                    <IconButton
                        key={"redo"}
                        onClick={() =>
                            editor.chain().focus().redo().run()
                        }
                        style={{ borderRight: "solid 1px #9c9c9c" }}
                    >
                        <RedoIcon />
                    </IconButton>
                </Tooltip>
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
                        aria-label="Bold"
                        aria-pressed={editor.isActive("bold")}
                        className={editor.isActive("bold") ? "is-active" : ""}
                        disabled={disabled}
                        type="button"
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
                        aria-label="Italic"
                        aria-pressed={editor.isActive("italic")}
                        className={editor.isActive("italic") ? "is-active" : ""}
                        disabled={disabled}
                        type="button"
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
                        aria-label="Underline"
                        aria-pressed={editor.isActive("underline")}
                        className={
                            editor.isActive("underline") ? "is-active" : ""
                        }
                        disabled={disabled}
                        type="button"
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
                        aria-label="Strikethrough"
                        aria-pressed={editor.isActive("strike")}
                        className={editor.isActive("strike") ? "is-active" : ""}
                        style={{ borderRight: "solid 1px #9c9c9c" }}
                        disabled={disabled}
                        type="button"
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
                        aria-label="Ordered List"
                        aria-pressed={editor.isActive("orderedList")}
                        className={
                            editor.isActive("orderedList") ? "is-active" : ""
                        }
                        disabled={disabled}
                        type="button"
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
                        aria-label="Bulleted List"
                        aria-pressed={editor.isActive("bulletList")}
                        className={
                            editor.isActive("bulletList") ? "is-active" : ""
                        }
                        style={{ borderRight: "solid 1px #9c9c9c" }}
                        disabled={disabled}
                        type="button"
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
                        aria-label="Insert Table"
                        className={
                            editor.isActive("insertTable") ? "is-active" : ""
                        }
                        disabled={disabled}
                        type="button"
                    >
                        
                        <TableChartIcon />
                    </IconButton>
                </Tooltip>
                     {editor.isActive("table") && (
          <>
            <Tooltip
              data-testid="add-row-above-tooltip"
              title="Add row above"
              placement="top"
              enterDelay={1000}
              arrow
            >
              <IconButton
                key="addRowAbove"
                onClick={() => editor.chain().focus().addRowBefore().run()}
              >
                <AddRowAboveIcon style={iconStyle} />
              </IconButton>
            </Tooltip>
            <Tooltip
              data-testid="add-row-below-tooltip"
              title="Add row below"
              placement="top"
              enterDelay={1000}
              arrow
            >
              <IconButton
                key="addRowBelow"
                onClick={() => editor.chain().focus().addRowAfter().run()}
              >
                <AddRowBelowIcon style={iconStyle} />
              </IconButton>
            </Tooltip>

            <Tooltip
              data-testid="remove-row-tooltip"
              title="Remove row"
              placement="top"
              enterDelay={1000}
              arrow
            >
              <IconButton
                key="deleteRow"
                onClick={() => editor.chain().focus().deleteRow().run()}
              >
                <DeleteRowIcon style={iconStyle} />
              </IconButton>
            </Tooltip>
            <Tooltip
              data-testid="add-column-right-tooltip"
              title="Add column right"
              placement="top"
              enterDelay={1000}
              arrow
            >
              <IconButton
                key="addColumnRight"
                onClick={() => editor.chain().focus().addColumnAfter().run()}
              >
                <AddColumnRightIcon style={iconStyle} />
              </IconButton>
            </Tooltip>
            <Tooltip
              data-testid="add-column-left-tooltip"
              title="Add column left"
              placement="top"
              enterDelay={1000}
              arrow
            >
              <IconButton
                key="addColumnLeft"
                onClick={() => editor.chain().focus().addColumnBefore().run()}
              >
                <AddColumnLeftIcon style={iconStyle} />
              </IconButton>
            </Tooltip>

            <Tooltip
              data-testid="remove-column-tooltip"
              title="Remove column"
              placement="top"
              enterDelay={1000}
              arrow
            >
              <IconButton
                key="deleteColumn"
                onClick={() => editor.chain().focus().deleteColumn().run()}
              >
                <DeleteColumnIcon style={iconStyle} />
              </IconButton>
            </Tooltip>

            <Tooltip
              data-testid="remove-table-tooltip"
              title="Remove table"
              placement="top"
              enterDelay={1000}
              arrow
            >
              <IconButton
                key="deleteTable"
                onClick={() => editor.chain().focus().deleteTable().run()}
                style={{ borderRight: "solid 1px #9c9c9c" }}
              >
                <DeleteTableIcon style={iconStyle} />
              </IconButton>
            </Tooltip>
          </>
        )}
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
  disabled = false,
    readOnly = false,
}) => {
  const editor = useEditor({
    parseOptions: {
          preserveWhitespace: 'full',
  },
    extensions: [
      StarterKit,
      Gapcursor,
      Table.configure({
        resizable: true,
                    HTMLAttributes: {
                        class: "rich-text-table",
                    },
      }),
      TableRow,
      TableHeader,
      TableCell,
      Underline,
                Strike.extend({
                    strike: false, // disable default strike through
                    renderHTML({ HTMLAttributes }) {
                        return ["del", HTMLAttributes, 0];
                    },
                }),
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
      editor.commands.setContent(content, false, {preserveWhitespace: "full"});
    }
  }, [content, editor]);

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
            

            {readOnly ? (
                <p
                    className="rich-text-editor_read_only"
                    data-testid={`${id}-value`}
                    aria-labelledby={`${id}-label`}
                    dangerouslySetInnerHTML={{
                        __html: content ? DOMPurify.sanitize(content) : "-",
                    }}
                />
            ) : (
                <>
                    <MenuBar editor={editor} disabled={disabled} />
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
                        className={`ProseMirror ${error ? "has-error" : ""}`}
                    />
                </>
            )}
        </div>
    );
};

RichTextEditor.propTypes = {
  id: PropTypes.string,
    name: PropTypes.string,
  error: PropTypes.bool,
    helperText: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
    onBlur: PropTypes.func,
  content: PropTypes.any,
  disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
};

MenuBar.propTypes = {
  editor: PropTypes.any,
    disabled: PropTypes.bool,
};

export default RichTextEditor;
