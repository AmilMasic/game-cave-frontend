import React from 'react';
import {connect} from 'react-redux';
import {fetchPublishers} from './actions/fetchPublishers';
import PublisherContainer from './containers/publishersContainer';

class App extends React.Component {



  render(){
    return (
      <div className="App">
        <PublisherContainer/>
      </div>
    );
  }
}



export default connect()(App);
