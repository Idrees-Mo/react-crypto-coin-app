import { Container } from "@mui/material";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Error() {
  return (
    <>
      <Header />
      <Container>
        <h1>Opps!</h1>
        <p>Page Not Found!</p>
      </Container>
      <Footer />;
    </>
  );
}

export default Error;
