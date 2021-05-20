import React from 'react';
import {connect} from 'react-redux';
import {fetchPublishers} from './actions/fetchPublishers';
import PublishersContainer from './containers/publishersContainer';
import GamesContainer from './containers/gamesContainer';

class App extends React.Component {



  render(){
    return (
      <div className="App">
        <PublishersContainer/>
      
      </div>
    );
  }
}



export default connect()(App);
