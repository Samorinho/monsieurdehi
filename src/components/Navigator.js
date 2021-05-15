import React from "react";
import { makeStyles, Paper, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    marginTop: theme.spacing(10),
  },
  space: {
    margin: theme.spacing(1),
    width: theme.spacing(25),
    height: theme.spacing(25),
    cursor: "pointer",
  },
  text: {
    paddingTop: theme.spacing(10),
  },
  top: {
    marginTop: theme.spacing(10),
  },
}));

export default function Navigator() {
  const classes = useStyles();

  return (
    <Grid className={classes.top} container justify="center">
      <Grid item>
        <Paper elevation={3} className={classes.space}>
          <Typography align="center" className={classes.text}>
            Projects
          </Typography>
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={3} className={classes.space}>
          <Typography align="center" className={classes.text}>
            Resume
          </Typography>
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={3} className={classes.space}>
          <Typography align="center" className={classes.text}>
            Contact
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
