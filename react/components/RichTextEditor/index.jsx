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
import { IconButton, SvgIcon } from "@mui/material";
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

const TableIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M4 20V4h16v16zm7.5-5.596H5V19h6.5zm1 0V19H19v-4.596zm-1-1V8.769H5v4.635zm1 0H19V8.769h-6.5zM5 7.769h14V5H5z" />
  </SvgIcon>
);

const iconStyle = {
  fontSize: "18px",
  display: "block",
};

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="control-group" data-testid="rich-text-editor-toolbar">
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
            onClick={() => editor.chain().focus().undo().run()}
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
            onClick={() => editor.chain().focus().redo().run()}
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
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
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
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
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
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive("underline") ? "is-active" : ""}
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
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
            style={{ borderRight: "solid 1px #9c9c9c" }}
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
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "is-active" : ""}
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
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}
            style={{ borderRight: "solid 1px #9c9c9c" }}
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
            className={editor.isActive("insertTable") ? "is-active" : ""}
          >
            <TableIcon />
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
  id,
  error = false,
  required = false,
  label,
  onChange,
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
      {disabled ? (
        <p
          data-testid={`${id}-value`}
          aria-labelledby={label}
          dangerouslySetInnerHTML={{
            __html: content ? DOMPurify.sanitize(content) : "-",
          }}
        />
      ) : (
        <>
          <MenuBar editor={editor} />
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
};

MenuBar.propTypes = {
  editor: PropTypes.any,
};

export default RichTextEditor;
