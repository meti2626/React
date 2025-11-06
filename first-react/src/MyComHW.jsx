
import React, {useState , useEffect} from 'react';

function MyComHW(){

const [width , setWidth] = useState (window.innerWidth);
const [height , setHeight] = useState (window.innerHeight);




useEffect ( () => {

  window.addEventListener ('resize' , handleResize);  

  return () => {
    window.removeEventListener("resize" , handleResize)
   }
} , [] );

useEffect ( () => { 
  document.title = `Size: ${width} X ${height}`;
} , [width , height] );


console.log ('rendering');

function handleResize(){ 

setWidth (window.innerWidth);
setHeight (window.innerHeight);

 }  

return(<>
   <p>Width : {width}px </p>
   <p>Height : {height}px </p>
</>)


}

export  default MyComHW;