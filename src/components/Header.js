import React, { useState } from "react";
import {
  ThemeProvider,
  createMuiTheme,
  Typography,
  Grid,
  Link,
  makeStyles,
} from "@material-ui/core";
import Photographie from "../assets/photographie.jpg";
import Logo from "../assets/logo.jpg";

const useStyles = makeStyles((theme) => ({
  top: {
    marginTop: theme.spacing(5),
  },
  photos: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100%",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
  },
  nom: {
    fontFamily: "Playfair-Display",
    fontSize: "2rem",
  },
  subname: {
    fontFamily: "Quicksand",
  },
  link: {
    textDecoration: "none",
    color: "grey",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [photo, setPhoto] = useState(Photographie);

  const hoverPicture = () => {
    photo === Photographie ? setPhoto(Logo) : setPhoto(Photographie);
  };

  const themes = createMuiTheme({
    typography: {
      fontFamily: ["Quicksand"],
    },
  });

  return (
    <>
      <ThemeProvider theme={themes}>
        <Grid className={classes.top} container justify="center" spacing={2}>
          <Grid item>
            <div
              className={classes.photos}
              style={{
                backgroundImage: `url(${photo})`,
              }}
              onMouseEnter={hoverPicture}
              onMouseLeave={hoverPicture}
            ></div>
          </Grid>
          <Grid item>
            <Typography className={classes.nom}>Johan-David Dehi</Typography>

            <Typography className={classes.subname}>
              Software warrior
            </Typography>
          </Grid>
          <Grid item>
            <Link
              href="https://github.com/Samorinho"
              target="_blank"
              className={classes.link}
            >
              <Typography>Github</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://www.linkedin.com/in/monsieurdehi/"
              target="_blank"
              className={classes.link}
            >
              <Typography>LinkedIn</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://instagram.com/monsieurdehi"
              target="_blank"
              className={classes.link}
            >
              <Typography>Instagram</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://afropedia.fr"
              target="_blank"
              className={classes.link}
            >
              <Typography>Afropedia</Typography>
            </Link>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
