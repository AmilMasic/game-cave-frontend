import React from 'react';

export default class PublisherInput extends React.Component {

  state = {
    name: '',
    established: '',
    gamingStore: ''
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
          /><br/>
          <label>Established: </label>
          <input
            type='text'
            placeholder='1986'
            value={this.state.established}
          /><br/>
          <label>Gaming Store: </label>
          <input
            type='text'
            placeholder='Origin'
            value={this.state.gamingStore}
          /><br/>
        </form>
      </div>
    )
  }

}
