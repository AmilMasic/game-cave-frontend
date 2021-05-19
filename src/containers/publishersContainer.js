import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom'

import {fetchPublishers} from '../actions/fetchPublishers';
import PublisherInput from '../components/publisherInput';
import Publishers from '../components/publishers';
import Publisher from '../components/publisher';

class PublishersContainer extends React.Component {

  componentDidMount(){
    this.props.fetchPublishers()
  }

  render(){

    return(
      <div>
        < Route path='/publishers/new' component={PublisherInput} />
        <br/>
        < Route path='/publishers/:id' render={(routerProps) => < Publisher {...routerProps} publishers={this.props.publishers}/> } />
        < Route exact path='/publishers' render={() => < Publishers publishers={this.props.publishers} /> } />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    publishers: state.publishers
  }
}

export default connect(mapStateToProps, {fetchPublishers})(PublishersContainer)
