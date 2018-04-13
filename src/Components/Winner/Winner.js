import React, { Component } from "react";
import "../Match/Match";

class Winner extends Component {
  

  render() {
    return (
      <div className="match">
      <h3>WINNER</h3>
        <div>
          Name:{" "}
          {this.props.match.player1name !== "null"
            ? this.props.match.player1name
            : " "}{" "}
        </div>
      </div>
    );
  }
}

export default Winner;