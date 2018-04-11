import React from "react";
import {Link} from 'react-router-dom';
import './nav.css'

function Nav() {
  return (
    <div className="nav">
      <div>D E V B R A C K E T</div>
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        <Link to="/bracketcreator">Bracket Creator</Link>
      </div>
      <div>
        <Link to="/joinbrackets">Join A Bracket</Link>
      </div>
      <div>
        <Link to="/allbrackets">Brackets</Link>
      </div>
      <div>
        <Link to="/rankings">Rankings</Link>
      </div>
      <div>
      <a href="http://localhost:3005/login/logout">
          <p>Logout</p>
        </a>
      </div>
    </div>
  );
}

export default Nav;
