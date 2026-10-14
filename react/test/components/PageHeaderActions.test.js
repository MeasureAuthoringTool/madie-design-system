import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import PageHeaderActions from "../../components/PageHeaderActions";
import MadieAlert from "../../components/MadieAlert";
import MadieAlertProvider from "../../components/MadieAlert/MadieAlertProvider";
import MinimizedAlert from "../../components/MinimizedAlert";

describe("PageHeaderActions", () => {
    it("renders inline when used without the application shell", () => {
        const { container } = render(
            <PageHeaderActions>
                <button>Comments</button>
            </PageHeaderActions>
        );
        expect(container).toContainElement(
            screen.getByRole("button", { name: "Comments" })
        );
    });

    it("places actions in the shell flex slot and preserves alert context", () => {
        const slot = document.createElement("div");
        slot.id = "page-header-actions";
        document.body.appendChild(slot);
        try {
            const { container, unmount } = render(
                <MadieAlertProvider>
                    <PageHeaderActions>
                        <button>Comments</button>
                        <MinimizedAlert />
                    </PageHeaderActions>
                    <MadieAlert content="Alert content" />
                </MadieAlertProvider>
            );
            const comments = screen.getByRole("button", { name: "Comments" });
            expect(slot).toContainElement(comments);
            expect(container).not.toContainElement(comments);

            fireEvent.click(screen.getByTestId("minimize-button-0"));
            expect(slot).toContainElement(
                screen.getByTestId("minimized-alert")
            );
            fireEvent.click(screen.getByTestId("minimized-alert"));
            expect(screen.getByText("Alert content")).toBeInTheDocument();

            unmount();
            expect(slot).toBeEmptyDOMElement();
        } finally {
            slot.remove();
        }
    });
});
