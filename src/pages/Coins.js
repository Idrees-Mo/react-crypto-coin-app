import { Container } from "@mui/material";
import DataTable from "../components/DataTable";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name" },
  { field: "age", headerName: "Age" },
  { field: "hight", headerName: "Hight" },
  // Add more columns as needed
];

const generateData = (count) =>
  Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    hight: `7 cm`,
    name: `Person ${index + 1}`,
    age: Math.floor(Math.random() * 50) + 20,
  }));

const data = generateData(50);

function Coins() {
  const handleRowClick = (id) => {
    console.log(`Row with ID ${id} clicked`);
  };

  return (
    <Container>
      <h1>Coins Page</h1>
      <DataTable
        columns={columns}
        data={data}
        onRowClick={handleRowClick}
        itemsPerPage={10}
      />
    </Container>
  );
}

export default Coins;
