import React from 'react'
import './match.css';

function Match(props) {
  return (
    <div className='match'>
    <div>Match 1</div>
    <div>Name: {props.match.player1}</div>
    <div>VS.</div>
    <div>Name: {props.match.player2}</div>
    </div>
  )
}

export default Match;