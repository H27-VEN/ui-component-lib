import React, { Component } from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

class SPTable extends Component {
  createColumns() {
    let cols = [];
    if (this.props.colsName.length > 0) {
      for (let i = 0; i < this.props.colsName.length; i++) {
        cols[i] = <th key={i}>{this.props.colsName[i]}</th>;
      }
    }
    return cols;
  }

  createRows() {
    let rows = [];
    // it will hold data for single row
    let rowData = [];
    // console.log(this.props.data);
    if (this.props.data !== undefined) {
      for (let i = 0; i < this.props.data.length; i++) {
        for (let j = 0; j < this.props.colsName.length; j++) {
          if (this.props.dataComponent[j] !== undefined) {
            rowData[j] = <td key={j}>{this.props.dataComponent[j][i]}</td>;
          } else {
            rowData[j] = <td key={j}>{this.props.data[i][j]}</td>;
          }
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

SPTable.PropTypes = {
  title: PropTypes.string,
  colsName: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.array),
  dataComponent: PropTypes.arrayOf(PropTypes.object)
};

SPTable.defaultProps = {
  title: "Table",
  colsName: [],
  data: [[]],
  dataComponent: [{}]
};

export default SPTable;
