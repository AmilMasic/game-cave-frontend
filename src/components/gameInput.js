import React from 'react';

import {connect} from 'react-redux';
import {addGame} from '../actions/addGame';

import {Form, Button } from 'react-bootstrap';

class GameInput extends React.Component {

  state = {
    title: '',
    genre: '',
    release_date: '',
    completed: false,
    platform: '',
    description: '',
  }

  handleOnChange = (event) => {
   const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;

   this.setState({
     [name]: value
   });
 }

  handleOnSubmit = (event) => {
    event.preventDefault()

    this.props.addGame(this.state, this.props.publisher.id)

    this.setState({
      title: '',
      genre: '',
      release_date: '',
      completed: false,
      platform: '',
      description: '',
    })
  }

  render(){

    return (
      <div>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label> Game Title </Form.Label>
            <Form.Control
            type="text"
            placeholder="title"
            value={this.state.title}
            name="title"
            onChange={this.handleOnChange}
            />
          </Form.Group>

          <Form.Group controlId="formGenre">
            <Form.Label> Genre </Form.Label>
            <Form.Control
            type="text"
            placeholder="Action-RPG"
            value={this.state.genre}
            name="genre"
            onChange={this.handleOnChange}
            />
          </Form.Group>

          <Form.Group controlId="formReleaseDate">
            <Form.Label> Release Date </Form.Label>
            <Form.Control
            type="text"
            placeholder="1999"
            value={this.state.release_date}
            name="release_date"
            onChange={this.handleOnChange}
            />
          </Form.Group>

          <Form.Group controlId="formGameCompleted">
            <Form.Check
            type="checkbox"
            checked={this.state.completed}
            id="customControlAutoSizing"
            name="completed"
            label="Did you finish the game?"
            onChange={this.handleOnChange}
            />
          </Form.Group>

          <Form.Group controlId="formPlatform">
            <Form.Label> What platform did you play on? </Form.Label>
            <Form.Control
            type="text"
            placeholder="PS4"
            value={this.state.platform}
            name="platform"
            onChange={this.handleOnChange}
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label> Description </Form.Label>
            <Form.Control
            type="text"
            placeholder="The game is set in..."
            value={this.state.description}
            name="description"
            onChange={this.handleOnChange}
            />
          </Form.Group>
          < Button variant="primary" type="submit"> Submit </Button>
        </Form>
      </div>
    )
  }

}

export default connect(null, {addGame})(GameInput)
