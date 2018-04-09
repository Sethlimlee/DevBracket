import React, {Component} from 'react';
import Bracket from '../Bracket/Bracket'
import {Link} from 'react-router-dom';
import axios from 'axios';

class AllBrackets extends Component {
  constructor(){
    super()
    this.state = {
      bracketIDs: []
    }
  }

  componentDidMount(){
    axios.get('/api/allBracketIds').then(response => {
      this.setState({
        bracketIDs: response.data
      })
    })
  }


render(){
  const displayBrackets = this.state.bracketIDs.map(bracket => {
    return (
      <Link key={bracket.bracketid} to={`/bracket/${bracket.bracketid}`}>
      <div>{bracket.bracketid}</div>
      </Link>
    )
  })
  return(
    <div>
      {displayBrackets}
    </div>
  )
}
}
export default AllBrackets