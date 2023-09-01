import { useEffect, useState } from "react";
import { Container } from "@mui/material";

import DataTable from "../components/DataTable";

// Table heading and rows
const columns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name" },
  { field: "current_price", headerName: "Current Price" },
];

function Coins() {
  const [coinsData, setCoinsData] = useState([]);
  const URL =
    "/api/v3/coins/markets?vs_currency=AUD&order=market_cap_desc&per_page=100&sparkline=false&locale=en";

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        console.warn(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCoinsData(data);
      });
  }, []);

  const handleRowClick = (id) => {
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
