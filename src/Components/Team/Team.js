import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/users";


class Team extends Component {

  componentDidMount() {
    this.props.getUserInfo();
  }


  render() {
    const { user } = this.props;
    const userDataJSX = this.props.user.name ? (
      <div>
        <h1>{user.team_name}</h1>
        <h2>Members:</h2>
        <p>{user.userid[0].name}</p>
        <p>{user.userid[1].name}</p>
        <h2>Sports:</h2>
        <p>{user.sport}</p>
      </div>
    ) : (
      <p>Please Log In!</p>
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

export default connect(mapStateToProps, { getUserInfo })(Team);
