import React from "react";

import GameInput from "../components/gameInput";
import Games from "../components/games";

class GamesContainer extends React.Component {
  render() {
    return (
      <div>
        console.log('testing');
        <GameInput publisher={this.props.publisher} />
        <br />
        <Games games={this.props.publisher && this.props.publisher.games} />
      </div>
    );
  }
}

export default GamesContainer;
