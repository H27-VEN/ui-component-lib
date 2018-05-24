import React, { Component } from "react";
import PropTypes from "prop-types";
import ExtraPropTypes from "react-extra-prop-types";
import styled from "styled-components";

class SPLink extends Component {
  render() {
    return (
      <Link
        href={this.props.link_href}
        link_color={this.props.link_color}
        link_hover_color={this.props.link_hover_color}
        link_active_color={this.props.link_active_color}
        link_visited_color={this.props.link_visited_color}
      >
        {this.props.link_content}
      </Link>
    );
  }
}

const Link = styled.a`
  display: inline-block;
  font-size: 1em;
  padding: 0.25em 1em;

  ${Link}:link {
    color: ${props => props.link_color};
  }

  ${Link}:hover {
    color: ${props => props.link_hover_color};
  }

  ${Link}:active {
    color: ${props => props.link_active_color};
  }

  ${Link}:visited {
    color: ${props => props.link_visited_color};
  }
`;

SPLink.PropTypes = {
  link_href: PropTypes.string.isRequired,
  link_content: PropTypes.string.isRequired,
  link_color: ExtraPropTypes.color,
  link_hover_color: ExtraPropTypes.color,
  link_active_color: ExtraPropTypes.color,
  link_visited_color: ExtraPropTypes.color
};

SPLink.defaultProps = {
  link_href: "https://www.socialpilot.co/",
  link_content: "SocialPilot",
  link_color: "#0000FF",
  link_hover_color: "#800080",
  link_active_color: "#551A8B",
  link_visited_color: "#800080"
};

export default SPLink;
