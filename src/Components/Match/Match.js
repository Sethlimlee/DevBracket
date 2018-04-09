import React from 'react'
import './match.css';

function Match(props) {
  return (
    <div className='match'>
    <div>Name: {props.match.player1} <button onClick={() => props.handleWin(props.match.player1, props.match.match, props.match.bracketid, props.match.roundid)}> Win </button></div>
    <div>VS.</div>
    <div>Name: {props.match.player2} <button onClick={() => props.handleWin(props.match.player2, props.match.match, props.match.bracketid, props.match.roundid)}> Win </button></div>
    </div>
  )
}

export default Match;