import About from "./About.jsx";
import Home from "./Home.jsx";
import LogIn from "./LogIn.jsx";
import {Routes, Route} from "react-router"
import { Link } from "react-router";
import Navbar from "./Navbar.jsx";
import ErrorPage from "./ErrorPage.jsx";

function App() {
  return (  
          
   <div>
<Navbar />
    <Routes>
       <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/*" element={<ErrorPage />}/>
    </Routes>

   </div>
   
  );
}


export default App;