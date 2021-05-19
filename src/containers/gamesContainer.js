import React from 'react';

import GameInput from '../components/gameInput';
import Games from '../components/games';

class GamesContainer extends React.Component {

  render(){
    return (
      <div>
        GamesContainer
        <GameInput />
        <Games games={this.props.publisher && this.props.publisher.games} />
      </div>
    )
  }

}

export default GamesContainer;
