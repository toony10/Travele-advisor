import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";
import { useState } from "react";

function Header({ setCoordinates }) {
  const classes = useStyles();
  const [autoComplete, setAutoComplete] = useState(null);
  const onLoad = (aoutC) => setAutoComplete(aoutC);
  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
