import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div id='menuDiv'>
        <Link to={'/'}><button className='menuButton'>Home</button></Link>
        <Link to={'/favorites'}><button className='menuButton'>Favorites</button></Link>
        <br/>
        <hr/>
    </div>
  )
}

