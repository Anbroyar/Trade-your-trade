import React, { Component } from 'react';
import SearchBar from './SearchBar';
import './SearchPage.css';

class SearchPage extends Component {

    render() {
      return (
        <div className="container-fluid">
          <h3 className="intro-text">
            Search for a job by the skill you need help with!
          </h3>
          <SearchBar />
        </div>
      );
    };
  }
  
  export default SearchPage;