import React from 'react';
import {connect} from 'react-redux';
import {addPublisher} from '../actions/addPublisher'

class PublisherInput extends React.Component {

  state = {
    name: '',
    established: '',
    gamestore: '',
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addPublisher(this.state)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Publisher Name </label>
          <input
            type='text'
            placeholder='name'
            value={this.state.name}
            name='name'
            onChange={this.handleOnChange}
          /><br/>
          <label>Established: </label>
          <input
            type='text'
            placeholder='1986'
            value={this.state.established}
            name='established'
            onChange={this.handleOnChange}
          /><br/>
          <label>Gaming Store: </label>
          <input
            type='text'
            placeholder='Origin'
            value={this.state.gamestore}
            name='gamestore'
            onChange={this.handleOnChange}
          /><br/>
          <input type='submit'/>
        </form>
      </div>
    )
  }

}

export default connect(null, {addPublisher})(PublisherInput)
