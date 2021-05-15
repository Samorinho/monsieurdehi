import React from "react";
import { makeStyles, Typography, Container, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    // backgroundColor:
    //   theme.palette.type === "light"
    //     ? theme.palette.grey[200]
    //     : theme.palette.grey[800],
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Link href="#" style={{ textDecoration: "none", color: "grey" }}>
          <Typography variant="body2" align="center">
            © Johan-David Dehi {new Date().getFullYear()}
          </Typography>
        </Link>
      </Container>
    </footer>
  );
}
