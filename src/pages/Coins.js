import DataTable from "../components/DataTable";

import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGetCoinsQuery } from "../store/coinsApiSlice";

/**
 *  Table heading and rows
 * @typedef {Object} Column
 * @property {string} field - The field name of the column.
 * @property {string} headerName - The header name for the column.
 */
const columns = [
  // { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name" },
  { field: "current_price", headerName: "Current Price" },
];

/**
 * Represents a Coin component that fetches coin data and displays it in a table
 * @function Coin
 * @returns {JSX.Element} - The Coin component JSX
 */
function Coins() {
  const { data: coinsData, isLoading, error } = useGetCoinsQuery();

  // Redirect to coin detail page
  const navigate = useNavigate();
  const handleRowClick = (id) => {
    navigate(`/coins/${id}`);
    console.log(`Row with ID ${id} clicked`);
  };

  return (
    <Container>
      <h1>Coins Page</h1>
      {isLoading ? (
        <>Loading Coins ....</>
      ) : error ? (
        <>Opps!, something went wrong.</>
      ) : (
        <>
          <DataTable
            columns={columns}
            data={coinsData}
            onRowClick={handleRowClick}
            itemsPerPage={10}
          />
        </>
      )}
    </Container>
  );
}

export default Coins;
