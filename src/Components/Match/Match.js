import React, { Component } from "react";
import "./match.css";
import axios from "axios";
import { SteppedLineTo } from "react-lineto";
import swal from 'sweetalert2'
import { Link } from "react-router-dom";

class Match extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
  }

  handleWin(winner, winnerName, loser, winnerImg) {
    axios
      .post("/api/button", {
        match: this.props.match.match,
        bracketid: this.props.match.bracketid,
        roundid: this.props.match.roundid
      })
      .then(response => {
        this.props.handleWin(
          winner,
          winnerName,
          loser,
          winnerImg,
          this.props.match.match,
          this.props.match.bracketid,
          this.props.match.roundid,
          this.props.match.sport
        );
      });
  }

  render() {
    return (
      <div className={`${this.props.match.id} match`}>
        {this.props.id === this.props.match.player1 ||
        this.props.id === this.props.match.player2 ? (
          <div>
            <div className="player">
              {<img className="pic" src={this.props.match.player1img} alt="" />}
              {this.props.match.player1name !== "null"
                ? 
                <Link className ='rankinglinks' key={this.props.match.player1} to={`/profile/${this.props.match.player1}`}>
                {this.props.match.player1name}
                </Link>
                : " "}{" "}
              {this.props.match.button !== "no" &&
              this.props.match.player1name !== null &&
              this.props.match.player2name !== null ? (
                <p
                  className="checks"
                  id="button"
                  onClick={() =>
                    swal({
                      title: "Are you sure?",
                      text: "You won't be able to revert this!",
                      type: "warning",
                      typeColor: "#2aabe2",
                      showCancelButton: true,
                      confirmButtonColor: "#2aabe2",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes!"
                    }).then(result => {
                      if (result.value) {
                        this.handleWin(
                          this.props.match.player1,
                          this.props.match.player1name,
                          this.props.match.player2,
                          this.props.match.player1img
                        );
                        swal(
                          "Done!",
                          "The Bracket Has Been Updated",
                          "success"
                        );
                      }
                    })
                  }
                >
                  {" "}
                  ✔{" "}
                </p>
              ) : (
                ""
              )}
            </div>
            <div>VS.</div>
            <div className="player">
              {<img className="pic" src={this.props.match.player2img} alt="" />}
              {this.props.match.player2name !== "null"
                ? 
                <Link className ='rankinglinks' key={this.props.match.player2} to={`/profile/${this.props.match.player2}`}>
                {this.props.match.player2name}
                </Link>
                : " "}{" "}
              {this.props.match.button !== "no" &&
              this.props.match.player1name !== null &&
              this.props.match.player2name !== null ? (
                <p
                  className="checks"
                  id="button"
                  onClick={() =>
                    swal({
                      title: "Are you sure?",
                      text: "You won't be able to revert this!",
                      type: "warning",
                      typeColor: "#2aabe2",
                      showCancelButton: true,
                      confirmButtonColor: "#2aabe2",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes!"
                    }).then(result => {
                      if (result.value) {
                        this.handleWin(
                          this.props.match.player2,
                          this.props.match.player2name,
                          this.props.match.player1,
                          this.props.match.player2img
                        );
                        swal(
                          "Done!",
                          "The Bracket Has Been Updated",
                          "success"
                        );
                      }
                    })
                  }
                >
                  {" "}
                  ✔{" "}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          <div>
            <div className="player">
              {<img className="pic" src={this.props.match.player1img} alt="" />}
              {this.props.match.player1name !== "null"
                ? 
                <Link className ='rankinglinks' key={this.props.match.player1} to={`/profile/${this.props.match.player1}`}>
                {this.props.match.player1name}
                </Link>
                : " "}{" "}
            </div>
            <div>VS.</div>
            <div className="player">
              {<img className="pic" src={this.props.match.player2img} alt="" />}
              {this.props.match.player2name !== "null"
                ? 
                <Link className ='rankinglinks' key={this.props.match.player2} to={`/profile/${this.props.match.player2}`}>
                {this.props.match.player2name}
                </Link>
                : " "}{" "}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Match;
