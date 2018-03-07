import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

const TopBar = props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          管理画面（案）
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
