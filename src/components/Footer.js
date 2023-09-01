import { Typography, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.grey[200], // Use a color that suits your design
    color: theme.palette.text.primary, // Use appropriate text color
    padding: theme.spacing(2),
    minHeight: 130,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // Center items vertically
  },
  linkColumn: {
    display: "flex",
    flexDirection: "column",
  },
  link: {
    marginBottom: theme.spacing(1),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body1" align="center">
        Dummy Text in the Center
      </Typography>
      <div className={classes.linkColumn}>
        <Link
          color="inherit"
          href="#"
          underline="none"
          className={classes.link}
        >
          Link 1
        </Link>
        <Link
          color="inherit"
          href="#"
          underline="none"
          className={classes.link}
        >
          Link 2
        </Link>
        <Link
          color="inherit"
          href="#"
          underline="none"
          className={classes.link}
        >
          Link 3
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
