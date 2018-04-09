import React, { Component } from "react";
import Match from "../Match/Match";
import axios from "axios";
import "./bracket.css";

class Bracket extends Component {
  constructor() {
    super();
    this.state = {
      bracket: [],
      render: false
    };
    this.handleWin = this.handleWin.bind(this);
  }

  componentDidMount() {
    this.getBracket()
  }

  getBracket(){
    axios.get(`/api/bracket/${this.props.match.params.id}`).then(res => {
      console.log(res.data);
      this.setState({
        bracket: res.data
      });
    });
  }

  handleWin(player, matchid, bracketid, roundid) {
    const newMatch = Math.ceil(matchid / 2);
    const newRoundID = roundid + 1;
    let player1Check = false;
    let player1MapCheck = this.state.bracket.map(match => {
      if (
        match.player1 !== null &&
        match.match === newMatch &&
        match.roundid === newRoundID
      ) {
        player1Check = true;
      }
    });
    if (player1Check === true) {
      console.log("player1 was found");
      axios
        .post("/api/addPlayer2", { player, newMatch, bracketid, newRoundID })
        .then(res => {
          console.log("back from database");
          this.getBracket()
        });
    }
    if (player1Check === false) {
      axios
        .post("/api/addPlayer1", { player, newMatch, bracketid, newRoundID })
        .then(res => {
          console.log("back from database");
          this.getBracket()
        });
    }
    
  }

  render() {
    let matchesDisplayedRound1 = this.state.bracket.map(match => {
      if (match.roundid === 1)
        return (
          <Match key={match.id} match={match} handleWin={this.handleWin} />
        );
    });
    let matchesDisplayedRound2 = this.state.bracket.map(match => {
      if (match.roundid === 2)
        return (
          <Match key={match.id} match={match} handleWin={this.handleWin} />
        );
    });

    let matchesDisplayedRound3 = this.state.bracket.map(match => {
      if (match.roundid === 3) return <Match key={match.id} match={match} handleWin={this.handleWin} />;
    });

    let matchesDisplayedRound4 = this.state.bracket.map(match => {
      if (match.roundid === 4) return <Match key={match.id} match={match} handleWin={this.handleWin}/>;
    });

    let matchesDisplayedRound5 = this.state.bracket.map(match => {
      if (match.roundid === 5) return <Match key={match.id} match={match} handleWin={this.handleWin}/>;
    });

    return (
      <div className="bracket">
        <div className="column">{matchesDisplayedRound1}</div>
        <div className="column2">{matchesDisplayedRound2}</div>
        <div className="column">{matchesDisplayedRound3}</div>
        <div className="column">{matchesDisplayedRound4}</div>
        <div className="column">{matchesDisplayedRound5}</div>
      </div>
    );
  }
}
export default Bracket;
