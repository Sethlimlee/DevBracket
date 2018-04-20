import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
            <div className="rankingposition">{i + 1}:</div>
          </div>
          <div>
            <div className="picandname">
            <Link className ='rankinglinks' key={player.id} to={`/profile/${player.id}`}>
              <img className="pic" src={player.img} alt="" /> {player.name}
              </Link>
            </div>
          </div>
          <div>
            <div className="rankingpoints">{player.points}</div>
          </div>
        </div>
      );
    });
    const rankingDisplayFoos = this.state.foosRankings.map((player, i) => {
      return (
        <div key={player.id} className="row">
          <div>
            <div className="rankingposition">{i + 1}:</div>
          </div>
          <div>
            <div className="picandname">
            <Link className ='rankinglinks' key={player.id} to={`/profile/${player.id}`}>
              <img className="pic" src={player.img} alt="" /> {player.name}
              </Link>
            </div>
          </div>
          <div>
          <div className="rankingpoints">{player.points}</div>
          </div>
        </div>
      );
    });
    return (
      <div className="outsideboxrank">
        <div className="profilerank">
          <div className="ranking">
            {this.state.showPong === true ? (
              <div>
                <div className='rankingtitle'>Ping Pong Rankings</div>
                <div className='choice'>
                <div className='rankingchoice' onClick={() => this.handlePong()}>Pong</div>
                <div className='rankingchoice' onClick={() => this.handleFoos()}>Foos</div>
                </div>
                <div className="ranks">{rankingDisplayPong}</div>
              </div>
            ) : (
              <div>
                 <div className='rankingtitle'>Foosball Rankings</div>
                 <div className='choice'>
                <div className='rankingchoice' onClick={() => this.handlePong()}>Pong</div>
                <div className='rankingchoice' onClick={() => this.handleFoos()}>Foos</div>
                </div>
                <div className="ranks">{rankingDisplayFoos}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Rankings;
