
import React from 'react'
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
     <h3><Link to="/">Home</Link></h3>
  <h3><Link to="/about">About</Link></h3>
  <h3><Link to="/login">LogIn</Link></h3>
    </div>
  )
}

export default Navbar
