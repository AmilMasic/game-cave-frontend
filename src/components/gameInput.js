import React from 'react';
import {connect} from 'react-redux';
import {addGame} from '../actions/addGame';

class GameInput extends React.Component {


  state = {
    title: '',
    genre: '',
    release_date: '',
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
  
    this.props.addGame(this.state)
    this.setState({
      title: '',
      genre: '',
      release_date: '',
    })
  }

  render(){
    return (
      <div>
      <form onSubmit={this.handleOnSubmit}>
        <label>Game Title </label>
        <input
          type='text'
          placeholder='title'
          value={this.state.title}
          name='title'
          onChange={this.handleOnChange}
        /><br/>
        <label>Genre: </label>
        <input
          type='text'
          placeholder='RPG'
          value={this.state.genre}
          name='genre'
          onChange={this.handleOnChange}
        /><br/>
        <label>Release Date </label>
        <input
          type='text'
          placeholder='2020'
          value={this.state.release_date}
          name='release_date'
          onChange={this.handleOnChange}
        /><br/>
        <input type='submit'/>
      </form>
      </div>
    )
  }

}

export default connect(null, {addGame})(GameInput)
