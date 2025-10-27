import Student  from "./Student.jsx"

function App() {

    return(
 
     <>
         {/* if we are passing a value and not string literal we have to inclose it witth curly brace */}
      
       <Student  name="Spongebob" age={30}  isStudent= {true}/>
       <Student  name="Patrick"  age ={42} isStudent={false}/>
       <Student  name="Squidwadr"  age={50} isStudent={true}/>
       <Student  name="sandy"  age={20} isStudent={true}/>
      
    </>
     

       
    );
}

export default App
