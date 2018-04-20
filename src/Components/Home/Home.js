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
      bracketIDs: [],
      enter: false,
      started: false,
      complete: false
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
    console.log(this.state.enter);
    console.log(this.state.started);
    console.log(this.state.complete);

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
          brackets.player2 === this.props.user.id) &&
        brackets.bracketcomplete !== 1
      ) {
        return (
          <Link className='bracketLinks' key={brackets.bracketid} to={`/bracket/${brackets.bracketid}`}>
            <div className='bracketStarted'>Bracket: {brackets.bracketid}</div>
          </Link>
        );
      }
    });

    const displayBracketsComplete = this.state.bracketIDs.map(brackets => {
      if (
        brackets.bracketfull !== null &&
        (brackets.player1 === this.props.user.id ||
          brackets.player2 === this.props.user.id) &&
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
              <h1>{user.name}</h1>
            </div>
            <div>
              <img className="pp" src={user.img} alt="" />
            </div>
          </div>
          <div className="therest">
            <div className="edit">
              <div>
                <h2>Class: {user.class}</h2>
              </div>
              <div>
                <p
                  className="editprofile"
                  onClick={() => this.handleClick(true)}
                >
                  Edit Profile
                </p>
              </div>
            </div>

            {/* <div>
              <button
                onClick={() => this.handleToggle("enter", !this.state.enter)}
              >
                Brackets Entered
              </button>
              {this.state.enter === true ? (
                <div>
                  <h3>{displayBracketsJoined}</h3>
                </div>
              ) : (
                ""
              )}
            </div>
            <p /> */}
            <div>
              <div className='ready'>Brackets:</div>
              <div className='brackets'>
              {displayBracketsStarted}
              </div>
            </div>

            {/* <div>
              <button
                onClick={() =>
                  this.handleToggle("complete", !this.state.complete)
                }
              >
                Brackets Completed
              </button>
              {this.state.complete === true ? (
                <div>
                  <h3>{displayBracketsComplete}</h3>
                </div>
              ) : (
                ""
              )}
            </div> */}
          </div>
        </div>
      ) : (
        <div className='updates'>
          <h2>Profile Pic:</h2>{" "}
          <input className='editinputs'
            onChange={e => this.handleInput("img", e.target.value)}
            placeholder={user.img}
          />
          <h2>Name:</h2>{" "}
          <input className='editinputs'
            onChange={e => this.handleInput("name", e.target.value)}
            placeholder={user.name}
          />
          <h2>Class: </h2>{" "}
          <input className='editinputs'
            onChange={e => this.handleInput("class", e.target.value)}
            placeholder={user.class}
          />
          <div className='editbuttons'>
            <p className='updateprofile' onClick={() => this.handleUpdate(false)}>Submit</p>
            <p className='updateprofile' onClick={() => this.handleClick(false)}>Cancel</p>
          </div>
        </div>
      )
    ) : (
      'log in first'
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

export default connect(mapStateToProps, { getUserInfo })(Home);
