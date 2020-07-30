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
<<<<<<< HEAD
      login: true,
      details: [],
=======
      login: false,
>>>>>>> d107c88e2a513824b6fdf420f78c4f08cb48e1b1
    };
    this.handleInputChange = this.handleInputChange.bind(this);
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
        />
      </div>
    );
  }
}
export default App;
