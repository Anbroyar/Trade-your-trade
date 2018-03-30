import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomepageLayout from './components/hompageLayout';

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
