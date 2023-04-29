import React from "react";
import { Router, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return( 
  <>
  <NavBar/>
  <BrowserRouter>
  <Switch>
  <Router path="/actors">
    <Actors />
  </Router>,
  <Router path="/directors">
    <Directors />
  </Router>,
  <Router path="/movies">
    <Movies/>
  </Router>,
  <Router exact path="/">
    <Home/>
  </Router>,
  </Switch>,
  </BrowserRouter>,
  
  
  
  </>
  );
}

export default App;
