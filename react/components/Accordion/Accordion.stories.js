import React from "react";
import Accordion from ".";

export default {
    title: "Accordion",
    component: Accordion,
};

export const Example = () => (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
        <Accordion title="Accordion title">My accordion content</Accordion>
    </div>
);

export const Focus = () => (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
        <input />
        <Accordion title="Accordion title">My accordion content</Accordion>
    </div>
);
