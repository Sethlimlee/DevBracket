import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/users";
import { Link } from "react-router-dom";
import "./home.css";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      img: "",
      name: "",
      class: "",
      id: 0,
      bracketIDs: []
    };
  }
  componentDidMount() {
    axios.get(`/api/userbrackets`).then(response => {
      console.log(response.data);
      this.setState({
        bracketIDs: response.data
      });
    });
    this.props.getUserInfo();
  }

  handleClick(value) {
    this.setState({
      toggle: value,
      img: this.props.user.img,
      name: this.props.user.name,
      class: this.props.user.class
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
        className: this.state.class
      })
      .then(res => {
        this.props.getUserInfo();
        this.setState({
          toggle: false
        });
      });
  }
  // startMap() {
  //   return this.props.user.team_name.map(team => {
  //     return (
  //       <Link key={team.id} to={`/team/${team.team_name}`}>
  //         <div>{team.team_name}</div>
  //       </Link>
  //     );
  //   });
  // }

  render() {
    console.log(this.state.name);
    const displayBracketsJoined = this.state.bracketIDs.map(bracket => {
      if (
        bracket.bracketfull === null &&
        (bracket.player1 === this.props.user.id ||
          bracket.player2 === this.props.user.id)
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
        (brackets.player1 === this.props.user.id ||
          brackets.player2 === this.props.user.id)
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
        <div>
          <img className="pp" src={user.img} alt="" />
          <h1>{user.name}</h1>

          <h2>ID: {user.id}</h2>
          <h2>Class: {user.class}</h2>
          <button onClick={() => this.handleClick(true)}>Edit Profile</button>
          {/* <div>{this.startMap()}</div> */}
          <div>
            <div>
              <h2>Brackets Entered</h2>
              <h3>{displayBracketsJoined}</h3>
            </div>
            <div>
              <h2>Brackets Ready to Play</h2>
              <h3>{displayBracketsStarted}</h3>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Profile Pic:</h2>{" "}
          <input
            onChange={e => this.handleInput("img", e.target.value)}
            placeholder={user.img}
          />
          <h2>Name:</h2>{" "}
          <input
            onChange={e => this.handleInput("name", e.target.value)}
            placeholder={user.name}
          />
          <h2>Class: </h2>{" "}
          <input
            onChange={e => this.handleInput("class", e.target.value)}
            placeholder={user.class}
          />
          <div>
            <button onClick={() => this.handleUpdate(false)}>Submit</button>
            <button onClick={() => this.handleClick(false)}>Cancel</button>
          </div>
        </div>
      )
    ) : (
      <p>bruh you need to log in first</p>
    );

    return <div className="text">{userDataJSX}</div>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { getUserInfo })(Home);
