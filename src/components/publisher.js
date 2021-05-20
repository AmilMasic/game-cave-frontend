import React from 'react';
import GamesContainer from '../containers/gamesContainer'

const Publisher = (props) => {

  // let publisher = props.publishers[props.match.params.id - 1];
  let publisher = props.publishers.publishers.filter(publisher => publisher.id == props.match.params.id)[0]
  return (
    <div>
      <li>
        {publisher ? publisher.name : null} - {publisher ? publisher.established : null} - {publisher ? publisher.gamestore : null}
      </li>
      <br/>
      <GamesContainer publisher={publisher}/>
    </div>
  )
}

export default Publisher;
