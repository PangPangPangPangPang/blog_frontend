/**
 * Created by Max on 02/03/2017.
 */
// navigator height 48px

import React from "react";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "./navigator/header";
import "./navigator/header.css";
import "./navigator.css";
import Rss from "../compontent/rss";

class Navigator extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.Object,
    };
  }

  static defaultProps = {
    children: {},
  };

  state = {
    current: "mail",
  };

  handleClick = (e) => {
    switch (e.key) {
      case "smile":
        navigate("about");
        break;
      case "home":
        navigate("home");
        break;
      case "article":
        navigate("list");
        break;
      case "tag":
        navigate("tag");
        break;
      default:
        break;
    }
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div className="navigator">
        <Header />
        <div className="header-placeholder" />
        {this.props.children}
        <Rss />
      </div>
    );
  }
}

export default connect()(Navigator);
