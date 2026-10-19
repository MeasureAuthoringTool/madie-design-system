import React, { useMemo, useState } from "react";
import {
    createColumnHelper,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import MadieTable from "./index";
import TruncateText from "../TruncateText";

export default {
    title: "Madie Table",
    component: MadieTable,
};

const longDescription =
    "Addressing Social Needs in the Inpatient Setting Part 4 of 4 Housing Domain. This description is intentionally long so that it is truncated and exposes a keyboard focusable Show more button.";

const rows = [
    { id: "1", name: "Measure A", version: "1.0.000", description: longDescription },
    { id: "2", name: "Measure B", version: "0.0.001", description: "Short description" },
    { id: "3", name: "Measure C", version: "2.1.000", description: longDescription },
];

const columnHelper = createColumnHelper();

const useStoryTable = (data) => {
    const [sorting, setSorting] = useState([]);
    const columns = useMemo(
        () => [
            columnHelper.accessor("name", { header: "Name" }),
            columnHelper.accessor("version", { header: "Version" }),
            columnHelper.accessor("description", {
                header: "Description",
                enableSorting: false,
                cell: (info) => (
                    <TruncateText
                        text={info.getValue()}
                        maxLength={60}
                        dataTestId={`description-${info.row.original.id}`}
                    />
                ),
            }),
        ],
        []
    );
    const table = useReactTable({
        data,
        columns,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    // asc -> desc -> cleared, matching how the consuming apps drive MadieTable
    const handleSort = (columnId) => {
        const current = sorting[0];
        if (!current || current.id !== columnId) {
            setSorting([{ id: columnId, desc: false }]);
        } else if (!current.desc) {
            setSorting([{ id: columnId, desc: true }]);
        } else {
            setSorting([]);
        }
    };

    return {
        table,
        handleSort,
        currentSort: sorting[0]?.id,
        currentDirection: sorting[0] ? (sorting[0].desc ? "DESC" : "ASC") : undefined,
    };
};

export const WithTruncatedText = () => {
    const tableProps = useStoryTable(rows);
    return (
        <div className="measure-table" style={{ padding: 24 }}>
            <MadieTable {...tableProps} ariaLabel="Measures" />
        </div>
    );
};
WithTruncatedText.storyName = "With TruncateText cells";

export const Empty = () => {
    const tableProps = useStoryTable([]);
    return (
        <div className="measure-table" style={{ padding: 24 }}>
            <MadieTable {...tableProps} ariaLabel="Measures" />
        </div>
    );
};
