import React, { Component } from "react";
import styled from "styled-components";

class SPLink extends Component {
  render() {
    const link_href = this.props.link_href || "https://www.socialpilot.co/";
    const link_content = this.props.link_content || "SocialPilot";
    return <a href={this.props.link_href}>{this.props.link_content}</a>;
  }
}

// SPLink = styled.a`
//   display: inline-block;
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

export default SPLink;
