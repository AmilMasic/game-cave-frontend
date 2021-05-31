import React from 'react';
import {connect} from 'react-redux';
import {addPublisher} from '../actions/addPublisher';

import {Form, Button} from 'react-bootstrap';

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
    this.setState({
      name: '',
      established: '',
      gamestore: '',
    })
  }

  render(){
    return(
      <div>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group controlId="formName">
            <Form.Label> Publisher Name </Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              value={this.state.name}
              name="name"
              onChange={this.handleOnChange}
               />
          </Form.Group>

          <Form.Group controlId="formEstablished">
            <Form.Label> Year Of Establishement </Form.Label>
            <Form.Control
              type="text"
              placeholder="1986"
              value={this.state.established}
              name="established"
              onChange={this.handleOnChange}
               />
          </Form.Group>

          <Form.Group controlId="formStore">
            <Form.Label> Gaming Store </Form.Label>
            <Form.Control
              type="text"
              placeholder="Origin"
              value={this.state.gamestore}
              name="gamestore"
              onChange={this.handleOnChange}
               />
          </Form.Group>
          < Button variant='primary' type='submit'> Submit </Button>
        </Form>
      </div>
    )
  }

}

export default connect(null, {addPublisher})(PublisherInput)
