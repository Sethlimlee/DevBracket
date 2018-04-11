import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class JoinBracket extends Component {
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
      if (bracket.bracketfull === null) {
        return (
          <Link key={bracket.bracketid} to={`/findbracket/${bracket.bracketid}`}>
            <div>{bracket.bracketid}</div>
          </Link>
        );
      }
    });
    return <div>{displayBrackets}</div>;
  }
}
export default JoinBracket;
