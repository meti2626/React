import './Navbar.css'
import React from 'react'
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div  className='header'>
    <div><Link className='link' to="/"><h2>Logo</h2></Link></div>
      
      <div>
        <ul>
         
          <li><Link className='link'   to="/about">About</Link></li>
          <li><Link className='link'   to="/login">LogIn</Link></li>
           <li><Link className='link'   to="/tutorial">Tutorial</Link></li>
        </ul>


      </div>


    </div>
  )
}

export default Navbar
