import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/users";
import axios from "axios";

class BracketCreator extends Component {
  constructor() {
    super();
    this.state = {
      player1: null,
      player2: null,
      player3: null,
      player4: null,
      player5: null,
      player6: null,
      player7: null,
      player8: null,
      player9: null,
      player10: null,
      player11: null,
      player12: null,
      player13: null,
      player14: null,
      player15: null,
      player16: null,
      bracketSize: 0,
      bracketid: 0
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

  handleAddPlayer1(value) {
    this.setState({
      player1: value
    });
  }
  handleAddPlayer2(value) {
    this.setState({
      player2: value
    });
  }
  handleAddPlayer3(value) {
    this.setState({
      player3: value
    });
  }
  handleAddPlayer4(value) {
    this.setState({
      player4: value
    });
  }
  handleAddPlayer5(value) {
    this.setState({
      player5: value
    });
  }
  handleAddPlayer6(value) {
    this.setState({
      player6: value
    });
  }
  handleAddPlayer7(value) {
    this.setState({
      player7: value
    });
  }
  handleAddPlayer8(value) {
    this.setState({
      player8: value
    });
  }
  handleAddPlayer9(value) {
    this.setState({
      player9: value
    });
  }
  handleAddPlayer10(value) {
    this.setState({
      player10: value
    });
  }
  handleAddPlayer11(value) {
    this.setState({
      player11: value
    });
  }
  handleAddPlayer12(value) {
    this.setState({
      player12: value
    });
  }
  handleAddPlayer13(value) {
    this.setState({
      player13: value
    });
  }
  handleAddPlayer14(value) {
    this.setState({
      player14: value
    });
  }
  handleAddPlayer15(value) {
    this.setState({
      player15: value
    });
  }
  handleAddPlayer16(value) {
    this.setState({
      player16: value
    });
  }

  submitBracket() {
    if (this.state.bracketSize == 2) {
      const bracketInfo = {
        p1: this.state.player1,
        p2: this.state.player2,
        bracketid: this.state.bracketid
      };
      axios.post("/api/bracketSize2", bracketInfo).then(response => {
        this.getBracketID();
      });
    }

    if (this.state.bracketSize == 4) {
      const bracketInfo = {
        p1: this.state.player1,
        p2: this.state.player2,
        p3: this.state.player3,
        p4: this.state.player4,
        bracketid: this.state.bracketid
      };
      axios.post("/api/bracketSize4", bracketInfo).then(response => {
        this.getBracketID();
      });
    }
    if (this.state.bracketSize == 8) {
      const bracketInfo = {
        p1: this.state.player1,
        p2: this.state.player2,
        p3: this.state.player3,
        p4: this.state.player4,
        p5: this.state.player5,
        p6: this.state.player6,
        p7: this.state.player7,
        p8: this.state.player8,
        bracketid: this.state.bracketid
      };
      axios.post("/api/bracketSize8", bracketInfo).then(response => {
        this.getBracketID();
      });
    }
    if (this.state.bracketSize == 16) {
      const bracketInfo = {
        p1: this.state.player1,
        p2: this.state.player2,
        p3: this.state.player3,
        p4: this.state.player4,
        p5: this.state.player5,
        p6: this.state.player6,
        p7: this.state.player7,
        p8: this.state.player8,
        p9: this.state.player9,
        p10: this.state.player10,
        p11: this.state.player11,
        p12: this.state.player12,
        p13: this.state.player13,
        p14: this.state.player14,
        p15: this.state.player15,
        p16: this.state.player16,
        bracketid: this.state.bracketid
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
          # of Players:{" "}
          <input onChange={e => this.handleBracketSize(e.target.value)} />
          <p />
        </div>
        <div>
          Player 1:{" "}
          <input onChange={e => this.handleAddPlayer1(e.target.value)} />
        </div>
        <div>
          Player 2:{" "}
          <input onChange={e => this.handleAddPlayer2(e.target.value)} />
        </div>
        <div>
          Player 3:{" "}
          <input onChange={e => this.handleAddPlayer3(e.target.value)} />
        </div>
        <div>
          Player 4:{" "}
          <input onChange={e => this.handleAddPlayer4(e.target.value)} />
        </div>
        <div>
          Player 5:{" "}
          <input onChange={e => this.handleAddPlayer5(e.target.value)} />
        </div>
        <div>
          Player 6:{" "}
          <input onChange={e => this.handleAddPlayer6(e.target.value)} />
        </div>
        <div>
          Player 7:{" "}
          <input onChange={e => this.handleAddPlayer7(e.target.value)} />
        </div>
        <div>
          Player 8:{" "}
          <input onChange={e => this.handleAddPlayer8(e.target.value)} />
        </div>
        <div>
          Player 9:{" "}
          <input onChange={e => this.handleAddPlayer9(e.target.value)} />
        </div>
        <div>
          Player 10:{" "}
          <input onChange={e => this.handleAddPlayer10(e.target.value)} />
        </div>
        <div>
          Player 11:{" "}
          <input onChange={e => this.handleAddPlayer11(e.target.value)} />
        </div>
        <div>
          Player 12:{" "}
          <input onChange={e => this.handleAddPlayer12(e.target.value)} />
        </div>
        <div>
          Player 13:{" "}
          <input onChange={e => this.handleAddPlayer13(e.target.value)} />
        </div>
        <div>
          Player 14:{" "}
          <input onChange={e => this.handleAddPlayer14(e.target.value)} />
        </div>
        <div>
          Player 15:{" "}
          <input onChange={e => this.handleAddPlayer15(e.target.value)} />
        </div>
        <div>
          Player 16:{" "}
          <input onChange={e => this.handleAddPlayer16(e.target.value)} />
        </div>
        <div>
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
