import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/users";
import { Link } from "react-router-dom";
import axios from "axios";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      img: "",
      name: "",
      class: "",
      slack: '',
      id: 0,
      bracketIDs: [],
      enter: false,
      started: false,
      complete: false,
      noname: '(To Contact Opponents)'

    };
  }
  componentDidMount() {
    this.findPlayer()
    this.props.getUserInfo().then( res => {
      this.findSlack(this.props.match.params.id)
    })
    axios.get(`/api/userbrackets`).then(response => {
      console.log(response.data);
      this.setState({
        bracketIDs: response.data
      });
    });
  
  }

  findPlayer(){
    axios.get(`/api/profile/${this.props.match.params.id}`).then(res => {
      console.log(res.data)
      this.setState({
        img: res.data.img,
        name: res.data.name,
        class: res.data.class,
        id: res.data.id,
      })
    })
  }

  findSlack(value){
    axios.get("/api/slack/" + value).then(response => {
      this.setState({
        slack: response.data
      })
    })
  }

  handleToggle(key, value) {
    this.setState({
      [key]: value
    });
  }

  handleClick(value) {
    this.setState({
      toggle: value,
      img: this.props.user.img,
      name: this.props.user.name,
      class: this.props.user.class,
      slack: this.props.user.slack
    });
  }

  handleInput(key, value) {
    this.setState({
      [key]: value
    });
  }

  handleUpdate() {
    axios
      .put(`/api/updateProfile/${this.props.user.id}`, {
        img: this.state.img,
        name: this.state.name,
        className: this.state.class,
        slack: this.state.slack
      })
      .then(res => {
        this.props.getUserInfo();
        this.setState({
          toggle: false
        });
      });
  }

  render() {
console.log(this.state.slack)
    const displayBracketsJoined = this.state.bracketIDs.map(bracket => {
      if (
        bracket.bracketfull === null &&
        (bracket.player1 === this.state.id ||
          bracket.player2 === this.state.id)
      ) {
        return (
          <Link
            key={bracket.bracketid}
            to={`/findbracket/${bracket.bracketid}`}
          >
            <div>Bracket: {bracket.bracketid}</div>
          </Link>
        );
      }
    });
    const displayBracketsStarted = this.state.bracketIDs.map(brackets => {
      if (
        brackets.bracketfull !== null &&
        (brackets.player1 === this.state.id ||
          brackets.player2 === this.state.id) &&
        brackets.bracketcomplete !== 1
      ) {
        return (
          <Link
            className="bracketLinks"
            key={brackets.bracketid}
            to={`/bracket/${brackets.bracketid}`}
          >
            <div className="bracketStarted">Bracket: {brackets.bracketid}</div>
          </Link>
        );
      }
    });

    const displayBracketsComplete = this.state.bracketIDs.map(brackets => {
      if (
        brackets.bracketfull !== null &&
        (brackets.player1 === this.state.id ||
          brackets.player2 === this.state.id) &&
        brackets.bracketcomplete === 1
      ) {
        return (
          <Link key={brackets.bracketid} to={`/bracket/${brackets.bracketid}`}>
            <div>Bracket: {brackets.bracketid}</div>
          </Link>
        );
      }
    });

    const { user } = this.props;
    const userDataJSX = this.props.user.name ? (
      this.state.toggle === false ? (
        <div className="info">
          <div className="name">
            <div>
              <h1>{this.state.name}</h1>
            </div>
            <div>
              <img className="pp" src={this.state.img} alt="" />
            </div>
          </div>
          <div className="therest">
            <div className="edit">
              <div>
                <h2>Class: {this.state.class}</h2>
              </div>
             
            </div>
            <h2>Slack Name: {this.state.slack !== '' ? (this.state.slack): (this.state.noname) } </h2>
            <div />
            <div>
              <div className="ready">Brackets:</div>
              <div className="brackets">{displayBracketsStarted}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="updates">
          <h2>Profile Pic:</h2>{" "}
          <input
            className="editinputs"
            onChange={e => this.handleInput("img", e.target.value)}
            placeholder={user.img}
          />
          <h2>Display Name:</h2>{" "}
          <input
            className="editinputs"
            onChange={e => this.handleInput("name", e.target.value)}
            placeholder={user.name}
          />
          <h2>Class: </h2>{" "}
          <input
            className="editinputs"
            onChange={e => this.handleInput("class", e.target.value)}
            placeholder={user.class}
          />
          <h2>Slack Name: </h2>{" "}
          <input
            className="editinputs"
            onChange={e => this.handleInput("slack", e.target.value)}
            placeholder={user.slack}
          />
          <div className="editbuttons">
            <p
              className="updateprofile"
              onClick={() => this.handleUpdate(false)}
            >
              Submit
            </p>
            <p
              className="updateprofile"
              onClick={() => this.handleClick(false)}
            >
              Cancel
            </p>
          </div>
        </div>
      )
    ) : (
      "log in first"
    );

    return (
      <div className="outsideboxrank">
        <div className="profilerank">{userDataJSX}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { getUserInfo })(Profile);