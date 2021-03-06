import React from 'react';
import { Link} from 'react-router-dom';
import Publisher from './publisher';

const Publishers = (props) => {

  return (

    <div>
      {props.publishers && props.publishers.map(publisher =>
        <div key={publisher.id}>
          < Link to={`/publishers/${publisher.id}`}>{publisher.name}</Link>
        </ div>)}
    </div>
  )

}

export default Publishers
