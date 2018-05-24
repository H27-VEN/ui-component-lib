import React, { Component } from "react";
import PropTypes from "prop-types";
import linkedin from "./profile-icons/icons-linkedin.png";
import facebook from "./profile-icons/icons-facebook.png";
import instagram from "./profile-icons/icons-instagram.png";
import "./SPUserIcon.css";

export default class SPUserIcon extends Component {
  getUserAvatar() {
    let icons = { linkedin, facebook, instagram };
    let avatar;
    if (this.props.user_img_src === undefined) {
      avatar = (
        <React.Fragment>
          <span className="account-first-alphabate">
            {this.props.user_name.charAt(0).toUpperCase()}
          </span>
          <i>
            <img
              className="profile-icons profile-icons-no-img"
              src={icons[this.props.profile_type.toLowerCase()]}
              alt="profile-icon"
            />
          </i>
        </React.Fragment>
      );
    } else {
      avatar = (
        <React.Fragment>
          <img
            src={this.props.user_img_src}
            className="img-circle"
            alt="user_avatar"
            width="45px"
            height="45px"
          />
          <i>
            <img
              className="profile-icons profile-icons-img"
              src={icons[this.props.profile_type.toLowerCase()]}
              alt="profile-icon"
            />
          </i>
        </React.Fragment>
      );
    }
    return <React.Fragment>{avatar}</React.Fragment>;
  }

  render() {
    return (
      <div className="user">
        <span className="userAvatar">{this.getUserAvatar()}</span>
      </div>
    );
  }
}

SPUserIcon.PropTypes = {
  user_name: PropTypes.string.isRequired,
  user_img_src: PropTypes.string,
  profile_type: PropTypes.oneOf(
    "facebook",
    "linkedin",
    "instagram",
    "twitter",
    "google_plus",
    "pinterest",
    "tumblr",
    "Vk",
    "Xing"
  ).isRequired
};

SPUserIcon.defaultProps = {
  user_name: "",
  user_img_src: "",
  profile_type: "facebook"
};
