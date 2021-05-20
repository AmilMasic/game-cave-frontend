import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'

import GameInput from '../components/gameInput';
import Games from '../components/games';

class GamesContainer extends React.Component {

  render(){
    return (
      <div>
        <GameInput publisher={this.props.publisher}/><br/>
        <Games games={this.props.publisher && this.props.publisher.games}/>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    games: state.games
  }
}
export default connect(mapStateToProps)(GamesContainer);
