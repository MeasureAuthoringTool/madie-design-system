import React from "react";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import {
    Pagination as PaginationComponent,
    PaginationItem,
    Select,
    MenuItem,
    Typography,
} from "@mui/material";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: 90,
        padding: "0px 24px",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    // text
    dark: {
        color: "#333333",
    },
    faded: {
        color: "#757575",
    },
    //select
    selectRoot: {
        margin: '0 11px',
        "& .MuiOutlinedInput-notchedOutline": {
            "& legend": {
                width: 0,
            },
        },
        "& .MuiInputBase-input": {
            fontFamily: "Rubik",
            fontSize: 14,
            borderRadius: 3,
        },
    },
    // pagination
    ul: {
        "& .MuiPaginationItem-root": {
            color: "#0073C8",
            border: "solid 1px #CACACA",
            "&:focus": {
                border: "0.0625rem solid #125496",
                borderRadius: "0.1875rem",
                boxShadow: "0 0 0 0.25rem #cbe4ff",
                outline: "none",
            },
        },
        "& .Mui-selected": {
            color: "#fff",
            backgroundColor: "#0073C8 !important",
        },
        "& .MuiPaginationItem-ellipsis": {
            border: "solid 1px transparent",
        },
        "& .MuiPaginationItem-previousNext": {
            border: "solid 1px transparent",
        },
    },
    next: {
        border: "solid 1px transparent",
        "&::before": {
            content: '"Next  "',
            marginRight: 5,
            fontSize: 14,
            fontFamily: "Rubik",
        },
    },
    prev: {
        border: "solid 1px transparent",
        "&::after": {
            content: '"  Previous"',
            marginLeft: 5,
            fontSize: 14,
            fontFamily: "Rubik",
        },
    },
    selected: {
        backgroundColor: "#0073C8",
        border: "solid 1px #0073C8",
        color: "#fff",
    },
});

// for ts later implemeentation.
// interface PaginationProps {
//     totalItems: number; // total items
//     visibleItems: number; // returned by paging object in spring
//     count: number; // page count
//     limit: number; // items per page
//     limitOptions: number[]; // limit options
//     shape?: "rounded" | "circular"; // style
//     page: number; // current page zer0 indexed
//     siblingCount?: number;
//     boundaryCount?: number;
//     handlePageChange: (e: any, v: any) => void;
//     handleLimitChange: (e: any) => void;
//     hidePrevButton: boolean;
//     hideNextButton: boolean;
//   }

const Pagination = ({
    totalItems = 0,
    visibleItems = 0,
    count = 1,
    offset = 0,
    shape = "rounded",
    page = 0,
    limit = 10,
    limitOptions = [10, 25, 50],
    handlePageChange,
    handleLimitChange,
    hidePrevButton = true,
    hideNextButton = false,
}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.row}>
                <Typography
                    fontSize={14}
                    fontFamily="Rubik"
                    className={classes.dark}
                >
                    Items per page
                </Typography>
                <Select
                    size="small"
                    className={classes.selectRoot}
                    id="pagination-limit-select"
                    value={limit}
                    label={null}
                    onChange={handleLimitChange}
                >
                    {limitOptions.map((val) => (
                        <MenuItem
                            value={val}
                            key={`limit-${val}`}
                            data-testid="limit-option"
                        >
                            {val}
                        </MenuItem>
                    ))}
                </Select>
                <Typography
                    fontSize={14}
                    className={classes.faded}
                    fontFamily="Rubik"
                >{`${offset + 1} - ${
                    visibleItems + offset
                } of ${totalItems}`}</Typography>
            </div>
            <PaginationComponent
                classes={{
                    ul: classes.ul,
                    selected: classes.selected,
                }}
                renderItem={(props) => {
                    if (props.type === "next") {
                        return (
                            <PaginationItem
                                {...props}
                                classes={{ text: classes.next }}
                            />
                        );
                    }
                    if (props.type === "previous") {
                        return (
                            <PaginationItem
                                {...props}
                                classes={{ text: classes.prev }}
                            />
                        );
                    }
                    return <PaginationItem {...props} />;
                }}
                count={count}
                page={page}
                shape={shape}
                siblingCount={2}
                boundaryCount={0}
                onChange={handlePageChange}
                hidePrevButton={hidePrevButton}
                hideNextButton={hideNextButton}
            />
        </div>
    );
};

Pagination.propTypes = {
    totalItems: PropTypes.number,
    visibleItems: PropTypes.number,
    count: PropTypes.number,
    offset: PropTypes.number,
    shape: PropTypes.string,
    limit: PropTypes.number,
    page: PropTypes.number,
    limitOptions: PropTypes.array,
    handlePageChange: PropTypes.func,
    handleLimitChange: PropTypes.func,
    hidePrevButton: PropTypes.bool,
    hideNextButton: PropTypes.bool,
    type: PropTypes.string,
};

export { Pagination };
