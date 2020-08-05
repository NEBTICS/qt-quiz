/** @format */

import React, { Component } from "react";

import emailjs from "emailjs-com";

import Navbar from "./Navbar";
import MainPage from "./MainPage";

// import history from "./history";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone_num: "",
      parent_num: "",
      address: "",
      gender: "",
      login: true,
      details: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleSendData = this.handleSendData.bind(this);
  }

  handleInputChange(value) {
    this.setState({
      [value.name]: value.value,
    });
  }
  handleClose = () => {
    if (
      !this.state.name ||
      !this.state.phone_num ||
      !this.state.name ||
      !this.state.address ||
      !this.state.gender
    ) {
      alert("please fill all the details");
    } else {
      this.setState({
        login: false,
      });
    }
  };

  handleData(mark) {
    var data = this.state.details;
    data = {
      name: this.state.name,
      phone_num: this.state.phone_num,
      email: this.state.email,
      parent_num: this.state.parent_num,
      address: this.state.address,
      gender: this.state.gender,
      marks: mark,
    };
    this.setState({
      details: data,
    });
  }
  handleSendData(mark) {
    let templateParams = {
      name: this.state.name,
      phone_num: this.state.phone_num,
      email: this.state.email,
      parent_num: this.state.parent_num,
      address: this.state.address,
      gender: this.state.gender,
      marks: mark,
    };
    emailjs
      .send("gmail", "gt_quiz", templateParams, "user_1Tx080BdBbgp30iC4UKeo")
      .then((res) => {
        console.log("Email successfully sent!", templateParams.name);
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) => {
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        );
        alert("Something went wrong ,Can you retake the test again");
      });
  }
  render() {
    return (
      <div style={{ margin: "0px", height: "100%" }}>
        <Navbar />
        <MainPage
          name={this.state.name}
          email={this.state.email}
          phone_num={this.state.phone_num}
          parent_num={this.state.parent_num}
          address={this.state.address}
          gender={this.state.gender}
          admodal={this.state.admodal}
          handleCloseAdmodal={this.handleCloseAdmodal}
          login={this.state.login}
          score={this.state.marks}
          detail={this.state.details}
          handleInputChange={this.handleInputChange}
          handleClose={this.handleClose}
          handleData={this.handleData}
          handleSendData={this.handleSendData}
        />
      </div>
    );
  }
}
export default App;
