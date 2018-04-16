import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/users";
import Match from "../Match/Match";
import Winner from '../Winner/Winner';
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

  handleWin(player, playerName, loser, playerImg,  matchid, bracketid, roundid, sport) {
    
    const newMatch = Math.ceil(matchid / 2);
    const newRoundID = roundid + 1;
    axios.post('/api/addWin', {player: player, roundid: roundid, sport: sport, loser: loser}).then(res => {
      console.log('added win')
    })
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
        .post("/api/addPlayer2", { player, newMatch, bracketid, newRoundID, playerName, playerImg })
        .then(res => {
          console.log("back from database");
          this.getBracket()
        });
    }
    if (player1Check === false) {
      axios
        .post("/api/addPlayer1", { player, newMatch, bracketid, newRoundID, playerName, playerImg })
        .then(res => {
          console.log("back from database");
          this.getBracket()
        });
    }
    
  }

  render() {

    let matchesDisplayedRound1 = this.state.bracket.map(match => {
      if (match.roundid === 1 && match.winner !== 'yes')
        return (
          <Match key={match.id} match={match} handleWin={this.handleWin} id = {this.props.user.id}/>
        );
    });
    let matchesDisplayedRound2 = this.state.bracket.map(match => {
      if (match.roundid === 2 && match.winner !== 'yes')
        return (
          <Match key={match.id} match={match} handleWin={this.handleWin} id = {this.props.user.id}/>
        );
    });

    let matchesDisplayedRound3 = this.state.bracket.map(match => {
      if (match.roundid === 3 && match.winner !== 'yes') return <Match key={match.id} match={match} handleWin={this.handleWin} id = {this.props.user.id}/>;
    });

    let matchesDisplayedRound4 = this.state.bracket.map(match => {
      if (match.roundid === 4 && match.winner !== 'yes') return <Match key={match.id} match={match} handleWin={this.handleWin} id = {this.props.user.id}/>;
    });

    let matchesDisplayedRound5 = this.state.bracket.map(match => {
      if (match.roundid === 5 && match.winner !== 'yes') return <Match key={match.id} match={match} handleWin={this.handleWin} id = {this.props.user.id}/>;
    });
    
    let matchesDisplayedRound6 = this.state.bracket.map(match => {
      if (match.winner === 'yes') return <Winner key={match.id} match={match}/>;
    });

    return (
      
      <div>
      {this.props.user.id ? (
        <div className="bracket">
        <div className="column">{matchesDisplayedRound1}</div>
        <div className="column2">{matchesDisplayedRound2}</div>
        <div className="column">{matchesDisplayedRound3}</div>
        <div className="column">{matchesDisplayedRound4}</div>
        <div className="column">{matchesDisplayedRound5}</div>
        <div className="column">{matchesDisplayedRound6}</div>
        </div>
    ) : (
      <p>bruh you need to log in first</p>
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

export default connect(mapStateToProps, { getUserInfo })(Bracket);

