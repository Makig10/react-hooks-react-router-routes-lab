import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router ,} from "react-router-dom";
import App from "./components/App";
import NavBar from "./components/NavBar";

ReactDOM.render(
  <>
  <NavBar/>
  <Router>
    <App />
  </Router>,
  
  </>,
  document.getElementById("root")
);
