import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './allBrackets.css'
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/users";

class AllBrackets extends Component {
  constructor() {
    super();
    this.state = {
      bracketIDs: []
    };
  }

  componentDidMount() {
    axios.get("/api/allBracketIds").then(response => {
      this.setState({
        bracketIDs: response.data
      });
    });
  }

  render() {
    const displayBrackets = this.props.user.id ? this.state.bracketIDs.map(bracket => {
      if (bracket.bracketfull === "full") {
        return (
          <Link className='allbracket' key={bracket.bracketid} to={`/bracket/${bracket.bracketid}`}>
            <div className='allbracketsshow'>Bracket {bracket.bracketid}</div>
          </Link>
        );
      }
    })
    : 'log in first'
    return (
      <div className='outsidebox'>
        <div className='profile'>
          <div className='allbrackets'>
            <div className = 'allbracketstitle'>Brackets:</div>
            <div className='displayallbrackets'>{displayBrackets}</div>
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
export default connect(mapStateToProps, { getUserInfo })( AllBrackets);

