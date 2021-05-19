import React from 'react';

import GameInput from '../components/gameInput';
import Games from '../components/games';

class GamesContainer extends React.Component {

  render(){
    return (
      <div>
        GamesContainer
        <GameInput />
        <Games />
      </div>
    )
  }

}

export default GamesContainer;
