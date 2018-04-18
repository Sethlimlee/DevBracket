import React, { Component } from "react";
import "../Match/Match";
import './winner.css';


class Winner extends Component {
  render() {
    return (
      <div className="match">
        <h3>WINNER</h3>
        <div className="playerwin">
          {<img className="pic" src={this.props.match.player1img} alt="" />}
          {this.props.match.player1name !== "null"
            ? this.props.match.player1name
            : " "}{" "}
        </div>
      </div>
    );
  }
}

export default Winner;
