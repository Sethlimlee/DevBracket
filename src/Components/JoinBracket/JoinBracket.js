import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./joinBracket.css";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/users";

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
    const displayBrackets = this.props.user.id
      ? this.state.bracketIDs.map(bracket => {
          if (bracket.bracketfull === null) {
            return (
              <Link
                className="bracketlinks"
                key={bracket.bracketid}
                to={`/findbracket/${bracket.bracketid}`}
              >
                <div className="pendingbracket">
                  Bracket: {bracket.bracketid} ({bracket.sport})
                </div>
              </Link>
            );
          }
        })
      : " log in first";
    return (
      <div className="outsideboxrank">
        <div className="profilerank">
          <div className="join">
            <div className="pending">Pending Brackets:</div>
            <div className="pendingbrackets">{displayBrackets}</div>
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
export default connect(mapStateToProps, { getUserInfo })(JoinBracket);
