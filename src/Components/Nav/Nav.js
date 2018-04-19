import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
  }
  myFunction() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {
    console.log(this.state.toggle)
    return (
      <div>
        {this.state.toggle === true 
        ? 
        <div className="mobilenav">
        
       
          <div>
            <Link onClick={() => this.myFunction()} className="MobileLinks" to="/bracketcreator">
              Bracket Creator
            </Link>
          </div>
          <div>
            <Link onClick={() => this.myFunction()} className="MobileLinks" to="/joinbrackets">
              Join Bracket
            </Link>
          </div>
          <div>
            <Link onClick={() => this.myFunction()} className="MobileLinks" to="/allbrackets">
              All Brackets
            </Link>
          </div>
          <div>
            <Link onClick={() => this.myFunction()} className="MobileLinks" to="/rankings">
              Rankings
            </Link>
          </div>
          <div>
            <a onClick={() => this.myFunction()} className="logoutmobile" href={process.env.REACT_APP_LOGOUT}>
              <p>Logout</p>
            </a>
          </div>
        
        
        </div>
        : ""}
        <div className="nav">
          <div>
            <Link className="home" to="/home">
              D E V B R A C K E T
            </Link>
          </div>
          <div>
            <Link className="navlinks" to="/bracketcreator">
              Bracket Creator
            </Link>
          </div>
          <div>
            <Link className="navlinks" to="/joinbrackets">
              Join Bracket
            </Link>
          </div>
          <div>
            <Link className="navlinks" to="/allbrackets">
              All Brackets
            </Link>
          </div>
          <div>
            <Link className="navlinks" to="/rankings">
              Rankings
            </Link>
          </div>
          <div>
            <a className="logout" href={process.env.REACT_APP_LOGOUT}>
              <p>Logout</p>
            </a>
          </div>

          <div onClick={() => this.myFunction()}>
            <svg
              className="menu-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <path
                fill="#fff"
                d="M8.667 15h30c.552 0 1-.447 1-1s-.448-1-1-1h-30c-.552 0-1 .447-1 1s.447 1 1 1zM8.667 37h30c.552 0 1-.447 1-1s-.448-1-1-1h-30c-.552 0-1 .447-1 1s.447 1 1 1zM8.667 26h30c.552 0 1-.447 1-1s-.448-1-1-1h-30c-.552 0-1 .447-1 1s.447 1 1 1z"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
