import React, { Component } from "react";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";

import Typography from "material-ui/Typography";

const Home = props => {
  const { title, description, term, location } = props.data;
  return (
    <div>
      <Card>
        <CardMedia
          style={{ height: 300 }}
          image="http://www.aberdeenessentials.com/wp-content/uploads/2016/05/iStock_000075253945_Small.jpg"
          title=""
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">{description}</Typography>
          &nbsp;
          <Typography style={{ fontSize: 18, color: "gray" }}>{term}</Typography>
          &nbsp;
          <Typography style={{ fontSize: 14, color: "gray" }}>{location}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
