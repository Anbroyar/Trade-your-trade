import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import HelpWanted from './components/HelpWanted';
import Navbar from './components/Navbar';
import Profile from './components/Profile/ProfilePage';
import SearchPage from './components/SearchPage/SearchPage';


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
            <Route exact path="/searchpage" component={SearchPage} />
          </Switch>
          </Fragment> 
        </Router>
      </div>
    );
  }
}

export default App;
