import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/users";
import axios from 'axios';
import "./bracket.css";

class Bracket extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { name: "Seth", wins: 0, position: 1 },
        { name: "Tyler", wins: 0, position: 2 },
        { name: "Megan", wins: 0, position: 3 },
        { name: "Steven", wins: 0, position: 4 }
      ]
    };
  }

  componentDidMount() {
    this.props.getUserInfo();
    
    
    // axios.get(`/api/team/${this.props.match.params.team_name}`).then(res => {
    //   console.log(res)
    //   this.setState({
    //     team: res.data
    //   })
    // })

  }

  winGameP1() {
    this.setState({
      users: [...this.state.users, (this.state.users[0].wins += 1)]
    });
    console.log(this.state.users[0]);
  }

  winGameP2() {
    this.setState({
      users: [...this.state.users, (this.state.users[1].wins += 1)]
    });
    console.log(this.state.users[1]);
  }

  winGameP3() {
    this.setState({
      users: [...this.state.users, (this.state.users[2].wins += 1)]
    });
    console.log(this.state.users[2]);
  }

  winGameP4() {
    this.setState({
      users: [...this.state.users, (this.state.users[3].wins = 1)]
    });

    console.log(this.state.users[3]);
    console.log(this.state);
  }

  render() {
    const p1 = this.state.users
      .filter(player => player.position === 1)
      .map(player => {
        return (
          <div key={player.name}>
            <p>{player.name}</p>
          </div>
        );
      });
    const p2 = this.state.users
      .filter(player => player.position === 2)
      .map(player => {
        return (
          <div key={player.name}>
            <p>{player.name}</p>
          </div>
        );
      });

    const p3 = this.state.users
      .filter(player => player.position === 3)
      .map(player => {
        return (
          <div key={player.name}>
            <p>{player.name}</p>
          </div>
        );
      });

    const p4 = this.state.users
      .filter(player => player.position === 4)
      .map(player => {
        return (
          <div key={player.name}>
            <p>{player.name}</p>
          </div>
        );
      });

    const winner1 = this.state.users
      .filter(
        player =>
          (player.wins !== 0) & (player.position === 3 || player.position === 4)
      )
      .map(player => {
        return (
          <div key={player.name}>
            <p>{player.name}</p>
          </div>
        );
      });

    const winner2 = this.state.users
      .filter(
        player =>
          (player.wins !== 0) & (player.position === 1 || player.position === 2)
      )
      .map(player => {
        return (
          <div key={player.name}>
            <p>{player.name}</p>
          </div>
        );
      });

    console.log(winner1.length)
    // console.log(this.state.users.length);
    // console.log(this.state)

    // console.log(winner1)
    return (
      <div className="bracket">
        <div className="box1">
          <div className="buttons">
            <div>
              <button onClick={winner2.length < 1 ? () => this.winGameP1() : null}>win</button>
            </div>
            <div>
              <button onClick={winner2.length < 1 ? () => this.winGameP2() : null}>win</button>
            </div>
          </div>

          <div className="names">
            <div>{p1}</div>
            <div>{p2}</div>
          </div>
        </div>
        <div className="box3">
          {winner1}
          {winner2}
        </div>
        <div className="box2">
          <div className="buttons">
            <div>
              <button onClick={winner1.length < 1 ? () => this.winGameP3() : null}>win</button>
            </div>
            <div>
              <button onClick={winner1.length < 1 ? () => this.winGameP4() : null}>win</button>
            </div>
          </div>

          <div className="names">
            <div>{p3}</div>
            <div>{p4}</div>
          </div>
        </div>
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

export default connect(mapStateToProps, { getUserInfo })(Bracket);

