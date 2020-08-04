import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import Advertise from "./Components/Advertise";
import { Router, Route } from "react-router-dom";
import createBrowserHistory from "./history";

class Gtquiz extends React.Component {
  render() {
    return (
      <Router history={createBrowserHistory}>
        <Route exact path="/" component={Advertise} />
        <Route exact path="/app" component={App} />
      </Router>
    );
  }
}

ReactDOM.render(<Gtquiz />, document.getElementById("root"));
//915 lines
