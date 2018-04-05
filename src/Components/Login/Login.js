import React from "react";

export default function Login() {
  return (
    <div className='App'>
    <h1>D E V B R A C K E T</h1>
    <p> </p>
      <a href={process.env.REACT_APP_LOGIN}>
        <button className="">Login</button>
      </a>
    </div>
  );
}