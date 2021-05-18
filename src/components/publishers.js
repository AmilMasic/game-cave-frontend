import React from 'react';

const Publishers = (props) => {
  return (
    <div>
      {props.publishers.map(publisher => <li key={publisher.id}>{publisher.name} - Established: {publisher.established} - gamestore: {publisher.gamestore}</ li>)}
    </div>
  )
}

export default Publishers
