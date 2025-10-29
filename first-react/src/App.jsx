//conditional rendering = allows you to control what gets rendered in your application  based on certain conditins (sjow,hide,or change )


import List from './List.jsx';

function App() {
   

     const fruits = [{id:1,name:"apple" ,cal:95} ,
                   {id:2, name:"orange", cal:45},
                   {id:3,name:"banana", cal:105}, 
                   {id:4,name:"cocanat" , cal:159} ,
                   {id:5,name:"pinapple" , cal: 37}];


      const vegetable = [{id:6,name:"potato" ,cal:110} ,
                         {id:7, name:"celery", cal:15},
                        {id:8,name:"carrots", cal:25}, 
                        {id:9,name:"corn" , cal: 63} ,
                         {id:10,name:"brocolli" , cal: 50}];


return(
 
   <>
      {fruits.length > 0 ?   <List  items={fruits} category="Fruits" />  : null }
      {vegetable.length > 0 ?   <List  items={vegetable} category="Vegetables" />  : null }

      </>
 );
}

export default App
