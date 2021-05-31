import React from 'react';

const Game = (props) => {

  const handleDelete = (game) => {

    props.deleteGame(game.id, game.publisher_id)
  }

  let publisher = props.publishers.find(publisher => publisher.id == props.match.params.id)
  let game = publisher.games.find(game => game.id == props.match.params.game_id)

  return (
    <div>
      <h2>
        Game Title: {game ? game.title : null}
      </h2>
      <h4>
        Game Genre: {game ? game.genre : null}
      </h4>
      <h4>
        Platform: {game ? game.platform : null}
      </h4>
      <p>
        Description {game ? game.description : null}
      </p>
    </div>
  )
}

export default Game;
