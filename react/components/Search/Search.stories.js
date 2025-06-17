import React from "react";
import Search from "./index";

export default {
    title: "Search",
    component: Search,
};

export const ExampleSearch = () => (
    <Search
        id="Example id"
        name="Example name"
        placeholder="Example placeholder"
        inputAriaLabel="Example input aria-label"
        buttonAriaLabel="Example button aria-label"
    />
);

ExampleSearch.storyName = "example Search";
