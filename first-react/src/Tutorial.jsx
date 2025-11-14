import './Tutorial.css'
import React from 'react'
import { Link, Outlet } from 'react-router'

const Tutorial = () => {
  return (

   <div className='tutor' style={{textAlign : 'center'}}>
      <h1>Tutorials</h1>

      <ul>
        
        <li><Link className='link' to="react">ReactJs</Link></li>
        <li><Link className='link' to="js">JavaScript</Link></li>
        
        <li><Link className='link' to="node">Nodejs</Link></li>
      </ul>
        <Outlet/>
     
    </div>

  )
}

export default Tutorial
