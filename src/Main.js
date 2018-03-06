import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

import List from "./List";
import Manage from "./Manage";
import Event from "./Event";

const pathPrefix = process.env.NODE_ENV === "development" ? "" : "/shoroku-ex";

class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
                管理画面（案）
              </Typography>
            </Toolbar>
          </AppBar>

          <div style={{ padding: 10 }}>
            <Route exact path={`${pathPrefix}/`} component={List} />
            <Route path={`${pathPrefix}/:eventId/manage`} component={Manage} />
            <Route path={`${pathPrefix}/:eventId/app`} component={Event} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
