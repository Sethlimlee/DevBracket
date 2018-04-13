import React, {Component} from "react";
import "./match.css";
import axios from 'axios';

class Match extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
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
    axios.post('/api/button', {match: this.props.match.match, bracketid: this.props.match.bracketid, roundid: this.props.match.roundid})
    .then(response => {
      this.setState({
        show: true
      })
    })
  }

  render() {
    return (
      <div className="match">
        <div>
          Name: {(this.props.match.player1name !== 'null') ? this.props.match.player1name : ' '}{" "}
          {
            this.props.match.button !== 'no' 
            ? 
            <button
              id="button"
              onClick={() => {
                this.handleWin(this.props.match.player1, this.props.match.player1name, this.props.match.player2);
              }}
              >
              {" "}
              Win{" "}
            </button>
            : ''
          }
        </div>
        <div>VS.</div>
        <div>
          Name: {(this.props.match.player2name !== 'null') ? this.props.match.player2name : ' '}{" "}
          {
            this.props.match.button !== 'no' 
            ? 
            <button
              id="button"
              onClick={() => {
                this.handleWin(this.props.match.player2, this.props.match.player2name, this.props.match.player1);
              }}
              >
              {" "}
              Win{" "}
            </button>
            : ''
          }
        </div>
      </div>
    );
  }
}

export default Match;
