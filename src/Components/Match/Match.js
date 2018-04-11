import React, {Component} from "react";
import "./match.css";

class Match extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
  }

  handleWin(winner) {
    this.props.handleWin(
      winner,
      this.props.match.match,
      this.props.match.bracketid,
      this.props.match.roundid
    );
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div className="match">
        <div>
          Name: {(this.props.match.player1name !== 'null') ? this.props.match.player1name : ' '}{" "}
          {
            this.state.show 
            ? 
            <button
              id="button"
              onClick={() => {
                this.handleWin(this.props.match.player1);
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
            this.state.show 
            ? 
            <button
              id="button"
              onClick={() => {
                this.handleWin(this.props.match.player2);
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
