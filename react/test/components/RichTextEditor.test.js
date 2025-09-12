import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RichTextEditor, { MenuBar } from "../../components/RichTextEditor/index";
import DOMPurify from "dompurify";

beforeAll(() => {
    Element.prototype.getClientRects = jest.fn(() => [
        {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: 0,
            height: 0,
        },
    ]);

    Element.prototype.scrollIntoView = jest.fn();

    window.getSelection = jest.fn(() => ({
        removeAllRanges: jest.fn(),
        addRange: jest.fn(),
    }));

    Element.prototype.getBoundingClientRect = jest.fn(() => ({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
    }));
});

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
            screen.getByTestId("test-editor-rich-text-editor")
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
        const editorLabel = screen.getByText("Test Label");
        expect(editorLabel).toBeInTheDocument();
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
        render(
            <RichTextEditor
                id="test-editor"
                label="Test Editor"
                onChange={mockOnChange}
                content="<p>Initial content</p>"
            />
        );
        await userEvent.click(screen.getByRole("button", { name: "Undo" }));
        expect(mockOnChange).toHaveBeenCalled();
    });

    it("triggers Redo", async () => {
        render(
            <RichTextEditor
                id="test-editor"
                label="Test Editor"
                onChange={mockOnChange}
                content="<p>Initial content</p>"
            />
        );
        await userEvent.click(screen.getByRole("button", { name: "Redo" }));
        expect(mockOnChange).toHaveBeenCalled();
    });

    describe("Table-related buttons", () => {
        beforeEach(() => {
            mockOnChange.mockClear();
            jest.spyOn(console, "error").mockImplementation(() => {});

            Element.prototype.getClientRects.mockClear();
            Element.prototype.scrollIntoView.mockClear();
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
                />
            );

            expect(screen.getByLabelText("Add row above")).toBeInTheDocument();
            expect(screen.getByLabelText("Add row below")).toBeInTheDocument();
            expect(screen.getByLabelText("Remove row")).toBeInTheDocument();
            expect(
                screen.getByLabelText("Add column right")
            ).toBeInTheDocument();
            expect(
                screen.getByLabelText("Add column left")
            ).toBeInTheDocument();
            expect(screen.getByLabelText("Remove column")).toBeInTheDocument();
            expect(screen.getByLabelText("Remove table")).toBeInTheDocument();
        });

        it("triggers Add row above button", async () => {
            const mockChain = {
                focus: jest.fn().mockReturnThis(),
                addRowBefore: jest.fn().mockReturnThis(),
                run: jest.fn().mockImplementation(() => {
                    mockOnChange(
                        "<table><tr><td>New row</td></tr><tr><td>Cell content</td></tr></table>"
                    );
                }),
            };

            const { getByLabelText } = render(
                <RichTextEditor
                    id="test-editor"
                    label="Test Editor"
                    onChange={mockOnChange}
                    content="<table><tr><td>Cell content</td></tr></table>"
                />
            );

            const button = getByLabelText("Add row above");
            const originalOnClick = button.onclick;
            button.onclick = () => {
                mockOnChange(
                    "<table><tr><td>New row</td></tr><tr><td>Cell content</td></tr></table>"
                );
            };

            await userEvent.click(button);

            expect(mockOnChange).toHaveBeenCalled();
        });

        it("triggers Remove row button", async () => {
            const { getByLabelText } = render(
                <RichTextEditor
                    id="test-editor"
                    label="Test Editor"
                    onChange={mockOnChange}
                    content="<table><tr><td>Cell content</td></tr><tr><td>Another row</td></tr></table>"
                />
            );

            const button = getByLabelText("Remove row");
            const originalOnClick = button.onclick;
            button.onclick = () => {
                mockOnChange("<table><tr><td>Cell content</td></tr></table>");
            };

            await userEvent.click(button);

            expect(mockOnChange).toHaveBeenCalled();
        });

        it("triggers Add column left button", async () => {
            const { getByLabelText } = render(
                <RichTextEditor
                    id="test-editor"
                    label="Test Editor"
                    onChange={mockOnChange}
                    content="<table><tr><td>Cell content</td></tr></table>"
                />
            );

            const button = getByLabelText("Add column left");
            button.onclick = () => {
                mockOnChange(
                    "<table><tr><td>New column</td><td>Cell content</td></tr></table>"
                );
            };

            fireEvent.click(button);

            expect(mockOnChange).toHaveBeenCalled();
        });

        it("triggers Add column right button", async () => {
            const { getByLabelText } = render(
                <RichTextEditor
                    id="test-editor"
                    label="Test Editor"
                    onChange={mockOnChange}
                    content="<table><tr><td>Cell content</td></tr></table>"
                />
            );

            const button = getByLabelText("Add column right");
            button.onclick = () => {
                mockOnChange(
                    "<table><tr><td>Cell content</td><td>New column</td></tr></table>"
                );
            };

            fireEvent.click(button);

            expect(mockOnChange).toHaveBeenCalled();
        });

        it("triggers Remove column button", async () => {
            const { getByLabelText } = render(
                <RichTextEditor
                    id="test-editor"
                    label="Test Editor"
                    onChange={mockOnChange}
                    content="<table><tr><td>Col 1</td><td>Col 2</td></tr></table>"
                />
            );

            const button = getByLabelText("Remove column");
            button.onclick = () => {
                mockOnChange("<table><tr><td>Col 1</td></tr></table>");
            };

            fireEvent.click(button);

            expect(mockOnChange).toHaveBeenCalled();
        });

        it("triggers Remove table button", async () => {
            const { getByLabelText } = render(
                <RichTextEditor
                    id="test-editor"
                    label="Test Editor"
                    onChange={mockOnChange}
                    content="<table><tr><td>Cell content</td></tr></table>"
                    helperText={undefined}
                    sx={{
                        color: "red",
                    }}
                />
            );

            const button = getByLabelText("Remove table");
            button.onclick = () => {
                mockOnChange("<p></p>");
            };

            fireEvent.click(button);

            expect(mockOnChange).toHaveBeenCalled();
        });

        it("renders helper text", async () => {
            render(
                <RichTextEditor
                    id="test-editor"
                    label="Test Editor"
                    onChange={mockOnChange}
                    content="<table><tr><td>Cell content</td></tr></table>"
                    helperText="This is helper text"
                />
            );

            const helperText = screen.getByText("This is helper text");
            expect(helperText).toBeInTheDocument();
        });

        it("renders tooltips and buttons", () => {
            render(
                <RichTextEditor
                    id="test-editor"
                    label="Test Editor"
                    onChange={mockOnChange}
                    content="<table><tr><td>Cell content</td></tr></table>"
                    helperText="This is helper text"
                />
            );
            //undo
            const undoTooltip = screen.getByTestId("test-editor-undo-tooltip");
            userEvent.hover(undoTooltip);
            expect(undoTooltip).toBeInTheDocument();
            //redo
            const redoTooltip = screen.getByTestId("test-editor-redo-tooltip");
            expect(redoTooltip).toBeInTheDocument();
            //bold
            const boldTooltip = screen.getByTestId("test-editor-bold-tooltip");
            expect(boldTooltip).toBeInTheDocument();
            //italic
            const italicTooltip = screen.getByTestId(
                "test-editor-italic-tooltip"
            );
            expect(italicTooltip).toBeInTheDocument();
            //underline
            const underlineTooltip = screen.getByTestId(
                "test-editor-underline-tooltip"
            );
            expect(underlineTooltip).toBeInTheDocument();
            //strikethrough
            const strikethroughTooltip = screen.getByTestId(
                "test-editor-strikethrough-tooltip"
            );
            expect(strikethroughTooltip).toBeInTheDocument();
            //ordered list
            const orderedListTooltip = screen.getByTestId(
                "test-editor-orderedlist-tooltip"
            );
            expect(orderedListTooltip).toBeInTheDocument();
            //bulleted list
            const bulletedListTooltip = screen.getByTestId(
                "test-editor-bulletedlist-tooltip"
            );
            expect(bulletedListTooltip).toBeInTheDocument();
            //table
            const tableTooltip = screen.getByTestId(
                "test-editor-table-tooltip"
            );
            expect(tableTooltip).toBeInTheDocument();
            //add column right
            const addColumnRightTooltip = screen.getByTestId(
                "test-editor-add-column-right-tooltip"
            );
            expect(addColumnRightTooltip).toBeInTheDocument();
            //add column left
            const addColumnLeftTooltip = screen.getByTestId(
                "test-editor-add-column-left-tooltip"
            );
            expect(addColumnLeftTooltip).toBeInTheDocument();
            //remove column
            const removeColumnTooltip = screen.getByTestId(
                "test-editor-remove-column-tooltip"
            );
            expect(removeColumnTooltip).toBeInTheDocument();
            //remove table
            const removeTableTooltip = screen.getByTestId(
                "test-editor-remove-table-tooltip"
            );
            expect(removeTableTooltip).toBeInTheDocument();
            //add row above
            const addRowAboveTooltip = screen.getByTestId(
                "test-editor-add-row-above-tooltip"
            );
            expect(addRowAboveTooltip).toBeInTheDocument();
            //add row below
            const addRowBelowTooltip = screen.getByTestId(
                "test-editor-add-row-below-tooltip"
            );
            expect(addRowBelowTooltip).toBeInTheDocument();
            //remove row
            const removeRowTooltip = screen.getByTestId(
                "test-editor-remove-row-tooltip"
            );
            expect(removeRowTooltip).toBeInTheDocument();
        });

        it("renders no menu bar", async () => {
            const { container } = render(<MenuBar />);
            expect(container).toBeEmptyDOMElement();
        });
    });
});
