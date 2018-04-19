import React, { Component } from 'react';
import './reset.css'
import './App.css';
import Nav from "./Components/Nav/Nav";
import routes from './routes';

class App extends Component {
  render() {
    const authPage = window.location.href
    // let nav = authPage !== 'http://localhost:3000/#/' ? <Nav /> : null;
    let nav = <Nav/>
    return (
      

      <div className="App">
   
        {nav}
     
      {routes}
      </div>
    );
  }
}

export default App;
