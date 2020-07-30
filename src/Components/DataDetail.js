/** @format */

import React, { Component } from "react";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@material-ui/core';
// import "../CSS/DataDetail.css";
// import history from "./history";
class DataDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }
  render() {
    return (
      <div>
      <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell align="center">E-mail</TableCell>
            <TableCell align="center">Phone Number</TableCell>
            <TableCell align="center">Parent Number</TableCell>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Marks</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow >
        <TableCell component="th" scope="row">
        Sarvesh
        </TableCell>
        <TableCell align="center">sckargutkar@gmail.com</TableCell>
        <TableCell align="center">9967492089</TableCell>
        <TableCell align="center">9967492089</TableCell>
        <TableCell align="center">Mira Road</TableCell>
        <TableCell align="center">Male</TableCell>
        <TableCell align="center">20/20</TableCell>


      </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    );
  }
}
export default DataDetail;
