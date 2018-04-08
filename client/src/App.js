import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import HelpWanted from './components/HelpWanted';
import Navbar from './components/Navbar';
import Profile from './components/Profile/ProfilePage';
import SearchPage from './components/SearchPage/SearchPage';
import ProfilePage from './components/Profile/ProfilePage';
import axios from 'axios';
import {ApiContext} from './components/ApiContext';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      // Initial api data
      user: null,
      skills: [],
      jobs: [],

      // These update the global state for react that gets passed down into ApiContext,
      // It will re-render all ApiContext.Consumer child/subscriber functions.
      setUser: user => {
        this.setState({ user })
        return user;
      },
      setSkills: skills => {
        this.setState({skills})
        return skills;
      },
      setJobs: jobs => {
        this.setState({jobs})
        return jobs;
      },

      // These are the api calls, dont forget to add form data to the call.
      // These are functions on the state, not methods on the component instance.
      // Auth related
      login: (form) => axios.post('api/auth', form).then(res => res.data),
      register: (form) => axios.post('api/users', form).then(res => res.data),

      // User related
      fetchUser: () => axios.get('api/auth').then(res => res.data),
      updateUser: (form) => axios.put('api/users', form).then(res => res.data).then(this.state.setUser),

      // Relationship queries, params can be used to search by certain properties on the backen
      fetchSkills: (params) => axios.get('skills', params).then(res=> res.data),
      fetchJobs: (params) => axios.get('jobs', params).then(res => res.data),

      // These perform auth and register actions, and they also update global state afterwards (.then)
      loginAndSetUser: form => this.state.login(form).then(this.state.setUser),
      registerAndSetUser: form => this.state.register(form).then(this.state.setUser)
    }
  }
    

  componentDidMount() {
    // Grab all data and data related to user if they are auth'ed
    // Note this first call will fail if not logged in, but thats okay.
    this.state.fetchUser().then(this.state.setUser);
    this.state.fetchSkills().then(this.state.setSkills);
    this.state.fetchJobs().then(this.state.setJobs);
  }

  render() {
    return (
      <ApiContext.Provider value={this.state}>
        <div className="App">
          <Router>
            <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/helpwanted" component={HelpWanted} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/searchpage" component={SearchPage} />
              <Route exact path="/profilepage" component={ProfilePage} />
            </Switch>
            </Fragment> 
          </Router>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
