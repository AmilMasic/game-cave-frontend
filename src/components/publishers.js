import React from 'react';
import Publisher from './publisher';

const Publishers = (props) => {
  return (
    <div>
      {props.publishers.map(publisher => <li key={publisher.id}><Publisher publisher={publisher} /></ li>)}
    </div>
  )
}

export default Publishers
