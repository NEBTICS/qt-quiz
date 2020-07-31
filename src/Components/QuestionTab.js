/** @format */

import React, { Component } from "react";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@material-ui/core";

import "../CSS/questionTab.css";
// import history from "./history";
class QuestionTab extends Component {
  constructor(props) {
    super(props);

    this.handleRadioChange = this.handleRadioChange.bind(this);
  }
  handleRadioChange(e) {
    this.props.handleAnswerChange(e.target.value);
  }
  render() {
    const shuffleQuestions = this.props.ShuffleArray(this.props.question);
    return (
      <div>
        <div className="question">
          {this.props.questionNo + "."}
          {this.props.question.question}
          {this.props.question.question}
          {/* {shuffleQuestions.map((question) => {
            return <Typography variant="h6">{question.question}</Typography>;
          })} */}
        </div>

        <form className="questionForm">
          <FormControl
            component="fieldset"
            // error={error}
            // className={classes.formControl}
          >
            <RadioGroup
              aria-label="quiz"
              name="quiz"
              value={this.props.answer}
              onChange={(e) => {
                this.handleRadioChange(e);
              }}
            >
              {this.props.question.answers.map((ans) => (
                <FormControlLabel
                  value={ans}
                  key={ans}
                  control={<Radio style={{ color: "#6FCF97" }} />}
                  label={ans}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </form>
      </div>
    );
  }
}
export default QuestionTab;
