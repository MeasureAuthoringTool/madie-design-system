import React from "react";

import PropTypes from "prop-types";
import { EditorContent, EditorProvider, useEditor } from "@tiptap/react";
import { generateHTML } from "@tiptap/react";

import Gapcursor from "@tiptap/extension-gapcursor";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import StarterKit from "@tiptap/starter-kit";
import { IconButton } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import TableChartIcon from "@mui/icons-material/TableChart";

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null;
    }
    return (
        <div className="control-group">
            <div className="button-group">
                <IconButton
                    key={"bold"}
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive("bold") ? "is-active" : ""}
                >
                    <FormatBoldIcon />
                </IconButton>
                <IconButton
                    key={"italic"}
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive("italic") ? "is-active" : ""}
                >
                    <FormatItalicIcon />
                </IconButton>
                <IconButton
                    key={"strike"}
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive("strike") ? "is-active" : ""}
                    style={{ borderRight: "solid 1px #9c9c9c" }}
                >
                    <StrikethroughSIcon />
                </IconButton>
                <IconButton
                    key={"bulletList"}
                    onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                    }
                    className={editor.isActive("bulletList") ? "is-active" : ""}
                >
                    <FormatListBulletedIcon />
                </IconButton>
                <IconButton
                    key={"orderedList"}
                    onClick={() =>
                        editor.chain().focus().toggleOrderedList().run()
                    }
                    className={
                        editor.isActive("orderedList") ? "is-active" : ""
                    }
                    style={{ borderRight: "solid 1px #9c9c9c" }}
                >
                    <FormatListNumberedIcon />
                </IconButton>
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
                >
                    <TableChartIcon />
                </IconButton>
            </div>
        </div>
    );
};

const RichTextEditor = ({ onChange, content }) => {
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
            ],
            shouldRerenderOnTransaction: false,
            content,
            onUpdate: ({ editor }) => {
                const newValue = editor.getHTML();
                onChange(newValue);
            },
        },
        [content]
    );
    return (
        <>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </>
    );
};

RichTextEditor.propTypes = {
    onChange: PropTypes.func,
    content: PropTypes.any,
};

MenuBar.propTypes = {
    editor: PropTypes.any,
};

export default RichTextEditor;
