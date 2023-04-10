import "@testing-library/jest-dom";
import { describe, expect, test } from "@jest/globals";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import Tab from "../../components/Tabs/Tab";
import Tabs from "../../components/Tabs/index";
import React from "react";

describe("Tabs", () => {
    test("All Tab components render. ", async () => {
        await act(async () => {
            const { findByTestId } = await render(
                <div>
                    <div style={{ width: "fit-content" }}>
                        Standard: A
                        <Tabs
                            type="A"
                            size="standard"
                            data-testId="standard-a"
                            value={1}
                        >
                            <Tab
                                type="A"
                                size="standard"
                                label="Item One"
                                value={1}
                            />
                            <Tab
                                type="A"
                                size="standard"
                                label="Item Two"
                                value={2}
                            />
                            <Tab
                                type="A"
                                size="standard"
                                label="Item Three"
                                value={3}
                            />
                            <Tab
                                type="A"
                                size="standard"
                                label="disabled"
                                value={4}
                                disabled
                            />
                        </Tabs>
                    </div>
                    <div style={{ width: "fit-content" }}>
                        Large: A
                        <Tabs
                            type="A"
                            size="large"
                            value={1}
                            data-testId="large-a"
                        >
                            <Tab
                                type="A"
                                size="large"
                                label="Item One"
                                value={1}
                            />
                            <Tab
                                type="A"
                                size="large"
                                label="Item Two"
                                value={2}
                            />
                            <Tab
                                type="A"
                                size="large"
                                label="Item Three"
                                value={3}
                            />
                            <Tab
                                type="A"
                                size="large"
                                label="disabled"
                                value={4}
                                disabled
                            />
                        </Tabs>
                    </div>
                    <div style={{ width: "fit-content" }}>
                        Standard: B
                        <Tabs
                            type="B"
                            size="standard"
                            value={1}
                            data-testId="standard-b"
                        >
                            <Tab
                                type="B"
                                size="standard"
                                label="Item One"
                                value={1}
                            />
                            <Tab
                                type="B"
                                size="standard"
                                label="Item Two"
                                value={2}
                            />
                            <Tab
                                type="B"
                                size="standard"
                                label="Item Three"
                                value={3}
                            />
                            <Tab
                                type="B"
                                size="standard"
                                label="disabled"
                                value={4}
                                disabled
                            />
                        </Tabs>
                    </div>

                    <div style={{ width: "fit-content" }}>
                        Large: B
                        <Tabs
                            type="B"
                            size="large"
                            value={1}
                            data-testId="large-b"
                        >
                            <Tab
                                type="B"
                                size="large"
                                label="Item One"
                                value={1}
                            />
                            <Tab
                                type="B"
                                size="large"
                                label="Item Two"
                                value={2}
                            />
                            <Tab
                                type="B"
                                size="large"
                                label="Item Three"
                                value={3}
                            />
                            <Tab
                                type="B"
                                size="large"
                                label="disabled"
                                value={4}
                                disabled
                            />
                        </Tabs>
                    </div>
                    <div style={{ width: "fit-content" }}>
                        Standard: C
                        <Tabs type="C" value={1} data-testId="standard-c">
                            <Tab
                                type="C"
                                size="standard"
                                label="Item One"
                                value={1}
                            />
                            <Tab
                                type="C"
                                size="standard"
                                label="Item Two"
                                value={2}
                            />
                            <Tab
                                type="C"
                                size="standard"
                                label="Item Three"
                                value={3}
                            />
                            <Tab
                                type="C"
                                size="standard"
                                label="disabled"
                                value={4}
                                disabled
                            />
                        </Tabs>
                    </div>
                    <div style={{ width: "fit-content" }}>
                        Large: C
                        <Tabs type="C" value={1} data-testId="large-c">
                            <Tab
                                type="C"
                                size="large"
                                label="Item One"
                                value={1}
                            />
                            <Tab
                                type="C"
                                size="large"
                                label="Item Two"
                                value={2}
                            />
                            <Tab
                                type="C"
                                size="large"
                                label="Item Three"
                                value={3}
                            />
                            <Tab
                                type="C"
                                size="large"
                                label="disabled"
                                value={4}
                                disabled
                            />
                        </Tabs>
                    </div>
                    <div style={{ width: "fit-content" }}>
                        Standard: D
                        <Tabs type="D" value={1} data-testId="standard-d">
                            <Tab
                                type="D"
                                size="standard"
                                label="Item One"
                                value={1}
                            />
                            <Tab
                                type="D"
                                size="standard"
                                label="Item Two"
                                value={2}
                            />
                            <Tab
                                type="D"
                                size="standard"
                                label="Item Three"
                                value={3}
                            />
                            <Tab
                                type="D"
                                size="standard"
                                label="disabled"
                                value={4}
                                disabled
                            />
                        </Tabs>
                    </div>
                    <div style={{ width: "fit-content" }}>
                        Large: D
                        <Tabs type="D" value={1} data-testId="large-d">
                            <Tab
                                type="D"
                                size="large"
                                label="Item One"
                                value={1}
                            />
                            <Tab
                                type="D"
                                size="large"
                                label="Item Two"
                                value={2}
                            />
                            <Tab
                                type="D"
                                size="large"
                                label="Item Three"
                                value={3}
                            />
                            <Tab
                                type="D"
                                size="large"
                                label="disabled"
                                value={4}
                                disabled
                            />
                        </Tabs>
                    </div>
                </div>
            );
            const standardA = await findByTestId("standard-a");
            const largeA = await findByTestId("large-a");
            const standardB = await findByTestId("standard-b");
            const largeB = await findByTestId("large-b");
            const standardC = await findByTestId("standard-c");
            const largeC = await findByTestId("large-c");
            const standardD = await findByTestId("standard-d");
            const largeD = await findByTestId("large-ad");

            expect(standardA).toBeIntheDocument();
            expect(largeA).toBeIntheDocument();
            expect(standardB).toBeIntheDocument();
            expect(largeB).toBeIntheDocument();
            expect(standardC).toBeIntheDocument();
            expect(largeC).toBeIntheDocument();
            expect(standardD).toBeIntheDocument();
            expect(standardC).toBeIntheDocument();
            expect(largeD).toBeIntheDocument();
        });
    });
});
