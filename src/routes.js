import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Team from "./Components/Team/Team";
import Bracket from "./Components/Bracket/Bracket";
import BracketCreator from './Components/BracketCreator/BracketCreator'
import AllBrackets from './Components/AllBrackets/AllBrackets'


export default (
  <Switch>
    <Route exact path = '/' component={Login}/>
    <Route path = '/home' component={Home}/> 
    <Route path = '/team/:team_name' component={Team}/> 
    <Route path = '/bracket/:id' component={Bracket}/> 
    <Route path = '/bracketcreator' component={BracketCreator}/>
    <Route path = '/allbrackets' component={AllBrackets}/>  
  </Switch>
)

//this.props.match.params.team_name