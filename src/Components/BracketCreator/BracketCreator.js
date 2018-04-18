import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/users";
import axios from "axios";
import { Link } from "react-router-dom";
import "./bracketCreator.css";

class BracketCreator extends Component {
  constructor() {
    super();
    this.state = {
      player: null,
      bracketSize: 2,
      bracketid: 0,
      sport: "Pong"
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
    });
  }

  submitBracket() {
    if (this.state.bracketSize == 2) {
      const bracketInfo = {
        p1: this.props.user.id,
        p1name: this.props.user.name,
        p1img: this.props.user.img,
        p2: this.state.player,
        bracketid: this.state.bracketid,
        sport: this.state.sport
      };
      axios.post("/api/bracketSize2", bracketInfo).then(response => {
        this.props.history.push(`/findbracket/${this.state.bracketid}`);
      });
    }
    if (this.state.bracketSize == 4) {
      const bracketInfo = {
        p1: this.props.user.id,
        p1name: this.props.user.name,
        p1img: this.props.user.img,
        p2: this.state.player,
        p3: this.state.player,
        p4: this.state.player,
        bracketid: this.state.bracketid,
        sport: this.state.sport
      };
      axios.post("/api/bracketSize4", bracketInfo).then(response => {
        this.props.history.push(`/findbracket/${this.state.bracketid}`);
      });
    }
    if (this.state.bracketSize == 8) {
      const bracketInfo = {
        p1: this.props.user.id,
        p1name: this.props.user.name,
        p1img: this.props.user.img,
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
        this.props.history.push(`/findbracket/${this.state.bracketid}`);
      });
    }
    if (this.state.bracketSize == 16) {
      const bracketInfo = {
        p1: this.props.user.id,
        p1name: this.props.user.name,
        p1img: this.props.user.img,
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
        this.props.history.push(`/findbracket/${this.state.bracketid}`);
      });
    }
  }

  render() {
    console.log(this.state.bracketid);
    console.log(this.props.user.img);

    return (
      <div className="outsidebox">
        <div className="profile">
          <div className="creator">
            <div className='bracketnumber'>
              Bracket #{this.state.bracketid}
            </div>
            <div className='players'>
              # of Players:{" "}
              <p className='playerschoice' onClick={e => this.handleBracketSize(2)}>2</p>
              <p className='playerschoice' onClick={e => this.handleBracketSize(4)}>4</p>
              <p className='playerschoice' onClick={e => this.handleBracketSize(8)}>8</p>
              <p className='playerschoice' onClick={e => this.handleBracketSize(16)}>16</p>
            
            </div>
            <div className='sports'>
              Sport:{" "}
              <p className='playerschoice' onClick={e => this.handleSport("Pong")}>Ping Pong</p>
              <p className='playerschoice' onClick={e => this.handleSport("Foos")}>Foosball</p>
           
            </div>
            <div>
              <div className='details'>Bracket Size: {this.state.bracketSize}</div>
              <div className='details'>Sport: {this.state.sport}</div>
              <p className='submitbracket' onClick={() => this.submitBracket()}>Submit</p>
            </div>
          </div>
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
