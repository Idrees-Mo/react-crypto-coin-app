import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Styles for the app container
const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: `calc(100vh - 194px)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container className={classes.container}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default App;
