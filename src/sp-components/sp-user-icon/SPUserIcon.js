import React, { Component } from "react";
import linkedin from "./profile-icons/icons-linkedin";
import facebook from "./profile-icons/icons-facebook";
import instagram from "./profile-icons/icons-instagram";
import "./SPUserIcon.css";

class SPUserIcon extends Component {
  getUserAvatar() {
    let icons = { linkedin, facebook, instagram };
    let userFirstLetter = this.props.user_name.charAt(0).toUpperCase();
    return (
      <React.Fragment>
        <span className="account-first-alphabate">{userFirstLetter}</span>
        <img src={icons[this.props.profile_type.toLowerCase()]} />
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="user">
        <span>{this.getUserAvatar()}</span>
        <span>{this.props.user_name}</span>
      </div>
    );
  }
}
