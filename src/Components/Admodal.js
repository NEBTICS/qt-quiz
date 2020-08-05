import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import "../CSS/Adnavbar.css";

import logo from "../img/logo.png";
import handshaking from "../img/handshaking.png";
import iitians from "../img/iitians02.png";

class Admodal extends React.Component {
  render() {
    return (
      <Dialog
        style={{ background: "#000", opacity: "0.95" }}
        open={this.props.admodal}
        onEntered={this.props.handleAdtimer}
      >
        <DialogTitle style={{ position: "relative", padding: "0px" }}>
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
                // className="navheading"
                style={{
                  color: "#1d3557",
                  fontSize: "24px",
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
                  fontSize: "20px",
                  fontWeight: "800",
                }}
              >
                Tutorials
              </Typography>
            </div>
            <img className="handshaking" src={handshaking} alt="handshaking" />
            <img
              className="iitainslogo"
              style={{ marginTop: "40px" }}
              src={iitians}
              alt="iitians"
            />
          </div>
          <IconButton
            style={{ position: "absolute", top: "1px", right: "1px" }}
            aria-label="close"
            className=""
            onClick={this.props.handleCloseAdmodal}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent style={{ padding: "0px" }}>
          <DialogContentText>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "#1d3557",
              }}
            >
              <Typography
                variant="h5"
                style={{ color: "#e63946", fontWeight: "bold" }}
              >
                Your test starts in..{this.props.adseconds}
              </Typography>

              <div style={{}}>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  XI-XII Science
                </Typography>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  JEE/NEET/MHT-CET
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h5"
                  style={{ color: "#e76f51", fontWeight: "bold" }}
                >
                  MIRA-BHAYANDAR
                </Typography>
                <Typography
                  variant="h5"
                  style={{ color: "#e76f51", fontWeight: "bold" }}
                >
                  Scholarship Admission Test
                </Typography>
              </div>
              <div>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  MB-SAT
                </Typography>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  From 8th of August to 14th of August{" "}
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h4"
                  style={{ color: "#e76f51", fontWeight: "bold" }}
                >
                  Scholarship upto 10Lakh
                </Typography>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  }
}
export default Admodal;
