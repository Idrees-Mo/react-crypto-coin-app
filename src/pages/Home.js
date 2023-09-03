import { Container } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <h1>Welcome to my crypto currency App.</h1>

      <Link to={"/coins"}>Go to Coins Page!</Link>
    </Container>
  );
}

export default Home;
