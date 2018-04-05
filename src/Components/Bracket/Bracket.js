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

  winGameP3(){
    this.setState({
      
    })
  }

  render() {
    const p1 = this.state.users.map(player => {
      return <div key={player.name}>{player.position === 1 ? <p>{player.name}</p> : null}</div>;
    });

    const p2 = this.state.users.map(player => {
      return <div key={player.name}>{player.position === 2 ? <p>{player.name}</p> : null}</div>;
    });

    const p3 = this.state.users.map(player => {
      return <div key={player.name}>{player.position === 3 ? <p>{player.name}</p> : null}</div>;
    });

    const p4 = this.state.users.map(player => {
      return <div key={player.name}>{player.position === 4 ? <p>{player.name}</p> : null}</div>;
    });

    return (
      <div className="bracket">
        <div className="box1">
          {p1}
          {p2}
        </div>
        <div className="box3" />
        <div className="box2">
          <div className="buttons">
            <div>
              <button onClick={() => this.winGame()}>win</button>
            </div>
            <div>
              <button>win</button>
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
