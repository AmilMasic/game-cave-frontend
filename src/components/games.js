import React from 'react';


const Games = (props) => {
  return (
    <div>
      {props.games && props.games.map(game =>
        <li key={game.id}>{game.title} - {game.genre}</li>
      )}
    </div>
  )
}

export default Games;
