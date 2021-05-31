import React from 'react';
import {Route, Link} from 'react-router-dom';
// import {connect} from 'react-redux';
// import {deleteGame} from '../actions/deleteGame';
import Game from './game';


const Games = (props) => {



  return (

    <div>
      <h2> Games by the publisher: </h2>
     {props.games && props.games.map(game =>
      <div key={game.id}>
        < Link to={`/publishers/${game.publisher_id}/games/${game.id}`}>{game.title}</Link>
      </ div>)}
    </div>
  )
}

export default Games;
