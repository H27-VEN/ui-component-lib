import React, { Component } from "react";
import SPTable from "./sp-components/sp-table/SPTable";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SPTable
          title="Demo Table"
          cols="3"
          colsName={["Account Name", "Queued", "Errors"]}
          data={[
            {
              "Account Name": {
                data_type: user_icon,
                data_content: "imawebdev"
              }
            },
            { Queued: { data_type: number, data_content: 0 } },
            { Errors: { data_type: number, data_content: 5 } }
          ]}
        />
      </div>
    );
  }
}

export default App;
