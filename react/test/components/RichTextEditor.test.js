import React from "react";
import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import RichTextEditor from "../../components/RichTextEditor/index";

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
        expect(screen.getByTestId("test-label-rich-text-editor")).toBeInTheDocument();
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
        const editorContent = screen.getByText("Initial Content");
        fireEvent.input(editorContent, {target: {innerHTML: "Updated Content"}});

        screen.logTestingPlaygroundURL();

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
            />
        );

        // Check if sanitized content is rendered
        expect(screen.getByText("Safe Content")).toBeInTheDocument();
        expect(screen.queryByText("alert('XSS')")).not.toBeInTheDocument();
    });

    it("test renders sanitized content when canEdit is false", () => {
        const content = `this is a statement
     this is a statement    
           this is a statement

        this is a statement`;

        render(
            <RichTextEditor
                id="test-editor"
                label="Test Label"
                content={content}
                onChange={mockOnChange}
                disabled={true}
            />
        );

        const readOnlyContent = screen.getByTestId("test-editor-value");
        expect(readOnlyContent.textContent).toBe(content);

        //expect(readOnlyContent).toHaveTextContent("this is a statement this is a statement this is a statement this is a statement");
    });
});
