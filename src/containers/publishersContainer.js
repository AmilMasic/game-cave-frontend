import React from 'react';
import {connect} from 'react-redux';

import {fetchPublishers} from '../actions/fetchPublishers';
import PublisherInput from '../components/publisherInput';
import Publishers from '../components/publishers';

class PublishersContainer extends React.Component {

  componentDidMount(){
    this.props.fetchPublishers()
  }

  render(){

    return(
      <div>
        < PublisherInput />
        < Publishers />
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
