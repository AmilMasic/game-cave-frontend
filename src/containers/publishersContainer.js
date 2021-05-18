import React from 'react';
import PublisherInput from '../components/publisherInput'
import Publishers from '../components/publishers'

export default class PublishersContainer extends React.Component {
  render(){

    return(
      <div>
        < PublisherInput />
        < Publishers />
      </div>
    )
  }
}
