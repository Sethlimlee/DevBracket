import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/users";


class Home extends Component {

  componentDidMount() {
    this.props.getUserInfo();
  }


  render() {
    const { user } = this.props;
    const userDataJSX = this.props.user.name ? (
      <div>
        <p>{user.name}</p>
        <p>Teams:</p>
        <p>
          {user.team_name}({user.sport}) Members:{user.userid[0].name},{user.userid[1].name}
        </p>
        <a href="http://localhost:3005/login/logout">
          <button>Logout</button>
        </a>
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

export default connect(mapStateToProps, { getUserInfo })(Home);
