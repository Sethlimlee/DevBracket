import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/users";
import axios from "axios";

class BracketCreator extends Component {
  constructor() {
    super();
    this.state = {
      player: null,
      bracketSize: 0,
      bracketid: 0,
      sport: ''
    };
  }

  componentDidMount() {
    this.props.getUserInfo();
    this.getBracketID();
  }

  getBracketID() {
    axios.get("/api/bracketid").then(response => {
      this.setState({
        bracketid: response.data[0].bracketid + 1
      });
    });
  }

  handleBracketSize(value) {
    this.setState({
      bracketSize: value
    });
  }

  handleSport(value) {
    this.setState({
      sport: value
    })
  }

  submitBracket() {
    if (this.state.bracketSize == 2) {
      const bracketInfo = {
        p1: this.props.user.id,
        p1name: this.props.user.name,
        p2: this.state.player,
        bracketid: this.state.bracketid,
        sport: this.state.sport
      };
      axios.post("/api/bracketSize2", bracketInfo).then(response => {
        this.getBracketID();
      });
    }
    if (this.state.bracketSize == 4) {
      const bracketInfo = {
        p1: this.props.user.id,
        p1name: this.props.user.name,
        p2: this.state.player,
        p3: this.state.player,
        p4: this.state.player,
        bracketid: this.state.bracketid,
        sport: this.state.sport
      };
      axios.post("/api/bracketSize4", bracketInfo).then(response => {
        this.getBracketID();
      });
    }
    if (this.state.bracketSize == 8) {
      const bracketInfo = {
        p1: this.props.user.id,
        p1name: this.props.user.name,
        p2: this.state.player,
        p3: this.state.player,
        p4: this.state.player,
        p5: this.state.player,
        p6: this.state.player,
        p7: this.state.player,
        p8: this.state.player,
        bracketid: this.state.bracketid,
        sport: this.state.sport
      };
      axios.post("/api/bracketSize8", bracketInfo).then(response => {
        this.getBracketID();
      });
    }
    if (this.state.bracketSize == 16) {
      const bracketInfo = {
        p1: this.props.user.id,
        p1name: this.props.user.name,
        p2: this.state.player,
        p3: this.state.player,
        p4: this.state.player,
        p5: this.state.player,
        p6: this.state.player,
        p7: this.state.player,
        p8: this.state.player,
        p9: this.state.player,
        p10: this.state.player,
        p11: this.state.player,
        p12: this.state.player,
        p13: this.state.player,
        p14: this.state.player,
        p15: this.state.player,
        p16: this.state.player,
        bracketid: this.state.bracketid,
        sport: this.state.sport
      };
      axios.post("/api/bracketSize16", bracketInfo).then(response => {
        this.getBracketID();
      });
    }
  }

  render() {
    console.log(this.state.bracketid);

    return (
      <div>
        <div>
          <h1>BRACKET #{this.state.bracketid}</h1>
        </div>
        <div>
          # of Players:{" "}
          <button onClick={e => this.handleBracketSize(2)}>2</button>
          <button onClick={e => this.handleBracketSize(4)}>4</button>
          <button onClick={e => this.handleBracketSize(8)}>8</button>
          <button onClick={e => this.handleBracketSize(16)}>16</button>
          <p />
        </div>
        <div>
        Sport:{" "}
        <button onClick={e => this.handleSport('Pong')}>Ping Pong</button>
          <button onClick={e => this.handleSport('Foos')}>Foosball</button>
        <p />
        </div>
        <div>
          <div>Bracket Size: {this.state.bracketSize}</div>
          <div>Sport: {this.state.sport}</div>
          
          <p />
          <button onClick={() => this.submitBracket()}>Submit</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { getUserInfo })(BracketCreator);
