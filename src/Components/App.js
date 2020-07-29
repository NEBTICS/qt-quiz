import React, { Component } from "react";

import Navbar from "./Navbar"
import MainPage from "./MainPage"
// import history from "./history";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{margin:"0px",height:"100%"}}>
        <Navbar/>
        <MainPage/>
      </div>
    );
  }
}
export default App;
