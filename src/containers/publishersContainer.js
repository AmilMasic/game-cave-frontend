import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'

import {fetchPublishers} from '../actions/fetchPublishers';
import PublisherInput from '../components/publisherInput';
import Publishers from '../components/publishers';
import Publisher from '../components/publisher';
import Game from '../components/game';
import NavBar from '../components/navbar';

class PublishersContainer extends React.Component {

  componentDidMount(){
    this.props.fetchPublishers()
  }

  render(){
    debugger;
    return(
      <div>
        <NavBar/>
        <br/>
        <Switch>
          < Route path='/publishers/new' component={PublisherInput} />
          < Route exact path='/publishers/:id' render={(routerProps) => < Publisher {...routerProps} publishers={this.props.publishers}/> } />
          < Route path='/publishers' render={() => < Publishers publishers={this.props.publishers} /> } />
          < Route exact path='/publishers/:id/games/:game_id' render={(routerProps) => < Game {...routerProps} games={this.props.games}/> } />

        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    publishers: state.publishers
  }
}

export default connect(mapStateToProps, {fetchPublishers})(PublishersContainer)
