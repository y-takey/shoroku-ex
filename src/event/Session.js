import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import BookmarkIcon from "material-ui-icons/Bookmark";

import LinkButton from "../LinkButton";

const styles = {
  term: {
    fontWeight: 20,
    marginBottom: 20
  },
  location: {
    fontWeight: 20,
    marginBottom: 20
  },
  description: {
    marginBottom: 20
  }
};
const Session = props => {
  const history = props.history;
  return (
    <div style={{ padding: 20 }}>
      <Paper elevation={4} style={{ padding: 20 }}>
        <Typography style={styles.term}>2018/03/07 11:00 - 12:00</Typography>
        <Typography style={styles.location}>第2会場</Typography>
        <Typography variant="headline" component="h3">
          セッションA
        </Typography>
        <Typography style={styles.term}>〇〇大学□□学部 〇〇教授</Typography>
        <Typography component="p" style={styles.description}>
          抄録　抄録　抄録　抄録　抄録　抄録　抄録　抄録　抄録　抄録　抄録　抄録　抄録　抄録　抄録　抄録　抄録　抄録　抄録　抄録　抄録
        </Typography>
        <Button onClick={history.goBack}>
          <BookmarkIcon />お気に入りに登録する
        </Button>
      </Paper>
    </div>
  );
};

export default withRouter(Session);
