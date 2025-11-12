import About from "./About.jsx";
import Home from "./Home.jsx";
import {Routes, Route} from "react-router"

function App() {
  return (  

   <div>
    <h1>React Router Setup</h1>
    <Routes>
       <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
    </Routes>

   </div>
   
  );
}


export default App;