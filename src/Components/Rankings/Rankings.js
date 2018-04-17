import React, { Component } from "react";
import axios from "axios";
import "./ranks.css";

class Rankings extends Component {
  constructor() {
    super();
    this.state = {
      pongRankings: [],
      foosRankings: [],
      showPong: true,
      showFoos: false
    };
  }
  componentDidMount() {
    axios.get("/api/rankings").then(res =>
      this.setState({
        pongRankings: res.data
      })
    );
    axios.get("/api/rankingsfoos").then(res =>
      this.setState({
        foosRankings: res.data
      })
    );
  }

  handleFoos() {
    this.setState({
      showPong: false,
      showFoos: true
    });
  }
  handlePong() {
    this.setState({
      showPong: true,
      showFoos: false
    });
  }

  render() {
    const rankingDisplayPong = this.state.pongRankings.map((player, i) => {
      return (
        <div key={player.id} className="row">
          <div>
            <h3>{i + 1}:</h3>
          </div>
          <div>
            <h3><img className='pic' src={player.img} alt="" /> {player.name}</h3>
          </div>
          <div>
            <h3>{player.points}</h3>
          </div>
        </div>
      );
    });
    const rankingDisplayFoos = this.state.foosRankings.map((player, i) => {
      return (
        <div key={player.id} className="row">
          <div>
            <h3>{i + 1}:</h3>
          </div>
          <div>
            <h3><img className='pic' src={player.img} alt="" /> {player.name}</h3>
          </div>
          <div>
            <h3>{player.points}</h3>
          </div>
        </div>
      );
    });
    return (
      <div>
        {this.state.showPong === true ? (
          <div>
            <h1>Pong Rankings</h1>
            <button onClick={() => this.handlePong()}>Pong</button>
            <button onClick={() => this.handleFoos()}>Foos</button>
            <div className="ranks">{rankingDisplayPong}</div>
          </div>
        ) : (
          <div>
            <h1>Foos Rankings</h1>
            <button onClick={() => this.handlePong()}>Pong</button>
            <button onClick={() => this.handleFoos()}>Foos</button>
            <div className="ranks">{rankingDisplayFoos}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Rankings;
