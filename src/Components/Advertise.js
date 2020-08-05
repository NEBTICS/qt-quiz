import React from "react";
import { Typography, Button } from "@material-ui/core";

import history from "../history";

import Adnavbar from "./Adnavbar";
import "../CSS/Advertise.css";

class Advertise extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
  }
  handleRegister() {
    history.push("./app");
  }
  render() {
    return (
      <div className="fullpage">
        <Adnavbar />
        <div className="heading">
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            XI-XII Science
          </Typography>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            JEE/NEET/MHT-CET
          </Typography>
        </div>
        <div className="subheading">
          <Typography
            variant="h5"
            style={{ color: "#FFF001", fontWeight: "bold" }}
          >
            MIRA-BHAYANDAR
          </Typography>
          <Typography
            variant="h5"
            style={{ color: "#FFF001", fontWeight: "bold" }}
          >
            Scholarship Admission Test
          </Typography>
        </div>
        <div className="subheading">
          <Typography variant="h6">MB-SAT</Typography>
          <Typography variant="h6">
            From 8th of August to 14th of August{" "}
          </Typography>
        </div>
        <div className="subheading">
          <Typography
            variant="h4"
            style={{ color: "#FFF001", fontWeight: "bold" }}
          >
            Scholarship upto 10Lakh
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="outlined"
            style={{
              background: "#FFF",
              color: "#1d3557",
              fontWeight: "600",
            }}
            onClick={this.handleRegister}
          >
            Register for Free
          </Button>
        </div>
      </div>
    );
  }
}
export default Advertise;
