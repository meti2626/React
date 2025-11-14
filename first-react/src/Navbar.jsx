import './Navbar.css'
import React from 'react'
import { Link,NavLink, Outlet } from "react-router";

const Navbar = () => {
return (

  <div>
    <div  className='header'>
    <div><Link className='link' to="/"><h2>Logo</h2></Link></div>
      
      <div>
        <ul>
         
          <li><NavLink className='link'   to="/about">About</NavLink></li>
          <li><NavLink className='link'   to="/login">LogIn</NavLink></li>
           <li><NavLink className='link'   to="/tutorial">Tutorial</NavLink></li>
        </ul>


      </div>


    </div>
    <Outlet/>
 </div> 
  )
}

export default Navbar
