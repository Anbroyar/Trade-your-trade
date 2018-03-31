import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import HelpWanted from './components/HelpWanted';
import Navbar from './components/Navbar';

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
          </Switch>
          </Fragment> 
        </Router>
      </div>
    );
  }
}

export default App;
