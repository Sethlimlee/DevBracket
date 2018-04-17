import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <div className="nav">
      <div>
        <Link className='home' to="/home">D E V B R A C K E T</Link>
      </div>
      <div>
        <Link className='navlinks' to="/bracketcreator">Bracket Creator</Link>
      </div>
      <div>
        <Link className='navlinks' to="/joinbrackets">Join Bracket</Link>
      </div>
      <div>
        <Link className='navlinks' to="/allbrackets">All Brackets</Link>
      </div>
      <div>
        <Link className='navlinks' to="/rankings">Rankings</Link>
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
