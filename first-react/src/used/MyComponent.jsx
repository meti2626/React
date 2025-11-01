


//React-hook - Special function that allows func component to use react features


//useState() - React hook that allows creation of statefull var  AND setter function to update its value in the virtual dom


import React , {useState} from "react"; 

function MyComponent() {

const [name , setName]  =  useState("Guest");
const [age, setAge]  = useState(0);
const [isStudent , setStatus] = useState(true);

const updateName = () => {

        setName("Spongebob");
}

const incrementAge = () => {
   setAge(age + 2);
}

const toogle = () => {
   setStatus( !isStudent);
}


return (
    <div>
         <p>Name: {name}</p>
         
         <button onClick={updateName}>Set Name</button>
         
         <p>Age: {age}</p>
         <button onClick={incrementAge}>Set Age</button>

          <p>isStudent: {isStudent  ? "Yes" : "No"}</p>
         <button onClick={toogle}>Status</button>
    </div>

    
  );
}



export default MyComponent;