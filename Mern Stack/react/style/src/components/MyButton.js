import React, { Component } from "react";

const btnStyle = {
  padding: "12px 15px",
  fontFamily: "Arial, sans-serif",
  fontWeight: "bold",
  background: "linear-gradient(30deg, rebeccapurple, magenta)",
  color: "#fff",
  border: "none",
};

class MyButton extends Component {
  render() {
    return <button style={btnStyle}>{this.props.children}</button>;
  }
}

export default MyButton;
