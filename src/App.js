import React, { Component } from "react";
import SPTable from "./sp-components/sp-table/SPTable";
import SPUserIcon from "./sp-components/sp-user-icon/SPUserIcon";
import SPLink from "./sp-components/sp-link/SPLink";

import pro_pic from "./pro_pic.jpeg";
import "./App.css";

class App extends Component {
  render() {
    const UserIcon = [
      <SPUserIcon
        user_name="imawebdev"
        profile_type="linkedin"
        user_img_src={pro_pic}
      />,
      <SPUserIcon user_name="dummy1" profile_type="facebook" />,
      <SPUserIcon user_name="dummy2" profile_type="instagram" />
    ];

    const UserName = [
      <SPLink
        link_href={"https://www.linkedin.com"}
        link_content={"imawebdev"}
      />,
      <SPLink link_href={"https://www.facebook.com"} link_content={"dummy1"} />,
      <SPLink link_href={"https://www.instagram.com"} link_content={"dummy2"} />
    ];

    return (
      <div className="App">
        <SPLink link_href={"https://www.google.com"} link_content={"google"} />
        <SPTable
          title="Demo Table"
          colsName={["Account Name", "Queued", "Errors"]}
          data={[["imawebdev", 5, 0], ["dummy1", 4, 3], ["dummy2", 4, 0]]}
          dataComponent={[{ user_icon: UserIcon, user_name: UserName }]}
        />
      </div>
    );
  }
}

export default App;
