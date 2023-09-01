import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCoins } from "../store/coinsSlice";
import DataTable from "../components/DataTable";

import { Container } from "@mui/material";

// Table heading and rows
const columns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name" },
  { field: "current_price", headerName: "Current Price" },
];

function Coins() {
  const dispatch = useDispatch();
  const { data: coinsData } = useSelector((state) => state.coins);

  useEffect(() => {
    dispatch(getCoins());
    // eslint-disable-next-line
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
