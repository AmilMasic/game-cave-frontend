import React from 'react';

export default class PublisherInput extends React.Component {

  state = {
    name: '',
    established: '',
    gamingStore: ''
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return(
      <div>
        <form>
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
            value={this.state.gamingStore}
            name='gamingStore'
            onChange={this.handleOnChange}
          /><br/>
        </form>
      </div>
    )
  }

}
