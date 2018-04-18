import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './allBrackets.css'

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
    const displayBrackets = this.state.bracketIDs.map(bracket => {
      if (bracket.bracketfull === "full") {
        return (
          <Link className='allbracket' key={bracket.bracketid} to={`/bracket/${bracket.bracketid}`}>
            <div className='allbracketsshow'>Bracket {bracket.bracketid}</div>
          </Link>
        );
      }
    });
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
export default AllBrackets;
