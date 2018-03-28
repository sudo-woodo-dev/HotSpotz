import React, { Component } from 'react';
import '../css/App.css';
import Home from './Home.js';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Route exact path="/" render ={props=> (
            <Home />
        )} />
      </div>
      </Router>
    );
  }
}

export default App;
