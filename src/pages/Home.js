import { Container } from "@mui/material";
import { Link } from "react-router-dom";

/**
 * Renders the home page of the crypto currency app.
 *
 * @returns {JSX.Element} The rendered home page.
 */
function Home() {
  return (
    <Container>
      <h1>Welcome to my crypto currency App.</h1>

      <Link to={"/coins"}>Go to Coins Page!</Link>
    </Container>
  );
}

export default Home;
