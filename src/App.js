import React, { Component } from "react";
import SPTable from "./sp-components/sp-table/SPTable";
import SPUserIcon from "./sp-components/sp-user-icon/SPUserIcon";
import SPLink from "./sp-components/sp-link/SPLink";
import pro_pic from "./pro_pic.jpeg";
import "./App.css";

class App extends Component {
  render() {
    /* Here I am assembling the components that I made in sp-components 
    * Passing array of resuable components to a table
    * SPUserIcon shows user avatar (if they provided their profile_pic or round first letter avatar otherwise) alongside their profile type icon.
    * SPLink is a component for creating hyperlink
    * Go In the components respective folder for detailed info
    */
    const User = [
      <React.Fragment>
        <span className="userinfo">
          <SPUserIcon user_name={"dummy1"} profile_type={"facebook"} />
        </span>
        <span className="userinfo">
          <SPLink
            link_href={"https://www.facebook.com"}
            link_content={"dummy1"}
          />
        </span>
      </React.Fragment>,

      <React.Fragment>
        <span className="userinfo">
          <SPUserIcon user_name={"dummy2"} profile_type={"instagram"} />
        </span>
        <span className="userinfo">
          <SPLink
            link_href={"https://www.instagram.com"}
            link_content={"dummy2"}
          />
        </span>
      </React.Fragment>,

      <React.Fragment>
        <span className="userinfo">
          <SPUserIcon
            user_name="imawebdev"
            profile_type="linkedin"
            user_img_src={pro_pic}
          />,
        </span>
        <span className="userinfo">
          <SPLink
            link_href={"https://www.linkedin.com"}
            link_content={"imawebdev"}
          />
        </span>
      </React.Fragment>
    ];

    /* Passing array of resuable components */

    return (
      <div className="App">
        <SPTable
          title="Demo Table"
          colsName={["Account Name", "Queued", "Errors"]}
          data={[["imawebdev", 5, 0], ["dummy1", 4, 3], ["dummy2", 4, 0]]}
          dataComponent={[User]}
        />
      </div>
    );
  }
}

export default App;
