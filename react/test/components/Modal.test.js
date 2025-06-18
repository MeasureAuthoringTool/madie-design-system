import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Modal from "../../components/Modal/index.jsx";

jest.mock("../../lib/SvgComponents.jsx", () => ({
    CloseXIcon2: () => <span data-testid="close-icon">X</span>,
}));

describe("Modal", () => {
    const defaultProps = {
        title: "Test Modal",
        children: <div>Modal content</div>,
        isOpen: true,
        onRequestClose: jest.fn(),
        appElement: "body",
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("Does not catch fire", async () => {
        render(<Modal {...defaultProps} />);
        expect(screen.getByText("Test Modal")).toBeInTheDocument();
        expect(screen.getByText("Modal content")).toBeInTheDocument();
        expect(screen.getByTestId("modal-close-btn")).toBeInTheDocument();
    });

    it("calls onclose when button click", () => {
        render(<Modal {...defaultProps} />);
        fireEvent.click(screen.getByTestId("modal-close-btn"));
        expect(defaultProps.onRequestClose).toHaveBeenCalled();
    });

    it("renders buttons", () => {
        const primary = {
            title: "Primary",
            onClick: jest.fn(),
        };
        const secondary = {
            title: "Secondary",
            onClick: jest.fn(),
        };

        render(
            <Modal {...defaultProps} primary={primary} secondary={secondary} />,
        );

        const primaryBtn = screen.getByTestId("modal-primary-btn");
        const secondaryBtn = screen.getByTestId("modal-secondary-btn");

        expect(primaryBtn).toBeInTheDocument();
        expect(primaryBtn).toHaveTextContent("Primary");

        expect(secondaryBtn).toBeInTheDocument();
        expect(secondaryBtn).toHaveTextContent("Secondary");

        fireEvent.click(primaryBtn);
        fireEvent.click(secondaryBtn);

        expect(primary.onClick).toHaveBeenCalled();
        expect(secondary.onClick).toHaveBeenCalled();
    });

    it("falls back to onRequestClose when no onClick", () => {
        render(<Modal {...defaultProps} secondary={{ title: "Cancel" }} />);
        fireEvent.click(screen.getByTestId("modal-secondary-btn"));
        expect(defaultProps.onRequestClose).toHaveBeenCalled();
    });

    it("renders with custom width when provided", () => {
        render(<Modal {...defaultProps} width="500px" />);
        const modalContent = document.querySelector(".qpp-c-modal__content");
        expect(modalContent).toHaveStyle("width: 500px");
    });

    it("sets focus on close button after open", async () => {
        render(<Modal {...defaultProps} />);
        await waitFor(() => {
            expect(document.activeElement).toBe(
                screen.getByTestId("modal-close-btn"),
            );
        });
    });

    it("sets overflowSeparator to true when content overflows", async () => {
        Object.defineProperty(HTMLElement.prototype, "scrollHeight", {
            configurable: true,
            get: () => 2000,
        });

        Object.defineProperty(document.documentElement, "clientHeight", {
            configurable: true,
            get: () => 1000,
        });

        render(
            <Modal
                isOpen={true}
                onRequestClose={jest.fn()}
                title="Test Modal"
                appElement="body"
            >
                <div>Overflow content</div>
            </Modal>,
        );

        await waitFor(() => {
            const header = screen
                .getByText("Test Modal")
                .closest(".qpp-c-modal__header");
            expect(header).toHaveClass("qpp-c-modal__header-sep");
        });
    });
});
