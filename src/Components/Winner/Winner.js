import React, { Component } from "react";
import "../Match/Match";
import './winner.css';
import { Link } from "react-router-dom";


class Winner extends Component {
  render() {
    return (
      <div className="match">
        <h3>WINNER</h3>
        <div className="playerwin">
          {<img className="pic" src={this.props.match.player1img} alt="" />}
          {this.props.match.player1name !== "null"
            ?
            <Link className ='rankinglinks' key={this.props.match.player1} to={`/profile/${this.props.match.player1}`}>
            {this.props.match.player1name}
            </Link>
            : " "}{" "}
        </div>
      </div>
    );
  }
}

export default Winner;
