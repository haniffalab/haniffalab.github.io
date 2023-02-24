import React, { useEffect } from "react";
import { Pagination } from 'react-bootstrap';
import { useTable, useSortBy, usePagination } from "react-table";

const Table = ({
    columns,
    data,
    fetchData = () => null,
    onSort = () => null,
    loading = false,
    pageCount: controlledPageCount,
    total = data.length }) => {

    const {
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize, sortBy }
    } = useTable(
        {
            columns,
            data,
            manualPagination: true,
            manualSortBy: true,
            autoResetPage: false,
            autoResetSortBy: false,
            pageCount: controlledPageCount,
            initialState: { pageSize: 2 },
        },
        useSortBy,
        usePagination
    );

    useEffect(() => {
        onSort({ sortBy, pageIndex, pageSize });
        fetchData({ pageIndex, pageSize });
    }, [onSort, sortBy, fetchData, pageIndex, pageSize]);

    return (
        <>
            <div className="table">
                {headerGroups.map((headerGroup) => (
                    <div className="row header" {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            // Add the sorting props to control sorting. For this example
                            // we can add them into the header props
                            <div className="cell" {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render("Header")}
                                {/* Add a sort direction indicator */}
                                <span>
                                    {column.isSorted
                                        ? column.isSortedDesc
                                            ? " 🔽"
                                            : " 🔼"
                                        : ""}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
                {page.map((row, i) => {
                    prepareRow(row);
                    return (
                        <div className="row" {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <div className="cell" {...cell.getCellProps()}>{cell.render("Cell")}</div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            {controlledPageCount > 0 &&
                <div className="table footer">
                    <div className="row">
                        {loading ? (
                            // Use our custom loading state to show a loading indicator
                            <div className="cell">Loading...</div>
                        ) : (
                            <div className="cell">Showing {page.length} of {total}{" "}
                                results</div>
                        )}
                    </div>
                </div>
            }
            {controlledPageCount > 0 &&
                <div className="d-flex flex-row my-3">
                    <Pagination className="align-self-center m-0">
                        <Pagination.First onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
                        <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage} />
                        <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
                        <Pagination.Last onClick={() => gotoPage(controlledPageCount)} disabled={!canNextPage} />
                    </Pagination>
                    <div className="align-self-center ps-4">
                        Go to page
                    </div>
                    <div className="align-self-center me-auto ps-2">
                        <input
                            type="number"
                            className="form-control"
                            defaultValue={pageIndex + 1}
                            onChange={(e) => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                gotoPage(page);
                            }}
                        />
                    </div>
                    <div className="align-self-center ps-4">
                        Show
                    </div>
                    <div className="align-self-center ps-1">
                        <select
                            value={pageSize}
                            className="form-control"
                            onChange={(e) => {
                                setPageSize(Number(e.target.value));
                            }}
                        >
                            {[2, 10, 20, 30, 40, 50].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                    {pageSize}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="align-self-center ps-1">
                        entries
                    </div>
                    <div className="align-self-center ps-4">
                        Page <strong>{pageIndex + 1} of {pageOptions.length}</strong>
                    </div>
                </div>
            }
        </>
    );
}

export default Table;