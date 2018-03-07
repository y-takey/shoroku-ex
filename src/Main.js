import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

import List from "./List";
import Manage from "./Manage";
import Event from "./Event";

const NoMatch = props => {
  return <div>No Match</div>;
};

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
            <Switch>
              <Route exact path="/" component={List} />
              <Route path="/:eventId/manage" component={Manage} />
              <Route path="/:eventId/app" component={Event} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
