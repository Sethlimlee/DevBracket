import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/users";
import axios from 'axios';


class Team extends Component {
  constructor(){
    super()
    this.state = {
      team: []
    }
  }

  componentDidMount() {
    this.props.getUserInfo();
    console.log(this.props.match.params.team_name);
    
    axios.get(`/api/team/${this.props.match.params.team_name}`).then(res => {
      console.log(res)
      this.setState({
        team: res.data
      })
    })

  }


  render() {
    console.log(this.state);
    let displayTeam = this.state.team.map(team => {
      return(
      <div key={team.id}>
        {team.team_name}
      </div>
      )
    })
    return <div className="text">
    <p></p>
    <h1>{displayTeam}</h1>
    </div>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { getUserInfo })(Team);
