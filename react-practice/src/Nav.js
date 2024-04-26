import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search, setSearch}) => {
  return (
    <div className='Navbar'>
      <form className='searchForm' onSubmit={(e) => e.prevent.default()}>
        <label htmlFor="search"></label>
        <input type="text" 
          placeholder='Search posts' 
          id='search' 
          value={search}
          onChange={(e) => setSearch(e.target.value)}  
        />
      </form>

      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/post'>Post</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>


    </div>
  )
}

export default Nav