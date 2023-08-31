import { NavLink, useLocation } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

// TODO
// Active link styles not working, add a logo image

// Styles for the component
const useStyles = makeStyles((theme) => ({
  logo: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
  activeLink: {
    fontWeight: "bold",
  },
}));

function Header() {
  const classes = useStyles();
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {/* <img src="/" alt="Logo" className={classes.logo} /> */}
          MyCoins
        </Typography>
        <Button
          color="inherit"
          component={NavLink}
          to="/"
          className={location.pathname === "/" ? classes.activeLink : ""}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/coins"
          className={location.pathname === "/coins" ? classes.activeLink : ""}
        >
          Coins
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
