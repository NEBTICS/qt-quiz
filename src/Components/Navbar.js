/** @format */

import React, { Component } from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";

import logo from "../img/logo.png";

import "../CSS/navbar.css";

// import history from "./history";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <AppBar
          position="static"
          style={{
            backgroundColor: "#fff",
            color: "#FF654A",
            fontStyle: "italics",
          }}
        >
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0 ",
              padding: "0 20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={logo}
                alt="logo"
                width="50px"
                style={{ margin: "0 20px 0 0" }}
              />
              <Typography variant="h6" style={{ fontWeight: "800" }}>
                GET Tutorials
              </Typography>
            </div>
            <div className="subHeading">
              <Typography variant="h6" style={{ fontWeight: "600" }}>
                ...Join GET Tutorials for XI-XII, JEE, NEET and MHT-CET
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default Navbar;
