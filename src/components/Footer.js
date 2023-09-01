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
        Build with React, Redux & love!
      </Typography>
      <div className={classes.linkColumn}>
        <Link
          color="inherit"
          href="https://www.linkedin.com/in/muhammad-idrees-09120417/"
          target="_blank"
          underline="none"
          className={classes.link}
        >
          LinkedIn
        </Link>
        <Link
          color="inherit"
          href="https://mo-portfolio-orcin.vercel.app/"
          target="_blank"
          underline="none"
          className={classes.link}
        >
          Portfolio
        </Link>
        <Link
          color="inherit"
          href="https://github.com/Idrees-Mo"
          underline="none"
          target="_blank"
          className={classes.link}
        >
          GitHub
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
