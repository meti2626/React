import About from "./About.jsx";
import Home from "./Home.jsx";
import LogIn from "./LogIn.jsx";

import Tutorial from "./Tutorial.jsx";
import { Routes, Route, Navigate } from "react-router";
import Navbar from "./Navbar.jsx";
import ErrorPage from "./ErrorPage.jsx";
import JsTube from './JsTube'
import NodeJs from './NodeJs'
import ReactTube from './ReactTube'


function App() {
  return (  
          
   <div>
    {/* <Navbar /> */}
    
    <Routes>
      
      <Route element={<Navbar/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
       
        <Route path="/tutorial" element={<Tutorial/>}>
            <Route path="react" element={<ReactTube/>} />
            <Route path="js" element={<JsTube/>} />
            <Route path="node" element={<NodeJs/>} />
      </Route>
     </Route>
      


         
        {/* <Route path="/*" element={<Navigate to="/"/>}/> */}
        

    </Routes>

   </div>
   
  );
}


export default App;