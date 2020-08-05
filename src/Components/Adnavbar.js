import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import logo from "../img/logo.png";
import iitians from "../img/iitians.png";
import handshaking from "../img/handshaking.png";

import "../CSS/Adnavbar.css";

class ADnavbar extends React.Component {
  render() {
    return (
      <AppBar position="static" style={{ background: "#FFF001" }}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img className="gtlogo" src={logo} alt="logo" />
            </div>
            <div>
              <Typography
                variant="h4"
                style={{
                  color: "#1d3557",
                  fontSize: "36px",
                  fontWeight: "800",
                  paddingTop: "20px",
                }}
              >
                GET
              </Typography>
              <Typography
                variant="h5"
                style={{
                  color: "#1d3557",
                  fontSize: "36px",
                  fontWeight: "800",
                }}
              >
                Tutorials
              </Typography>
            </div>
          </div>
          <img className="handshaking" src={handshaking} alt="handshaking" />
          <img className="iitainslogo" src={iitians} alt="iitians" />
        </Toolbar>
      </AppBar>
    );
  }
}
export default ADnavbar;
