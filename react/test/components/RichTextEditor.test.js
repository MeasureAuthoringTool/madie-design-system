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

    it("displays helper text when error is true", () => {
        render(
            <RichTextEditor
                id="test-editor"
                label="Test Label"
                content={null}
                helperText="This field is required."
                required={true}
                error={true}
                onChange={mockOnChange}
            />
        );

        const helperTextElement = screen.getByTestId("test-editor-helper-text");
        expect(helperTextElement).toHaveTextContent("This field is required.");
    });
    it("triggers Undo", async () => {
        const user = userEvent.setup();
        render(
            <RichTextEditor
                id="test-editor"
                label="Test Editor"
                onChange={mockOnChange}
                content="<p>Initial content</p>"
            />,
        );
        await user.click(screen.getByRole("button", { name: "Undo" }));
        expect(mockOnChange).toHaveBeenCalled();
    });

    it("triggers Redo", async () => {
        const user = userEvent.setup();
        render(
            <RichTextEditor
                id="test-editor"
                label="Test Editor"
                onChange={mockOnChange}
                content="<p>Initial content</p>"
            />,
        );
        await user.click(screen.getByRole("button", { name: "Redo" }));
        expect(mockOnChange).toHaveBeenCalled();
    });

    describe("Table-related buttons", () => {
        beforeEach(() => {
            mockOnChange.mockClear();
            jest.spyOn(console, 'error').mockImplementation(() => {});
        });
        
        afterEach(() => {
            console.error.mockRestore();
        });

        it("shows table manipulation buttons when table content is present", async () => {
            render(
                <RichTextEditor
                    id="test-editor"
                    label="Test Editor"
                    onChange={mockOnChange}
                    content="<table><tr><td>Cell content</td></tr></table>"
                />,
            );
            
            expect(screen.getByLabelText("Add row above")).toBeInTheDocument();
            expect(screen.getByLabelText("Add row below")).toBeInTheDocument();
            expect(screen.getByLabelText("Remove row")).toBeInTheDocument();
            expect(screen.getByLabelText("Add column right")).toBeInTheDocument();
            expect(screen.getByLabelText("Add column left")).toBeInTheDocument();
            expect(screen.getByLabelText("Remove column")).toBeInTheDocument();
            expect(screen.getByLabelText("Remove table")).toBeInTheDocument();
        });
        
        it("triggers Add row above button", async () => {
            const user = userEvent.setup();
            render(
                <RichTextEditor
                    id="test-editor"
                    label="Test Editor"
                    onChange={mockOnChange}
                    content="<table><tr><td>Cell content</td></tr></table>"
                />,
            );
            
            await user.click(screen.getByLabelText("Add row above"));
            await waitFor(() => {
                expect(mockOnChange).toHaveBeenCalled();
            });
        });
        
        it("triggers Add row below button", async () => {
            const user = userEvent.setup();
            render(
                <RichTextEditor
                    id="test-editor"
                    label="Test Editor"
                    onChange={mockOnChange}
                    content="<table><tr><td>Cell content</td></tr></table>"
                />,
            );
            
            await user.click(screen.getByLabelText("Add row below"));
            await waitFor(() => {
                expect(mockOnChange).toHaveBeenCalled();
            });
        });
        
        it("triggers Remove row button", async () => {
            const user = userEvent.setup();
            render(
                <RichTextEditor
                    id="test-editor"
                    label="Test Editor"
                    onChange={mockOnChange}
                    content="<table><tr><td>Cell content</td></tr><tr><td>Another row</td></tr></table>"
                />,
            );
            
            await user.click(screen.getByLabelText("Remove row"));
            await waitFor(() => {
                expect(mockOnChange).toHaveBeenCalled();
            });
        });
        
        it("triggers Add column right button", async () => {
            const user = userEvent.setup();
            render(
                <RichTextEditor
                    id="test-editor"
                    label="Test Editor"
                    onChange={mockOnChange}
                    content="<table><tr><td>Cell content</td></tr></table>"
                />,
            );
            
            await user.click(screen.getByLabelText("Add column right"));
            await waitFor(() => {
                expect(mockOnChange).toHaveBeenCalled();
            });
        });
        
        it("triggers Add column left button", async () => {
            const user = userEvent.setup();
            render(
                <RichTextEditor
                    id="test-editor"
                    label="Test Editor"
                    onChange={mockOnChange}
                    content="<table><tr><td>Cell content</td></tr></table>"
                />,
            );
            
            await user.click(screen.getByLabelText("Add column left"));
            await waitFor(() => {
                expect(mockOnChange).toHaveBeenCalled();
            });
        });
        
        it("triggers Remove column button", async () => {
            const user = userEvent.setup();
            render(
                <RichTextEditor
                    id="test-editor"
                    label="Test Editor"
                    onChange={mockOnChange}
                    content="<table><tr><td>Col 1</td><td>Col 2</td></tr></table>"
                />,
            );
            
            await user.click(screen.getByLabelText("Remove column"));
            await waitFor(() => {
                expect(mockOnChange).toHaveBeenCalled();
            });
        });
        
        it("triggers Remove table button", async () => {
            const user = userEvent.setup();
            render(
                <RichTextEditor
                    id="test-editor"
                    label="Test Editor"
                    onChange={mockOnChange}
                    content="<table><tr><td>Cell content</td></tr></table>"
                />,
            );
            
            await user.click(screen.getByLabelText("Remove table"));
            await waitFor(() => {
                expect(mockOnChange).toHaveBeenCalled();
            });
        });
    });
});
