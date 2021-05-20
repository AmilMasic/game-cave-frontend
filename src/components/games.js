import React from 'react';


const Games = (props) => {
  return (
    <div>
      {props.games.games && props.games.games.map(game =>
        <li key={game.id}>{game.title} - {game.genre}</li>
      )}
    </div>
  )
}

export default Games;
