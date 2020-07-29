/** @format */

import React, { Component } from "react";

// import { AppBar, Toolbar, Typography } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";

// import logo from "../img/logo.png";
// import history from "./history";

import "../CSS/MainPage.css";
import QuestionTab from "./QuestionTab.js";
import Timer from "./Timer.js";

import {
  Button,
  DialogTitle,
  DialogActions,
  Dialog,
  DialogContent,
  Typography,
} from "@material-ui/core";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 30,
      seconds: 0,
      currentAnswer: 0,
      endQuiz: false,
    };
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
  }
  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }

      if (seconds <= 10) {
        this.setState(({ seconds }) => ({
          seconds: "0" + seconds,
        }));
      }
      if (seconds === "00") {
        if (minutes === 0) {
          clearInterval(this.myInterval);
          this.setState({
            endQuiz: true,
          });
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  handleAnswerChange(ans) {
    this.setState({
      currentAnswer: ans,
    });
  }

  render() {
    return (
      <div className="mainPage">
        <div className="mainText">
          <Typography variant="h6">Scholarship Test</Typography>
        </div>
        <div className="tabs">
          <QuestionTab
            question={{
              question:
                "1.  If x = np.linspace(-pi, pi, 200) and y = np.sin(2x),what is the correct code to plot y v/s x?",
              answers: ["a", "b", "c", "d"],
            }}
            handleAnswerChange={this.handleAnswerChange}
          />
          <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        </div>
        <Dialog
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            opacity: 1.5,
            color: "#202124",
          }}
          open={this.state.endQuiz}
          // handleclose={this.handleClose}
        >
          <DialogTitle
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#EB5757",
              fontWeight: "800",
              paddingBottom: "0",
            }}
          >{
            this.state.minutes===0&&this.state.seconds===0?"All the best for future":"Time's Up..!!"
          }
            
          </DialogTitle>
          <DialogContent
            style={{
              display: "flex",
              justifyContent: "center",
              color:"#6FCF97"
            }}
          >
            <Typography variant="h6">Thanks for participating </Typography>
          </DialogContent>
          <DialogActions
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px 0",
            }}
          >
            <Button
              onClick={this.handleClose}
              style={{ backgroundColor: "#EB5757", color: "white" }}
            >
              End Test
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default MainPage;
