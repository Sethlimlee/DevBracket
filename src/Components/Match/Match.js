import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/users";
import "./match.css";
import axios from "axios";

class Match extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
  }

  componentDidMount() {
    this.props.getUserInfo();
  }

  handleWin(winner, winnerName, loser) {
    this.props.handleWin(
      winner,
      winnerName,
      loser,
      this.props.match.match,
      this.props.match.bracketid,
      this.props.match.roundid,
      this.props.match.sport
    );
    axios
      .post("/api/button", {
        match: this.props.match.match,
        bracketid: this.props.match.bracketid,
        roundid: this.props.match.roundid
      })
      .then(response => {
        this.setState({
          show: true
        });
      });
  }

  render() {
    return (
      <div className="match">
        {this.props.user.id === this.props.match.player1 ||
        this.props.user.id === this.props.match.player2 ? (
          <div>
            <div>
              Name:{" "}
              {this.props.match.player1name !== "null"
                ? this.props.match.player1name
                : " "}{" "}
              {this.props.match.button !== "no" &&
              this.props.match.player1name !== null &&
              this.props.match.player2name !== null ? (
                <button
                  id="button"
                  onClick={() => {
                    this.handleWin(
                      this.props.match.player1,
                      this.props.match.player1name,
                      this.props.match.player2
                    );
                  }}
                >
                  {" "}
                  Win{" "}
                </button>
              ) : (
                ""
              )}
            </div>
            <div>VS.</div>
            <div>
              Name:{" "}
              {this.props.match.player2name !== "null"
                ? this.props.match.player2name
                : " "}{" "}
              {this.props.match.button !== "no" &&
              this.props.match.player1name !== null &&
              this.props.match.player2name !== null ? (
                <button
                  id="button"
                  onClick={() => {
                    this.handleWin(
                      this.props.match.player2,
                      this.props.match.player2name,
                      this.props.match.player1
                    );
                  }}
                >
                  {" "}
                  Win{" "}
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          <div>
            <div>
              Name:{" "}
              {this.props.match.player1name !== "null"
                ? this.props.match.player1name
                : " "}{" "}
            </div>
            <div>VS.</div>
            <div>
              Name:{" "}
              {this.props.match.player2name !== "null"
                ? this.props.match.player2name
                : " "}{" "}
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { getUserInfo })(Match);
