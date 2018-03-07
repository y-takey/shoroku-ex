import React, { Component } from "react";
import Grid from "material-ui/Grid";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

import LinkButton from "../LinkButton";

const styles = {
  card: {
    minWidth: "100%"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: "gray"
  },
  pos: {
    marginBottom: 12,
    color: "gray"
  }
};

const Bookmark = props => {
  const { info } = props.data;
  return (
    <div style={{ flexGrow: 1, padding: 10 }}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={12}>
          <Card style={styles.card}>
            <CardContent>
              <Typography style={styles.title}>2018/03/07 11:00 - 12:00</Typography>
              <Typography style={styles.pos}>第2会場</Typography>
              <Typography variant="headline" component="h2">
                セッション　タイトルA
              </Typography>
              <Typography component="p">〇〇教授</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">削除</Button>
              <LinkButton label="詳細" to="/1/app/2" />
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Card style={styles.card}>
            <CardContent>
              <Typography style={styles.title}>2018/03/07 13:00 - 15:00</Typography>
              <Typography style={styles.pos}>第1会場</Typography>
              <Typography variant="headline" component="h2">
                セッション　タイトルD
              </Typography>
              <Typography component="p">〇〇教授</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">削除</Button>
              <LinkButton label="詳細" to="/1/app/2" />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Bookmark;
