import React, { Component } from 'react';
import WantedAd from '../WantedAd/WantedAd'
import './Homepage.css';



class Homepage extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="row homepage-header">
        <div className="col-sm-12">
        <h1> What We Do</h1>
        <h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h3>
        </div>
        </div>

        <div className="row homepage-wanted-ads">
        <div className="col-md-4">
        <WantedAd />
        </div>
        <div className="col-md-4">
        <WantedAd />
        </div>
        <div className="col-md-4">
        <WantedAd />
        </div>
        </div>


      </div>
    );
  }
}

export default Homepage;