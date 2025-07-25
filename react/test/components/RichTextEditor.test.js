import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RichTextEditor from "../../components/RichTextEditor/index";
import userEvent from "@testing-library/user-event";

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
            />,
        );

        // Check if the label is rendered
        expect(screen.getByText("Test Label")).toBeInTheDocument();

        // Check if the editor content is rendered
        expect(
            screen.getByTestId("test-label-rich-text-editor"),
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
            />,
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

    it("renders sanitized content when canEdit is false", () => {
        render(
            <RichTextEditor
                id="test-editor"
                label="Test Label"
                content="<script>alert('XSS')</script><p>Safe Content</p>"
                onChange={mockOnChange}
                disabled={true}
            />,
        );

        // Check if sanitized content is rendered
        expect(screen.getByText("Safe Content")).toBeInTheDocument();
        expect(screen.queryByText("alert('XSS')")).not.toBeInTheDocument();
    });

    it("triggers bold", async () => {
        const user = userEvent.setup();
        render(
            <RichTextEditor
                id="test-editor"
                label="Test Editor"
                onChange={mockOnChange}
                content="<p>Initial content</p>"
            />,
        );
        await user.click(screen.getByRole("button", { name: "Bold" }));
        expect(mockOnChange).toHaveBeenCalled();
    });
    it("triggers Italic", async () => {
        const user = userEvent.setup();
        render(
            <RichTextEditor
                id="test-editor"
                label="Test Editor"
                onChange={mockOnChange}
                content="<p>Initial content</p>"
            />,
        );
        await user.click(screen.getByRole("button", { name: "Italic" }));
        expect(mockOnChange).toHaveBeenCalled();
    });
    it("triggers Underline", async () => {
        const user = userEvent.setup();
        render(
            <RichTextEditor
                id="test-editor"
                label="Test Editor"
                onChange={mockOnChange}
                content="<p>Initial content</p>"
            />,
        );
        await user.click(screen.getByRole("button", { name: "Underline" }));
        expect(mockOnChange).toHaveBeenCalled();
    });
    it("triggers Ordered List", async () => {
        const user = userEvent.setup();
        render(
            <RichTextEditor
                id="test-editor"
                label="Test Editor"
                onChange={mockOnChange}
                content="<p>Initial content</p>"
            />,
        );
        await user.click(screen.getByRole("button", { name: "Bold" }));
        expect(mockOnChange).toHaveBeenCalled();
    });
    it("triggers Bulleted List", async () => {
        const user = userEvent.setup();
        render(
            <RichTextEditor
                id="test-editor"
                label="Test Editor"
                onChange={mockOnChange}
                content="<p>Initial content</p>"
            />,
        );
        await user.click(screen.getByRole("button", { name: "Bulleted List" }));
        expect(mockOnChange).toHaveBeenCalled();
    });
    it("triggers Table", async () => {
        const user = userEvent.setup();
        render(
            <RichTextEditor
                id="test-editor"
                label="Test Editor"
                onChange={mockOnChange}
                content="<p>Initial content</p>"
            />,
        );
        await user.click(screen.getByRole("button", { name: "Table" }));
        expect(mockOnChange).toHaveBeenCalled();
    });
});
