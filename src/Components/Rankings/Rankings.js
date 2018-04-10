import React, { Component } from "react";
import axios from "axios";
import "./ranks.css";

class Rankings extends Component {
  constructor() {
    super();
    this.state = {
      rankings: []
    };
  }
  componentDidMount() {
    axios.get("/api/rankings").then(res =>
      this.setState({
        rankings: res.data
      })
    );
  }

  render() {
    const rankingDisplay = this.state.rankings.map((player, i) => {
      return (
        <div key={player.id} className="row">
          <div>
            <h3>{i + 1}:</h3>
          </div>
          <div>
            <h3>{player.name}</h3>
          </div>
          <div>
            <h3>{player.points}</h3>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h1>Rankings</h1>
        <div className="ranks">{rankingDisplay}</div>
      </div>
    );
  }
}

export default Rankings;
