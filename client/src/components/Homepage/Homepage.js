import React, { Component } from 'react';
import WantedAd from '../WantedAd/WantedAd';
import './Homepage.css';
import Carousel from '../Carousel/Carousel';



class Homepage extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="row homepage-header">
        <div className="col-sm-12">
          <Carousel />
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
