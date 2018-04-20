import React from "react";
import './login.css';
export default function Login() {
  return (
    <div className='title'>
    <div>DEVBRACKET</div>
    <div>
      <a className='login' href={process.env.REACT_APP_LOGIN}>
        Login
      </a>
    </div>
    </div>
  );
}