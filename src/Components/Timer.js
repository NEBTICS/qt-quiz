/** @format */

import React, { Component } from "react";
import { Card } from "@material-ui/core";
import "../CSS/timer.css";
// import history from "./history";
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <Card style={{ boxShadow: "none", borderColor: "#202124" }}>
          <div className="timer">
            <div className="timeText">Time Left</div>
            <div className="timeValue">
              {this.props.minutes}:{this.props.seconds}
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
export default Timer;
