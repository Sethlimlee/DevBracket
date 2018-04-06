import React, { Component } from "react";
import Match from '../Match/Match';
import axios from 'axios';
import "./bracket.css";

class Bracket extends Component {
  constructor(){
    super()
    this.state = {
      bracket: []
    }
  }

  componentDidMount(){
    axios.get(`/api/bracket/${1}`).then(res => {
      console.log(res.data)
      this.setState({
        bracket: res.data
      })
    }
    )
  }

render(){
  let matchesDisplayedRound1 = this.state.bracket.map ( match => {
    if(match.roundid === 1)
    return (
      <Match 
        key={match.id}
        match = {match}
        />
    )
  })
  let matchesDisplayedRound2 = this.state.bracket.map ( match => {
    if(match.roundid === 2)
    return (
      <Match 
        key={match.id}
        match = {match}
        />
    )
  })

  return(
    <div className='bracket'>
    <div className='column'>
    {matchesDisplayedRound1}
    </div>
    <div className='column'>
    {matchesDisplayedRound2}
    </div>
    </div>
  )
}
}
export default Bracket