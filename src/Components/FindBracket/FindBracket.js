import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/users";
import axios from "axios";
import './findBracket.css'

class FindBracket extends Component {
  constructor() {
    super();
    this.state = {
      bracket: [],
      total: 0
    };
    this.joinBracket = this.joinBracket.bind(this);
  }

  componentDidMount() {
    this.getBracketInfo();
    this.props.getUserInfo();
  }

  getBracketInfo() {
    axios.get(`/api/findBracket/${this.props.match.params.id}`).then(res => {
      console.log(res.data);
      let total = 0;
      const player1nulls = res.data.map(match => {
        if (match.player1 === null) {
          ++total;
        }
        if (match.player2 === null) {
          ++total;
        }
      });
      this.setState({
        bracket: res.data,
        total: total
      });
    });
  }

  joinBracket() {
    //loop through state
    // check for null as value of player 1
    // if null is found send whole object with updated player1 and player1 name from sessions.
    //check if bracket is full
    //reroute depending on if the bracket is full
    //
    let flag = false;

    this.state.bracket.map(match => {
      console.log(flag);
      console.log(`made it to player 1 map`);
      if (match.player1 === null && !flag) {
        match.player1 = this.props.user.id;
        match.player1name = this.props.user.name;
        match.player1img = this.props.user.img
        const newMatch = {
          player1: match.player1,
          player1name: match.player1name,
          player1img: match.player1img,
          total: this.state.total,
          matchid: match.id
        };
        console.log("made it to sending stage of player1");
        axios.post("/api/joinbracket", newMatch).then(res => {
          this.props.history.push("/home");
          // this.setState({
          //   bracket: res.data
          // });
        });
        flag = true;
      }
      return;
    });
    if (!flag) {
      this.state.bracket.map(match => {
        console.log(flag);
        console.log(`made it to player 2 map`);
        if (match.player2 === null && !flag) {
          match.player2 = this.props.user.id;
          match.player2name = this.props.user.name;
          match.player2img = this.props.user.img
          const newMatch = {
            player2: match.player2,
            player2name: match.player2name,
            player2img: match.player2img,
            total: this.state.total,
            matchid: match.id,
            bracketid: match.bracketid
          };
          console.log("made it to sending stage of player2");
          axios.post("/api/joinbracket2", newMatch).then(res => {
              this.props.history.push("/home");
            // this.setState({
            //   bracket: res.data
            // });
          });
          flag = true;
        }
        return;
      });
    }
  }

  deleteBracket() {
    axios
      .delete(`/api/deleteBracket/${this.props.match.params.id}`)
      .then(res => {
        this.props.history.push("/home");
      });
  }

  render() {

    let displayPlayer = [];
    let displayID = []
    const players = this.state.bracket.map(match => {
      if (match.player1 !== null) {
        displayPlayer.push(match.player1name);
        displayID.push(match.player1);
        
      }
      if (match.player2 !== null) {
        displayPlayer.push(match.player2name);
        displayID.push(match.player2);
      }
    });
    let displayCreator = 0
    let findCreator = this.state.bracket.map(match => {
      if (match.creator !== 0 && match.creator !== displayCreator){
        displayCreator = match.creator
      }
    })

    console.log(displayID);
    

    let sessionID = ''
    let findID = displayID.map(player => {
      if(player === this.props.user.id){
        sessionID = this.props.user.id
      }
    })
    console.log(sessionID)

    console.log(displayCreator);
    let rando = [];
    while (displayPlayer.length > 0) {
      rando.push(
        displayPlayer.splice(
          Math.floor(Math.random() * displayPlayer.length - 1),
          1
        )[0]
      );
    }
    const showPlayers = rando.map((player, i) => {
      return <div className='showplayers' key={i}>{player}</div>;
    });

    const joinButton = this.props.user.id 
    ? <div><p />
    {sessionID === this.props.user.id ? '' : <p className='submitbracket' onClick={() => this.joinBracket()}>Join Bracket</p>}
    {displayCreator === this.props.user.id ? (
      <p className='deletebracket' onClick={() => this.deleteBracket()}>Delete Bracket</p>
    ) : (
      ""
    )}</div>
    : 'log in first'

    return (
      <div className="outsidebox">
        <div className="profileFind">
          <div className="find">
          <div>
        <h2>Bracket Size:</h2>
        <div className='findinfo'>{this.state.bracket.length * 2}</div>
          </div>
        <div>
        <h2>Players in this Bracket:</h2>
        <div className='findinfo'>{showPlayers}</div>
        </div>
        <div>
          <h2>Available Spots Remaining:</h2>
          <div className='findinfo'>{this.state.total}</div>
        </div>
        <div>
          {joinButton}
        </div>
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

export default connect(mapStateToProps, { getUserInfo })(FindBracket);
