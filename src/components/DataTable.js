import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

/**
 * Creates and returns custom styles using the makeStyles hook from Material-UI.
 *
 * @param {object} theme - The theme object provided by Material-UI.
 * @returns {object} - The custom styles object.
 */
const useStyles = makeStyles((theme) => ({
  tableHeader: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  clickableRow: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

/**
 * Creates a data table component.
 *
 * @param {Object} options - The configuration options for the data table.
 * @param {Array} options.columns - An array of column objects specifying the columns to display in the table.
 * @param {Array} options.data - An array of data objects representing the rows of the table.
 * @param {Function} options.onRowClick - A callback function to be called when a row is clicked.
 * @param {number} [options.itemsPerPage=5] - The number of items to display per page.
 *
 * @return {JSX.Element} - The rendered data table component.
 */

function DataTable({ columns, data, onRowClick, itemsPerPage = 5 }) {
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field} className={classes.tableHeader}>
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow
                key={row.id}
                className={`${classes.clickableRow} ${
                  onRowClick ? classes.clickableRow : ""
                }`}
                onClick={() => onRowClick && onRowClick(row.id)}
              >
                {columns.map((column) => (
                  <TableCell key={column.field}>{row[column.field]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(data.length / itemsPerPage)}
        page={page}
        onChange={handleChangePage}
      />
    </>
  );
}

export default DataTable;
