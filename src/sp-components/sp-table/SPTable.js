import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class SPTable extends Component {
  createColumns() {
    let cols = [];
    if (this.props.cols !== undefined) {
      for (let i = 0; i < this.props.cols; i++) {
        cols[i] = <th key={i}>{this.props.colsName[i]}</th>;
      }
    }
    return cols;
  }

  createRows() {
    let rows = [];
    let rowData = [];
    console.log(this.props.data);
    if (this.props.data !== undefined) {
      for (let i = 0; i < this.props.data.length; i++) {
        for (let j = 0; j < this.props.cols; j++) {
          rowData[j] = <td key={j}>{this.props.data[i][j]}</td>;
        }
        rows[i] = <tr key={i}>{rowData}</tr>;
        rowData = [];
      }
    }
    return rows;
  }

  render() {
    return (
      <React.Fragment>
        <Table responsive striped bordered>
          <caption>{this.props.title}</caption>
          <thead>
            <tr>{this.createColumns()}</tr>
          </thead>
          <tbody>{this.createRows()}</tbody>
        </Table>
      </React.Fragment>
    );
  }
}
