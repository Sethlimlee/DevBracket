import React, { Component } from "react";
import axios from "axios";

class FindBracket extends Component {
  constructor() {
    super();
    this.state = {
      bracket: []
    };
  }

  componentDidMount() {
    this.getBracketInfo();
  }

  getBracketInfo() {
    axios.get(`/api/findBracket/${this.props.match.params.id}`).then(res => {
      console.log(res.data);
      this.setState({
        bracket: res.data
      });
    });
  }

  render() {
    let displayPlayer = [];
    const players = this.state.bracket.map(match => {
      if (match.player1 !== null) {
        displayPlayer.push(match.player1name);
      }
      if (match.player2 !== null) {
        displayPlayer.push(match.player2name);
      }
    });

    let total = 0;
    const player1nulls = this.state.bracket.map(match => {
      if (match.player1 === null) {
        ++total;
      }
      if (match.player2 === null) {
        ++total;
      }
    });
    console.log(total);
    
    let rando=[]
    while(displayPlayer.length>0){
      rando.push(displayPlayer.splice(Math.floor(Math.random()*displayPlayer.length-1),1)[0])
    }
    const showPlayers = rando.map((player,i) => {
      return(
        <div key={i}>
          {player}
        </div>
      )
    })
    return (
      <div>
        <h2>Bracket Size</h2>
        <div>{this.state.bracket.length * 2}</div>
        <h2>Current Players in this Bracket</h2>
        <div>{showPlayers}</div>
        <div>
          <h2>Available Spots Remaining</h2>
          <div>{total}</div>
        </div>
        <div>
          <p></p>
          <button>Join Bracket</button>
        </div>
      </div>
    );
  }
}

export default FindBracket;
