import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Team from "./Components/Team/Team";
import Bracket from "./Components/Bracket/Bracket";


export default (
  <Switch>
    <Route exact path = '/' component={Login}/>
    <Route path = '/home' component={Home}/> 
    <Route path = '/team/:team_name' component={Team}/> 
    <Route path = '/bracket' component={Bracket}/> 
  </Switch>
)

//this.props.match.params.team_name