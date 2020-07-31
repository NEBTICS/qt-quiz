/** @format */

import React, { Component } from "react";

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
      login: false,
      details: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleData = this.handleData.bind(this);
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
    data.push({
      name: this.state.name,
      phone_num: this.state.phone_num,
      email: this.state.email,
      parent_num: this.state.parent_num,
      address: this.state.address,
      gender: this.state.gender,
      marks:mark
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
          login={this.state.login}
          score={this.state.marks}
          detail={this.state.details}
          handleInputChange={this.handleInputChange}
          handleClose={this.handleClose}
          handleData={this.handleData}
        />
      </div>
    );
  }
}
export default App;
