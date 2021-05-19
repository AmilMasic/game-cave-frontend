import React from 'react';

const Publisher = (props) => {

  return (
    <li>
      {props.publisher.name} - {props.publisher.established} - {props.publisher.gamestore}
    </li>
  )
}

export default Publisher;
