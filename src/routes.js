import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Team from "./Components/Team/Team";


export default (
  <Switch>
    <Route exact path = '/' component={Login}/>
    <Route path = '/home' component={Home}/> 
    <Route path = '/team' component={Team}/> 
  </Switch>
)