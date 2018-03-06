import React, { Component } from "react";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";

import Main from "./Main";

const Auth = props => (
  <div>
    <TextField label="Password" type="password" margin="normal" inputRef={props.inputRef} />
    <Button variant="raised" color="primary" onClick={props.clickHandler}>
      Submit
    </Button>
  </div>
);

class Root extends Component {
  constructor() {
    super();
    this.state = { authorized: false };
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword() {
    if (this.inputElement.value === "uratake") {
      this.setState({ authorized: true });
    }
  }

  render() {
    if (!this.state.authorized)
      return <Auth inputRef={el => (this.inputElement = el)} clickHandler={this.handlePassword} />;

    return <Main />;
  }
}

export default Root;
