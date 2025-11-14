

import React from 'react'
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h3><Link to="/">Back to home</Link></h3>
       <h1>OOps....the page doesnt exist</h1>
       <h2>404 Error</h2>
    </div>
  )
}

export default ErrorPage
