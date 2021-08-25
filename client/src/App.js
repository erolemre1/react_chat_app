import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>


        <Navbar />
        <Switch>
          <Route path="/" component={About} />

        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>
}
export default App;
