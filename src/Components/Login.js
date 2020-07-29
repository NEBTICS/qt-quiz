/** @format */

import React from "react";
import "../CSS/login.css";
import {Button,DialogTitle,TextField,DialogActions,Dialog,DialogContent} from "@material-ui/core";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleClose = () => {
    if (
      !this.props.name ||
      !this.props.phone_num ||
      !this.props.name ||
      !this.props.address ||
      !this.props.gender
    ) {
      alert("please fill all the details");
    } else {
      this.setState({
        open: false,
      });
    }
  };
  handleInputChange(e) {
    this.props.handleInputChange({
      name: e.target.name,
      value: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Dialog
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            opacity: 1.5,
            color: "#202124",
          }}
          open={this.state.open}
          handleclose={this.handleClose}
        >
          <DialogTitle
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#6FCF97",
              fontWeight: "800",
              paddingBottom: "0",
            }}
          >
            Enter details for test
          </DialogTitle>
          <DialogContent
            style={{
              maxWidth: "700px",
              height: "300px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: " space-evenly",
                minHeight: "250px",
              }}
            >
              <TextField
                variant="outlined"
                label="Name"
                value={this.props.name}
                name="name"
                onChange={(e) => {
                  this.handleInputChange(e);
                }}
              />
              <TextField
                variant="outlined"
                label="Phone no"
                value={this.props.phone_num}
                name="phone_num"
                onChange={(e) => {
                  this.handleInputChange(e);
                }}
              />
              <TextField
                variant="outlined"
                label="Address"
                value={this.props.address}
                onChange={(e) => {
                  this.handleInputChange(e);
                }}
                name="address"
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: " space-evenly",
                minHeight: "250px",
              }}
            >
              <TextField
                variant="outlined"
                label="Email"
                value={this.props.email}
                onChange={(e) => {
                  this.handleInputChange(e);
                }}
                name="email"
              />
              <TextField
                variant="outlined"
                label="Parent's phone no"
                value={this.props.parent_num}
                onChange={(e) => {
                  this.handleInputChange(e);
                }}
                name="parent_num"
              />
              <TextField
                variant="outlined"
                label="Gender"
                value={this.props.gender}
                onChange={(e) => {
                  this.handleInputChange(e);
                }}
                name="gender"
              />
            </div>
          </DialogContent>
          <DialogActions
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px 0",
            }}
          >
            <Button
              onClick={this.handleClose}
              style={{ backgroundColor: "#6FCF97", color: "white" }}
            >
              Start Test
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Form;
