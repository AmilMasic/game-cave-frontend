import React from 'react';

const Publisher = (props) => {

  let publisher = props.publishers[props.match.params.id - 1];

  return (
    <li>
      {publisher ? publisher.name : null} - {publisher ? publisher.established : null} - {publisher ? publisher.gamestore : null}
    </li>
  )
}

export default Publisher;
