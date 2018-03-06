import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import Reboot from "material-ui/Reboot";
import blue from "material-ui/colors/blue";

import Root from "./Root";

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Reboot />
    <Root />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
