import React from "react";
import './login.css';
export default function Login() {
  return (
    <div className='title'>
    <h1>DEVBRACKET</h1>
    <div>
      <a className='login' href={process.env.REACT_APP_LOGIN}>
        Login
      </a>
    </div>
    </div>
  );
}