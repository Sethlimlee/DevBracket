import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/users";
import "./home.css";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      img: "",
      name: "",
      class: ""
    };
  }
  componentDidMount() {
    this.props.getUserInfo();
    this.setState({
      img: this.props.user.img,
      name: this.props.user.name,
      class: this.props.user.class
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

    const { user } = this.props;
    const userDataJSX = this.props.user.name ? (
      this.state.toggle === false ? (
        <div>
          <img className='pp' src={user.img} alt="" />
          <h1>{user.name}</h1>

          <h2>ID: {user.id}</h2>
          <h2>Class: {user.class}</h2>
          <button onClick={() => this.handleClick(true)}>Edit Profile</button>
          {/* <div>{this.startMap()}</div> */}
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
