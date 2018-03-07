import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";

const LinkButton = props => (
  <Button variant="raised" color="primary" component={Link} {...props}>
    {props.icon}
    &nbsp;
    {props.label}
  </Button>
);

export default LinkButton;
