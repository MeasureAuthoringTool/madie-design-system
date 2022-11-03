import React from "react";

import { Pagination } from "./index";

export default {
    title: "Pagination",
    component: Pagination,
};

export const Default = () => (
    <Pagination
        totalItems={30}
        visibleItems={10}
        count={30}
        offset={0}
        shape="rounded"
        page={0}
        limit={10}
        limitOptions={[10, 25, 50]}
        handlePageChange={(e, v) => {
            console.log(e, v);
        }}
        handleLimitChange={(e, v) => {
            console.log(e, v);
        }}
        hideNextButton={true}
        hidePrevButton={false}
    />
);
