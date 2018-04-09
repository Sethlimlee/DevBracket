import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/users";
import {Link} from 'react-router-dom';

class Home extends Component {

  componentDidMount() {
    this.props.getUserInfo();
  }

  startMap(){
    return this.props.user.team_name.map(team => {
      return (
        
          <Link key={team.id} to={`/team/${team.team_name}`}>
          <div>
            {team.team_name}
          </div>
          </Link>
        
      )
    })
  }


  render() {
    
    const { user } = this.props;
    // const teamList = user.team_name.map(team => {
    //   return (
        
    //       <Link key={team.id} to={`/team/${team.id}`}>
    //       <div>
    //         {team.team_name}
    //       </div>
    //       </Link>
        
    //   )
    // })
    const userDataJSX = this.props.user.name ? (
      <div>
        <h1>{user.name}</h1>
        <h2>Teams:</h2>
        <div>
          {this.startMap()}
      </div>
      </div>
    ) : (
      <p>bruh you need to log in first</p>
    );

    return <div className="text">
    {userDataJSX}
    </div>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { getUserInfo })(Home);
