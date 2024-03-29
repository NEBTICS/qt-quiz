/** @format */

import React, { Component } from "react";

// import { AppBar, Toolbar, Typography } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";

// import logo from "../img/logo.png";
// import history from "./history";

import "../CSS/MainPage.css";
import QuestionTab from "./QuestionTab.js";
import Timer from "./Timer.js";
import Login from "./Login";
import Datadetail from "./DataDetail.js";
import Admodal from "./Admodal";

import {
  Button,
  DialogTitle,
  DialogActions,
  Dialog,
  DialogContent,
  Typography,
} from "@material-ui/core";
var questions = [
  {
    id: 0,
    question: "For what value of 't' is X= 2/3 a solution of 7X\u00B2 + tX - 3",
    correctanswer: "-1/6",
    answers: ["-6", "-1/6", "1/6", "6"],
  },
  {
    id: 1,
    question:
      "If PA and PB tangents, From P to a circle with center O. If ∠AOB = 130° deg then find ∠APB ",
    correctanswer: "50°",
    answers: ["40°", "55°", "50°", "60°"],
  },
  {
    id: 2,
    question:
      "If 7th and 13th terms are 34 & 64 respectively, then its 18th term is  ",
    correctanswer: "89",
    answers: ["87", "88", "89", "91"],
  },
  {
    id: 3,
    question:
      "The probability of a leap year selected at random contain 53 sundays is ",
    correctanswer: "53/366",
    answers: ["1/7", "53/366", "2/7", "53/365"],
  },
  {
    id: 4,
    question: "Sin\u00B2 60° + 2Tan\u00B2 45° - cos\u00B2 30°",
    correctanswer: "2",
    answers: ["3", "4", "2", "1"],
  },
  {
    id: 5,
    question: "What is the area of semi-circle of raduis 5cm ?",
    correctanswer: "78.57cm",
    answers: ["78.57cm", "71.42cm", "63.18cm", "79.86cm"],
  },
  {
    id: 6,
    question:
      "If X = a, Y = b is the solution of the pair of equation X - Y = 2 and X + Y = 4 then what will be value of a & b  ",
    correctanswer: "3,1",
    answers: ["2,1", "3,1", "4,6", "1,2"],
  },
  {
    id: 7,
    question:
      "What is the nature of root of quadratic equation 2X\u00B2 + 4X = 5 ",
    correctanswer: "Real & unequal",
    answers: ["Real & equal", "Real & unequal", "Not real"],
  },
  {
    id: 8,
    question:
      "Hypotenuse is 25cm ,and base is 7cm .What is the height of the triangle?",
    correctanswer: "24cm",
    answers: ["20cm", "22cm", "24cm", "21cm"],
  },
  {
    id: 9,
    question: "The given points lies on which quadrant or axis (2,-3) , (0,-4)",
    correctanswer: "IV Quadrant",
    answers: ["I Quadrant", "II Quadrant", "III Quadrant", "IV Quadrant"],
  },
  {
    id: 10,
    question: "Oxidation is a process which involves",
    correctanswer: "Addition of oxygen",
    answers: [
      "Addition of oxygen",
      "Addition of hydrogen",
      "Removal of oxygen",
      "Removal of hydrogen",
    ],
  },
  {
    id: 11,
    question: "Tomato is a natural source of which acid",
    correctanswer: "Citric Acid",
    answers: ["Acetic Acid", "Citric Acid", "Tartaric Acid", "Oxalic Acid"],
  },
  {
    id: 12,
    question: "The poorest conductor of heat among metals is",
    correctanswer: "Lead",
    answers: ["Lead", "Mercury", "Calcium", "Sodium"],
  },
  {
    id: 13,
    question: "Name the functional group present in CH₃COCH₃",
    correctanswer: "Ketone",
    answers: ["Alcohol", "Carboxylic Acid", "Ketone", "Aldehyde"],
  },
  {
    id: 14,
    question: "Newlands relation is called",
    correctanswer: "Law of Octaves",
    answers: [
      "Musical Law",
      "Law of Octaves",
      "Periodic Law",
      "Atomic Mass Law",
    ],
  },
  {
    id: 15,
    question: "Magnifying power of concave lens is ",
    correctanswer: "Always less than 1",
    answers: [
      "Always greater than 1",
      "Always less than 1",
      "Equal to 1",
      "Any Value",
    ],
  },
  {
    id: 16,
    question:
      "The splitting of white light into different colours on passing through a prism is",
    correctanswer: "Dispersion",
    answers: ["Reflection", "Refraction", "Dispersion", "Deviation"],
  },
  {
    id: 17,
    question: "Coulomb is the SI unit of",
    correctanswer: "Charge",
    answers: ["Charge", "Current", "Potential Difference", "Resistance"],
  },
  {
    id: 18,
    question: "The magnetic field is strongest at  ",
    correctanswer: "North Pole",
    answers: ["Middle of Magnet", "North Pole", "South Pole", "Both Pole"],
  },
  {
    id: 19,
    question: "The variety of coal which has highest (coal) carbon content ",
    correctanswer: "Anthracite",
    answers: ["Anthracite", "Peat", "Bituminous", "Lignite"],
  },
];
function shuffle(array) {
  array.sort(() => {
    return 0.5 - Math.random();
  });
}

shuffle(questions);
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 30,
      seconds: 0,
      adseconds: 5,
      currentAnswer: "",
      questionNo: 1,
      currentquestionid: 0,
      marks: 0,
      answers: [],
      endQuiz: false,
      admin: false,
      admodal: false,
    };
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleResetTimer = this.handleResetTimer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleScore = this.handleScore.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseAdmodal = this.handleCloseAdmodal.bind(this);
    this.handleAdtimer = this.handleAdtimer.bind(this);
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

  handleResetTimer() {
    this.setState({
      minutes: 30,
      seconds: 0,
      admodal: true,
    });
    this.props.handleClose();
    // return questions;
  }
  handleCloseAdmodal() {
    this.handleResetTimer();
    this.setState({
      admodal: false,
      adseconds: 0,
    });
  }
  handleAdtimer() {
    this.myInterval1 = setInterval(() => {
      const { adseconds } = this.state;
      if (adseconds > 0) {
        this.setState(({ adseconds }) => ({
          adseconds: adseconds - 1,
        }));
      }

      if (adseconds === 0) {
        this.handleResetTimer();
        this.setState({
          admodal: false,
          adseconds: adseconds - 1,
          seconds: 0,
          minutes: 30,
        });
      }
    }, 1000);
  }

  handleAnswerChange(ans) {
    this.setState({
      currentAnswer: ans,
    });
  }

  handleScore() {
    var totalMarks = this.state.answers.filter((ans) => ans.status === true)
      .length;
    this.setState({
      marks: totalMarks,
    });
    this.props.handleSendData(totalMarks);
    console.log(this.state.answers.filter((ans) => ans.status === true).length);
  }

  handleNext() {
    var answer = this.state.answers;
    let idx = answer.findIndex(
      (ans) => ans.questionid === questions[this.state.currentquestionid].id
    );
    var ans = {
      selectedAns: this.state.currentAnswer,
      questionid: questions[this.state.currentquestionid].id,
      correctans: questions[this.state.currentquestionid].correctanswer,
      status:
        this.state.currentAnswer ===
        questions[this.state.currentquestionid].correctanswer,
    };
    if (idx >= 0) {
      answer[idx] = ans;
    } else {
      answer.push(ans);
    }
    this.setState({
      currentquestionid: this.state.currentquestionid + 1,
      currentAnswer: "",
      answers: answer,
      questionNo: this.state.questionNo + 1,
    });
  }

  handlePrevious() {
    this.setState({
      currentquestionid: this.state.currentquestionid - 1,
      currentAnswer: "",
      questionNo: this.state.questionNo - 1,
    });
  }
  handleSubmit(e) {
    if (this.state.currentAnswer === "") {
      alert("Please select one of the option");
    } else {
      var ans = this.state.answers;
      ans.push({
        selectedAns: this.state.currentAnswer,
        questionid: questions[this.state.currentquestionid].id,
        correctans: questions[this.state.currentquestionid].correctanswer,
        status:
          this.state.currentAnswer ===
          questions[this.state.currentquestionid].correctanswer,
      });
      this.handleScore();

      this.setState({
        endQuiz: true,
      });
    }
  }

  handleClose() {
    this.props.handleData({ marks: this.state.marks });
  }
  render() {
    return (
      <div className="mainPage">
        <div style={{ display: `${this.state.admin ? "none" : "block"}` }}>
          <div className="joinText">
            <Typography
              variant="h6"
              style={{ fontSize: "16px", fontWeight: "700" }}
            >
              Join GET Tutorials for XI-XII, JEE, NEET and MHT-CET
            </Typography>
          </div>
          <div className="mainText">
            <Typography
              variant="h6"
              style={{ fontSize: "20px", fontWeight: "700" }}
            >
              Mira-Bhayandar Scholarship Admission Test
            </Typography>
          </div>
          <div className="tabs">
            <QuestionTab
              questionNo={this.state.questionNo}
              question={questions[this.state.currentquestionid]}
              handleAnswerChange={this.handleAnswerChange}
            />
            <Timer
              style={{ marginRight: "20px" }}
              minutes={this.state.minutes}
              seconds={this.state.seconds}
            />
          </div>
          <Dialog
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.95)",
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
            >
              <div style={{ fontWeight: "700", fontSize: "32px" }}>
                {this.state.minutes === 0 && this.state.seconds === "000"
                  ? "Time's Up..!!"
                  : "Well Done..!!"}{" "}
              </div>
            </DialogTitle>{" "}
            <DialogContent
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#6FCF97",
              }}
            >
              <Typography
                variant="h6"
                style={{ fontWeight: "bolder", fontSize: "22px" }}
              >
                {" "}
                Thanks for participating{" "}
              </Typography>{" "}
            </DialogContent>{" "}
            <DialogActions
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "20px 0",
              }}
            >
              <Button
                onClick={this.handleClose}
                style={{
                  backgroundColor: "#EB5757",
                  color: "white",
                  display: "none",
                }}
              >
                End Test{" "}
              </Button>{" "}
            </DialogActions>{" "}
          </Dialog>
          {this.state.currentquestionid === 19 ? (
            <div
              style={{
                float: "right",
                display: "flex",
              }}
            >
              <Button
                style={{
                  background: "#EB5757",
                  color: "#fff",
                  margin: "0 20px",
                }}
                variant="contained"
                onClick={(e) => this.handlePrevious(e)}
                value="Previous"
              >
                Previous{" "}
              </Button>
              <Button
                style={{ background: "#6FCF97", color: "#fff" }}
                variant="contained"
                onClick={this.handleSubmit}
              >
                Submit{" "}
              </Button>
            </div>
          ) : (
            <div
              style={{
                marginTop: "100px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                style={{
                  background: "#EB5757",
                  color: "#fff",
                  display: `${this.state.questionNo === 1 ? "none" : "block"}`,
                }}
                variant="contained"
                onClick={(e) => this.handlePrevious(e)}
                value="Previous"
              >
                Previous{" "}
              </Button>{" "}
              <Button
                style={{
                  float: "right",
                  background: "#6FCF97",
                  margin: "0 80px 0 20px",
                  color: "#fff",
                }}
                variant="contained"
                onClick={(e) => this.handleNext(e)}
                value="next"
              >
                Next{" "}
              </Button>{" "}
            </div>
          )}{" "}
          <Admodal
            admodal={this.state.admodal}
            handleCloseAdmodal={this.handleCloseAdmodal}
            handleAdtimer={this.handleAdtimer}
            adseconds={this.state.adseconds}
          />
          <Login
            name={this.props.name}
            email={this.props.email}
            phone_num={this.props.phone_num}
            parent_num={this.props.parent_num}
            address={this.props.address}
            gender={this.props.gender}
            login={this.props.login}
            handleInputChange={this.props.handleInputChange}
            handleClose={this.handleResetTimer}
          />{" "}
        </div>{" "}
        <div style={{ display: `${!this.state.admin ? "none" : "block"}` }}>
          <Datadetail />
        </div>{" "}
      </div>
    );
  }
}
export default MainPage;
