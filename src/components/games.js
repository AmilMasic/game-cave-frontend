import React from 'react';
import {connect} from 'react-redux';
import {deleteGame} from '../actions/deleteGame';


const Games = (props) => {

  const handleDelete = (game) => {
  
    props.deleteGame(game.id, game.publisher_id)
  }
  return (
    <div>
      {props.games && props.games.map(game =>
        <li key={game.id}>{game.title} - {game.genre}<button onClick={() => handleDelete(game)}>Delete</button></li>
      )}
    </div>
  )
}

export default connect(null, {deleteGame})(Games);
