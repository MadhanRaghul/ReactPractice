import React from 'react'
import { Link } from 'react-router-dom'

const Postpage = () => {
  return (
    <div>
      <h1>Postpage</h1>
        <Link to='/postpage/1'>Post 1</Link> <br />
        <Link to='/postpage/2'>Post 2</Link> <br />
        <Link to='/postpage/3'>Post 3</Link> <br />
    </div>
  )
}

export default Postpage