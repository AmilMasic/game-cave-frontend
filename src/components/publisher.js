import React from 'react';
import GamesContainer from '../containers/gamesContainer'

const Publisher = (props) => {

  let publisher = props.publishers.filter(publisher => publisher.id == props.match.params.id)[0]
  return (
    <div>
      <h3>
        {publisher ? publisher.name : null} - {publisher ? publisher.established : null} - {publisher ? publisher.gamestore : null}
      </h3>
      <br/>
      <GamesContainer publisher={publisher}/>
    </div>
  )
}

export default Publisher;
