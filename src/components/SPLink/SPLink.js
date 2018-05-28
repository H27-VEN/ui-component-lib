import React, { Component } from "react";
import PropTypes from "prop-types";
import ExtraPropTypes from "react-extra-prop-types";
import styled from "styled-components";
import "bootstrap-css-only";

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

/** A component to create Hyperlink */
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

SPLink.propTypes = {
  /** pass the complete url you want to navigate to */
  link_href: PropTypes.string.isRequired,
  /** content you want to pass for link(only text string for now) */
  link_content: PropTypes.string.isRequired,
  /** color for unvisited link. CSS color string (rgb(a), hsl(a), hex). Excludes keywords. */
  link_color: ExtraPropTypes.color,
  /** color for hovering link. CSS color string (rgb(a), hsl(a), hex). Excludes keywords.  */
  link_hover_color: ExtraPropTypes.color,
  /** color for active link. CSS color string (rgb(a), hsl(a), hex). Excludes keywords.  */
  link_active_color: ExtraPropTypes.color,
  /** color for visited link. CSS color string (rgb(a), hsl(a), hex). Excludes keywords.  */
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
