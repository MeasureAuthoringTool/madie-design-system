import React from "react";
import PropTypes from "prop-types";
import { visuallyHidden } from "@mui/utils";

import {
    Pagination as PaginationComponent,
    PaginationItem,
    Select,
    MenuItem,
    Typography,
} from "@mui/material";
import { styled } from "@mui/system";

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

const Container = styled("div")({
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 90,
    padding: "0px 24px",
});
const Row = styled("div")({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
});
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
    return (
        <Container>
            <Row>
                {/*this span is only for screen reader*/}
                <span id="items-per-page" style={visuallyHidden}>
                    Items per page {limit}.
                </span>
                <Typography
                    fontSize={14}
                    fontFamily="Rubik"
                    sx={{
                        color: "#333333",
                    }}
                >
                    Items per page
                </Typography>
                <Select
                    size="small"
                    sx={{
                        margin: "0 11px",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#8C8C8C",
                            "& legend": {
                                width: 0,
                            },
                        },
                        "& .MuiInputBase-input": {
                            fontFamily: "Rubik",
                            fontSize: 14,
                            borderRadius: 3,
                        },
                    }}
                    id="pagination-limit-select"
                    value={limit}
                    label={null}
                    onChange={handleLimitChange}
                    inputProps={{
                        "aria-labelledby": "items-per-page",
                        "aria-describedby":
                            "items-per-page offset-of-total-items",
                    }}
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
                    id="offset-of-total-items"
                    sx={{
                        color: "#757575",
                    }}
                    fontFamily="Rubik"
                >{`${offset + 1} - ${
                    visibleItems + offset
                } of ${totalItems}`}</Typography>
            </Row>
            <PaginationComponent
                sx={{
                    "& .MuiPagination-ul": {
                        "& .MuiPaginationItem-root": {
                            color: "#0073C8",
                            border: "solid 1px #8c8c8c",
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
                }}
                renderItem={(props) => {
                    if (props.type === "next") {
                        return (
                            <PaginationItem
                                sx={{
                                    border: "solid 1px transparent",
                                    "& .Mui-selected": {
                                        backgroundColor: "#0073C8",
                                        border: "solid 1px #0073C8",
                                        color: "#fff",
                                    },
                                    "&::before": {
                                        content: '"Next  "',
                                        marginRight: "5px",
                                        fontSize: 14,
                                        fontFamily: "Rubik",
                                    },
                                }}
                                {...props}
                            />
                        );
                    }
                    if (props.type === "previous") {
                        return (
                            <PaginationItem
                                sx={{
                                    border: "solid 1px transparent",
                                    "& .Mui-selected": {},
                                    "&::after": {
                                        content: '"  Previous"',
                                        marginLeft: "5px",
                                        fontSize: 14,
                                        fontFamily: "Rubik",
                                    },
                                }}
                                {...props}
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
        </Container>
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
