import React from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteGame} from '../actions/deleteGame';
import Game from './game';


const Games = (props) => {

  const handleDelete = (game) => {

    props.deleteGame(game.id, game.publisher_id)
  }

  return (

    <div>
      <h2> Games by the publisher: </h2>
     {props.games && props.games.map(game =>
      <div key={game.id}>
        < Link to={`/publishers/${game.publisher_id}/games/${game.id}`}>{game.title}</Link>
        <button id='delete' onClick={() => handleDelete(game)}>Delete</button>
      </ div>)}
    </div>
  )
}

export default connect(null, {deleteGame})(Games);
