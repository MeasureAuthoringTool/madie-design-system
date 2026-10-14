import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MadieAlert from "../../components/MadieAlert";
import MadieAlertProvider from "../../components/MadieAlert/MadieAlertProvider";
import MinimizedAlert from "../../components/MinimizedAlert";

describe("MinimizedAlert", () => {
    it("requires a provider for explicit minimization and the restore link", () => {
        const consoleError = jest
            .spyOn(console, "error")
            .mockImplementation(() => {});
        try {
            expect(() =>
                render(<MadieAlert content="Alert content" minimizeAlerts />)
            ).toThrow("must be rendered within a MadieAlertProvider");
            expect(() => render(<MinimizedAlert />)).toThrow(
                "must be rendered within a MadieAlertProvider"
            );
        } finally {
            consoleError.mockRestore();
        }
    });

    it("does not render when no alerts are minimized", () => {
        render(
            <MadieAlertProvider>
                <MinimizedAlert />
            </MadieAlertProvider>
        );
        expect(screen.queryByTestId("minimized-alert")).not.toBeInTheDocument();
    });

    it("preserves colors and supports caller-owned layout without absolute positioning", () => {
        render(
            <MadieAlertProvider>
                <header style={{ display: "flex" }}>
                    <span>Other header content</span>
                    <MinimizedAlert
                        className="header-alert-link"
                        style={{ marginLeft: "auto" }}
                    />
                </header>
                <MadieAlert content="Alert content" />
            </MadieAlertProvider>
        );
        fireEvent.click(screen.getByTestId("minimize-button-0"));

        const link = screen.getByRole("button", { name: "Display Alerts" });
        expect(link).toHaveClass("header-alert-link");
        expect(link).toHaveStyle({ marginLeft: "auto" });
        expect(link.style.position).toBe("");
        expect(link.style.top).toBe("");
        expect(link.style.right).toBe("");
        expect(screen.getByTestId("WarningRoundedIcon")).toHaveStyle({
            color: "yellow",
        });
        expect(screen.getByTestId("minimized-alert-text")).toHaveStyle({
            color: "white",
            fontSize: "16px",
        });
    });

    it("restores alerts using Enter and Space", async () => {
        render(
            <MadieAlertProvider>
                <MinimizedAlert />
                <MadieAlert
                    canClose={false}
                    content="Alert content"
                    alertProps={{ "data-testid": "alert-dialog" }}
                />
            </MadieAlertProvider>
        );
        fireEvent.click(screen.getByTestId("minimize-button-0"));
        userEvent.tab();
        expect(screen.getByTestId("minimized-alert")).toHaveFocus();
        await userEvent.keyboard("{Enter}");
        expect(screen.getByTestId("alert-dialog")).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("minimize-button-0"));
        userEvent.tab();
        await userEvent.keyboard(" ");
        expect(screen.getByTestId("alert-dialog")).toBeInTheDocument();
        expect(screen.queryByTestId("minimized-alert")).not.toBeInTheDocument();
    });

    it("does not submit a form when restoring alerts", () => {
        const onSubmit = jest.fn();
        render(
            <MadieAlertProvider>
                <form onSubmit={onSubmit}>
                    <MinimizedAlert />
                    <MadieAlert content="Alert content" />
                </form>
            </MadieAlertProvider>
        );
        fireEvent.click(screen.getByTestId("minimize-button-0"));
        fireEvent.click(screen.getByTestId("minimized-alert"));
        expect(onSubmit).not.toHaveBeenCalled();
        expect(screen.getByText("Alert content")).toBeInTheDocument();
    });
});
