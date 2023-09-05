import { NavLink, useLocation } from "react-router-dom";

import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

/**
 * The useStyles variable is used to create a custom set of styles using the makeStyles hook.
 *
 * @var {Function} useStyles - A function that returns an object with CSS styles.
 *
 * @param {Object} theme - The theme object containing various theme settings.
 * @returns {Object} - An object containing the generated CSS styles.
 */
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

/**
 * Renders the header component for the application.
 * @return {JSX.Element} The header component.
 */
function Header() {
  const classes = useStyles();
  const location = useLocation();

  return (
    <AppBar position="static">
      <Container>
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
      </Container>
    </AppBar>
  );
}

export default Header;
