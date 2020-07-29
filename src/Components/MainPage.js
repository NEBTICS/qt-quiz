/** @format */

import React, { Component } from "react";

// import { AppBar, Toolbar, Typography } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";

// import logo from "../img/logo.png";
// import history from "./history";

import "../CSS/MainPage.css";
import QuestionTab from "./QuestionTab.js";
import Timer from "./Timer.js";
import { Typography, Button } from "@material-ui/core";

var questions = [
  {
    id: 0,
    question: "vchdvwciw",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
  },
  {
    id: 1,
    question: "vchdvwciw",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
  },
  {
    id: 2,
    question: "vchdvwciw",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
  },
  {
    id: 3,
    question: "vchdvwciw",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
  },
  {
    id: 3,
    question: "vchdvwciw",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
  },
  {
    id: 4,
    question: "smeet",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
  },
  {
    id: 5,
    question: "vchdvwciw",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
  },
  {
    id: 6,
    question: "vchdvwciw",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
  },
  {
    id: 7,
    question: "vchdvwciw",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
  },
  {
    id: 8,
    question: "vchdvwciw",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
  },
  {
    id: 9,
    question: "vchdvwciw",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
  },
  {
    id: 10,
    question: "vchdvwciw",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
  },
  {
    id: 11,
    question: "vchdvwciw",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
  },
  {
    id: 12,
    question: "vchdvwciw",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
  },
  {
    id: 13,
    question: "vchdvwciw",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
  },
  {
    id: 14,
    question: "vchdvwciw",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
  },
  {
    id: 15,
    question: "vchdvwciw",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
  },
  {
    id: 16,
    question: "vchdvwciw",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
  },
  {
    id: 17,
    question: "vchdvwciw",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
  },
  {
    id: 18,
    question: "vchdvwciw",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
  },
  {
    id: 19,
    question: "vchdvwciw",
    correctanswer: "a",
    answers: ["a", "b", "c", "d"],
    endquiz: false,
  },
];

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 30,
      seconds: 0,
      currentAnswer: "",
      currentquestionid: 0,
      answers: [],
      endQuiz: false,
    };
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
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
  handleNext(e) {
    console.log(e.currentTarget.value);
    if (e.currentTarget.value === "next" && this.state.currentAnswer === "") {
      alert("Please select one of the option");
    } else {
      var ans = this.state.answers;
      ans.push({
        ans: this.state.currentAnswer,
        questionid: this.state.currentquestionid,
      });
      this.setState({
        currentquestionid: (this.state.currentquestionid += 1),
      });
      console.log(ans);
    }
  }
  handleSubmit() {
    console.log("Submit btn was pressed");
    this.setState({
      endQuiz: !this.state.endQuiz,
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
            question={questions[this.state.currentquestionid]}
            handleAnswerChange={this.handleAnswerChange}
          />
          <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        </div>
        {this.state.currentquestionid == 19 ? (
          <Button
            style={{ float: "right", background: "#6FCF97", color: "#fff" }}
            variant="contained"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        ) : (
          <div
            style={{
              marginTop: "100px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              style={{ background: "#EB5757", color: "#fff" }}
              variant="contained"
              onClick={(e) => this.handleNext(e)}
              value="skip"
            >
              Skip
            </Button>
            <Button
              style={{
                float: "right",
                background: "#6FCF97",
                margin: "0 0 0 20px",
                color: "#fff",
              }}
              variant="contained"
              onClick={(e) => this.handleNext(e)}
              value="next"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    );
  }
}
export default MainPage;
