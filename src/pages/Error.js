import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Header from "../components/Header";
import Footer from "../components/Footer";

// Styles for the container
const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: `calc(100vh - 194px)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function Error() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container className={classes.container}>
        <h1>Opps!</h1>
        <p>Page Not Found!</p>
      </Container>
      <Footer />;
    </>
  );
}

export default Error;
