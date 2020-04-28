import React from "react";
import NavBar from "../components/Navbar";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "relative",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  text: {
    padding: "30px",
    fontSizeAdjust: "10",
    marginLeft: "5px",
  },
  resize: {
    fontSize: 50,
  },
  logInText: {
    fontSize: 25,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Paper component="form" className={classes.root}>
        <form align="center">
          <form noValidate autoComplete="off">
            <TextField
              type="password"
              id="standard-basic"
              label="Admin Password"
              fullWidth="true"
              className={classes.text}
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
            />
            <div>
              <Button
                variant="contained"
                color="primary"
                fullWidth="true"
                style={{ backgroundColor: "#2F2E40" }}
              >
                <text className={classes.logInText}>Log In</text>
              </Button>
            </div>
          </form>
        </form>
      </Paper>
    </div>
  );
}
