import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * Define and generate CSS-in-JS styles using the `makeStyles` function from the Material-UI library.
 *
 * @param {Function} theme - The Material-UI theme object.
 * @returns {Object} - The generated CSS-in-JS styles.
 */
const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: `calc(100vh - 194px)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

/**
 * Renders an error component with a header, container, title, and message.
 *
 * @returns {Component} - The error component.
 */
function Error() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container className={classes.container}>
        <h1>Opps!</h1>
        <p>Something went wrong!</p>
      </Container>
      <Footer />;
    </>
  );
}

export default Error;
