import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class SPTable extends Component {
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
    let rowDataObjBundle = [];
    console.log(this.props.data);
    if (this.props.data !== undefined) {
      for (let i = 0; i < this.props.data.length; i++) {
        for (let j = 0; j < this.props.colsName.length; j++) {
          /* dataComponent is an array which hold component for a specific col having data for each row  
             And if a single column holds multiple component than you should pass it as an object
          */
          if (this.props.dataComponent[j] !== undefined) {
            if (typeof this.props.dataComponent[j] === "object") {
              for (let objProp in this.props.dataComponent[j]) {
                rowDataObjBundle.push(
                  <span>{this.props.dataComponent[j][objProp]}</span>
                );
              }
              rowData[j] = <td key={j}>{rowDataObjBundle}</td>;
            } else {
              rowData[j] = <td key={j}>{this.props.dataComponent[j][i]}</td>;
            }
          } else {
            /* if no dataComponent is defined then just put normal data in the column */
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
