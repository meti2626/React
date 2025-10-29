

function List(props){

// but what do we need a uique key ????????????????
  // enclose the array elemnts to make them objects 
   
// see about sort () and map, arrow function
// fruits.sort((a,b) => a.name.localeCompare(b.name));
//fruits.sort((a,b) => b.name.localeCompare(a.name));
 // fruits.sort((a,b) => a.cal - b.cal);      

 //fruits.sort((a,b) => b.cal - a.cal);  


 // rendering based on criteria 


  //  const lowCalFruits = fruits.filter(fruit => fruit.cal < 100);

     
  //  const lowCalFruits = fruits.filter(fruit => fruit.cal>=100);
//conditional rendering = allows you to control what gets rendered in your application  based on certain conditins (sjow,hide,or change )

   const category = props.category;

   const itemList = props.items;


    const listItems = itemList.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;
        {fruit.cal} </li>);


    return (
       <>
            <h3 className="list-cat">{category}</h3>
            <ol className="list-items">{listItems}</ol>
      </>
  );
}

export default List