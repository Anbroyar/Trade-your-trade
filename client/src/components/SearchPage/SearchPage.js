import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ApiContext from '../ApiContext';
import WantedAd from '../WantedAd';

class SearchPage extends Component {

    render() {
      return (
        <ApiContext.Consumer>
          {globalState => {
            return  <div className="container-fluid">
                <SearchBar />
                {globalState.jobs.map(job => 
                  <WantedAd
                    key={job.jobType} 
                    username={globalState.user.userName}
                    totalHours={job.totalhours}
                    jobName={job.jobName}
                    userSkills={globalState.user.skills}
                    // distance={job.distance}
                  />
                )}
            </div>
          }}
       
        </ApiContext.Consumer>
      );
    };
  }
  
  export default SearchPage;