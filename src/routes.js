import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Team from "./Components/Team/Team";
import Bracket from "./Components/Bracket/Bracket";
import BracketCreator from './Components/BracketCreator/BracketCreator'
import AllBrackets from './Components/AllBrackets/AllBrackets'
import Rankings from './Components/Rankings/Rankings';
import JoinBracket from './Components/JoinBracket/JoinBracket';
import FindBracket from './Components/FindBracket/FindBracket';
import Profile from './Components/Profile/Profile';



export default (
  <Switch>
    <Route exact path = '/' component={Login}/>
    <Route path = '/home' component={Home}/> 
    <Route path = '/team/:team_name' component={Team}/> 
    <Route path = '/bracket/:id' component={Bracket}/> 
    <Route path = '/findbracket/:id' component={FindBracket}/> 
    <Route path = '/bracketcreator' component={BracketCreator}/>
    <Route path = '/allbrackets' component={AllBrackets}/>  
    <Route path = '/joinbrackets' component={JoinBracket}/>
    <Route path = '/rankings' component={Rankings}/>
    <Route path = '/profile/:id' component={Profile}/> 
  </Switch>
)

//this.props.match.params.team_name