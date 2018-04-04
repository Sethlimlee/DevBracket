import React from "react";

export default function Login() {
  return (
    <div className='App'>
    <p> </p>
      <a href={process.env.REACT_APP_LOGIN}>
        <button className="">Login</button>
      </a>
    </div>
  );
}