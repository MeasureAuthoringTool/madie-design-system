import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RichTextEditor from "../../components/RichTextEditor/index";
import DOMPurify from "dompurify";

describe("RichTextEditor Component", () => {
    const mockOnChange = jest.fn();

    it("renders the RichTextEditor with label and content", () => {
        render(
            <RichTextEditor
                id="test-editor"
                label="Test Label"
                content="<p>Initial Content</p>"
                onChange={mockOnChange}
                disabled={false}
            />
        );

        // Check if the label is rendered
        expect(screen.getByText("Test Label")).toBeInTheDocument();

        // Check if the editor content is rendered
        expect(
            screen.getByTestId("test-label-rich-text-editor")
        ).toBeInTheDocument();
    });

    it("calls onChange when content is updated", async () => {
        render(
            <RichTextEditor
                id="test-editor"
                label="Description"
                content="Initial Content"
                onChange={mockOnChange}
                disabled={false}
            />
        );

        // Simulate content change
        const editorContent = screen.getByRole("textbox");
        fireEvent.input(editorContent, {
            target: { innerHTML: "Updated Content" },
        });

        // Check if onChange is called
        await waitFor(() => {
            expect(mockOnChange).toHaveBeenCalledWith("<p>Updated Content</p>");
        });
    });

    it("renders sanitized content within editor when disabled is true", () => {
        render(
            <RichTextEditor
                id="test-editor"
                label="Test Label"
                content="<script>alert('XSS')</script><p>Safe Content</p>"
                onChange={mockOnChange}
                disabled
            />
        );

        // Check if sanitized content is rendered
        expect(screen.getByText("Safe Content")).toBeInTheDocument();
        expect(screen.queryByText("alert('XSS')")).not.toBeInTheDocument();

        const editorContent = screen.getByRole("textbox");
        expect(editorContent).toBeInTheDocument();
        expect(editorContent).toHaveAttribute("contenteditable", "false");
        expect(editorContent).toHaveTextContent("Safe Content");
    });

    it("renders read only, sanitized content when readOnly is true", () => {
        render(
            <RichTextEditor
                id="test-editor"
                label="Test Label"
                content="<script>alert('XSS')</script><p>Safe Content</p>"
                onChange={mockOnChange}
                readOnly
            />
        );

        // Check if sanitized content is rendered
        expect(screen.getByText("Safe Content")).toBeInTheDocument();
        expect(screen.queryByText("alert('XSS')")).not.toBeInTheDocument();

        const editorContent = screen.getByTestId("test-editor-value");
        expect(editorContent).toBeInTheDocument();
        expect(editorContent).toHaveTextContent("Safe Content");
    });

    it("test renders sanitized content with preserved whitespace when readOnly is true", () => {
        const content = `this is a statement
                            this is a statement    
                                this is a statement

                            --------------------- 
                            this is a statement`;

        render(
            <RichTextEditor
                id="test-editor"
                label="Test Label"
                content={content}
                onChange={mockOnChange}
                readOnly
            />
        );

        const readOnlyContent = screen.getByTestId("test-editor-value");

        // Ensure the innerHTML matches the sanitized version of the content
        expect(readOnlyContent.innerHTML).toBe(DOMPurify.sanitize(content));
    });
});
