import React from 'react';
import {connect} from 'react-redux';
import {addGame} from '../actions/addGame';

class GameInput extends React.Component {


  state = {
    title: '',
    genre: '',
    release_date: '',
    completed: false,
  }



  handleInputChange = (event) => {
   const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;

   this.setState({
     [name]: value
   });
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
        <label> Did you finish the game? </label>
        <input
          type='checkbox'
          name='completed'
          checked={this.state.completed}
          onChange={this.handleOnChange}
        />
        <input type='submit'/>
      </form>
      </div>
    )
  }

}

export default connect(null, {addGame})(GameInput)
