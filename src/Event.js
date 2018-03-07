import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import BottomNavigation, { BottomNavigationAction } from "material-ui/BottomNavigation";
import HomeIcon from "material-ui-icons/Home";
import InfoIcon from "material-ui-icons/Info";
import EventIcon from "material-ui-icons/Event";
import BookmarkIcon from "material-ui-icons/Bookmark";

import LinkButton from "./LinkButton";
import Home from "./event/Home";
import Info from "./event/Info";
import TimeTable from "./event/TimeTable";
import Bookmark from "./event/Bookmark";
import Session from "./event/Session";

const panels = [Home, Info, TimeTable, Bookmark];
const data = require("./data.json");

class Event extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const id = Number(this.props.match.params.eventId);
    const sessionId = Number(this.props.match.params.sessionId);
    const rec = data.events.find(el => el.id === id);
    const Panel = panels[value];

    return (
      <div style={{ height: "100vh", overflowY: "scroll", marginBottom: 60 }}>
        <AppBar position="static" style={{ flexGrow: 1 }}>
          <Toolbar>
            <Typography variant="title" color="inherit" style={{ flex: 1 }}>
              {rec.event}
            </Typography>
            <LinkButton label="戻る" to="/" color="default" style={{ marginRight: 20 }} />
          </Toolbar>
        </AppBar>

        <div style={{ width: "100%" }}>{sessionId ? <Session /> : <Panel data={rec} />}</div>

        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          style={{ position: "fixed", bottom: "0", width: "100%" }}
        >
          <BottomNavigationAction label="概要" icon={<HomeIcon />} />
          <BottomNavigationAction label="お知らせ" icon={<InfoIcon />} />
          <BottomNavigationAction label="プログラム" icon={<EventIcon />} />
          <BottomNavigationAction label="お気に入り" icon={<BookmarkIcon />} />
        </BottomNavigation>
      </div>
    );
  }
}

export default Event;
