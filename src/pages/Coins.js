import DataTable from "../components/DataTable";

import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGetCoinsQuery } from "../store/coinsApiSlice";

// Table heading and rows
const columns = [
  // { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name" },
  { field: "current_price", headerName: "Current Price" },
];

function Coins() {
  const { data: coinsData } = useGetCoinsQuery();

  // Redirect to coin detail page
  const navigate = useNavigate();
  const handleRowClick = (id) => {
    navigate(`/coins/${id}`);
    console.log(`Row with ID ${id} clicked`);
  };

  return (
    <Container>
      <h1>Coins Page</h1>
      <DataTable
        columns={columns}
        data={coinsData}
        onRowClick={handleRowClick}
        itemsPerPage={10}
      />
    </Container>
  );
}

export default Coins;
