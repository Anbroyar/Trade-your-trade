import React, { Component } from 'react';
import SearchBar from './SearchBar'

class SearchPage extends Component {

    render() {
      return (
        <div className="container-fluid">
            Heres an awesome search page
            <SearchBar />
        </div>
      );
    };
  }
  
  export default SearchPage;