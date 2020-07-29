/** @format */

import React, { Component } from "react";

import Navbar from "./Navbar";
import MainPage from "./MainPage";
import Login from "./Login";
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
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(value) {
    this.setState({
      [value.name]: value.value,
    });
  }
  render() {
    return (
      <div style={{ margin: "0px", height: "100%" }}>
        <Navbar />
        <MainPage />
        <Login
          name={this.state.name}
          email={this.state.email}
          phone_num={this.state.phone_num}
          parent_num={this.state.parent_num}
          address={this.state.address}
          gender={this.state.gender}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}
export default App;
