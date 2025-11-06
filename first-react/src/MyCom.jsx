
import React , {useState, useEffect} from 'react';

function MyCom(){

     const [count ,setCount] = useState(0);
     const [color ,setColor] = useState("red");


     useEffect (() =>{
       document.title =  `Count is ${count}  ${color}`;
     }, [count , color] );

     function AddCount()
     {  
        setCount (c => c + 1)
     }

      function Substract()
      {
        setCount (c => c - 1)
      }

      function  changecolor()
      {
        setColor( c=> c === "green" ? "red" :"green" );
      }

     return(<>
        <p  style={{color :color}}>Count : {count}</p>

        <button onClick={AddCount}>Add</button>
        <button onClick={Substract}>Substract</button>  <br/>

         <button onClick={changecolor}>change</button>
     </>)
}


export default MyCom;