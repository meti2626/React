import './Tutorial.css'
import React from 'react'
import { Link, Outlet , NavLink} from 'react-router'

const Tutorial = () => {
  return (
  
   <div className='tutor' style={{textAlign : 'center'}}>
      <h1>Tutorials</h1>

      <ul>
        
        <li><NavLink  to="react" className='link'>ReactJs</NavLink></li>
        <li><NavLink  to="js"  className='link'>JavaScript</NavLink></li>
        
        <li><NavLink  to="node" className='link'>Nodejs</NavLink></li>
      </ul>

       <Outlet/>  
     
    </div>


  )
}

export default Tutorial

// Nested Navigation