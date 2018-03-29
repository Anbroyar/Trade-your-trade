import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HelpWanted from './components/HelpWanted'
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/helpwanted" component={HelpWanted} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
