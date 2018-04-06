import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import HelpWanted from './components/HelpWanted';
import Navbar from './components/Navbar';
import Profile from './components/Profile/ProfilePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/helpwanted" component={HelpWanted} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
          </Fragment> 
        </Router>
      </div>
    );
  }
}

export default App;
