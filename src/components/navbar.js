import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/publishers' style={{paddingRight: '10px'}}>Publishers  </Link>
      <Link to='/publishers/new'> Add Publisher</Link>
    </div>
  )
}

export default NavBar
