import React from 'react';
import Publisher from './publisher';

const Publishers = (props) => {
  return (
    <div>
      {props.publishers.map(publisher => <div key={publisher.id}><Publisher publisher={publisher} /></ div>)}
    </div>
  )
}

export default Publishers
