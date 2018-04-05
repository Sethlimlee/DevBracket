import React, { Component } from "react";
import "./bracket.css";

class Bracket extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { name: "Seth", wins: 0, position: 1 },
        { name: "Tyler", wins: 0, position: 2 },
        { name: "Megan", wins: 0, position: 3 },
        { name: "Steven", wins: 0, position: 4 }
      ]
    };
    
  }
  winGameP1(){

    this.setState({
      users: [...this.state.users, this.state.users[0].wins += 1]
        })
        console.log(this.state.users[0])
  }

  winGameP2(){

    this.setState({
      users: [...this.state.users, this.state.users[1].wins += 1]
        })
        console.log(this.state.users[1])
  }

  winGameP3(){

    this.setState({
      users: [...this.state.users, this.state.users[2].wins += 1]
        })
        console.log(this.state.users[2])
  }

  winGameP4(){
    this.setState({
      users: [...this.state.users, this.state.users[3].wins = 1]
        })
        
        console.log(this.state.users[3])
        console.log(this.state)
  }


  render() {
    console.log(this.state)
    const p1 = this.state.users.map(player => {
      return (
        <div key={player.name}>
          {player.position === 1 ? <p>{player.name}</p> : null}
        </div>
      );
    });

    const p2 = this.state.users.map(player => {
      return (
        <div key={player.name}>
          {player.position === 2 ? <p>{player.name}</p> : null}
        </div>
      );
    });

    const p3 = this.state.users.map(player => {
      return (
        <div key={player.name}>
          {player.position === 3 ? <p>{player.name}</p> : null}
        </div>
      );
    });

    const p4 = this.state.users.map(player => {
      return (
        <div key={player.name}>
          {player.position === 4 ? <p>{player.name}</p> : null}
        </div>
      );
    });

    const winner1 = this.state.users.map(player => {
      return (
        <div key={player.position}>
          {(player.wins !== 0) & (player.position === 3 || player.position === 4)  ? <p>{player.name}</p> : null}
        </div>
      );
    });

    const winner2 = this.state.users.map(player => {
      return (
        <div key={player.position}>
          {player.wins !== 0 & (player.position === 1 || player.position === 2)  ? <p>{player.name}</p> : null}
        </div>
      );
    });

    // console.log(winner1.length)
    // console.log(this.state.users.length);
    // console.log(this.state)
    
    // console.log(winner1)
    return (
      <div className="bracket">
        <div className="box1">
        <div className="buttons">
            <div>
              <button onClick={() => this.winGameP1()}>win</button>
            </div>
            <div>
              <button onClick={() => this.winGameP2()}>win</button>
            </div>
          </div>

          <div className="names">
            <div>{p1}</div>
            <div>{p2}</div>
          </div>
        </div>
        <div className="box3">
        {winner1}
        {winner2}
        </div>
        <div className="box2">
          <div className="buttons">
            <div>
              <button onClick={() => this.winGameP3()}>win</button>
            </div>
            <div>
              <button onClick={() => this.winGameP4()}>win</button>
            </div>
          </div>

          <div className="names">
            <div>{p3}</div>
            <div>{p4}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Bracket;
