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
        <h3> We provide skilled laborers with a platform to exchange services.
        People can negotiate the hourly value of their specific trade, in exchange for the comparable value of someone elses.
        Trade your trade is the best of capitalism, and the best of communism.</h3>
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