
//click event = An interaction when a user clicks on specific elemnt we ccan respond to clicks by passing a callback to the onClick vent handler



 function  Profilepic() {


     const imageUrl = './src/assets/here.jpg';

     const handleClick = (e) =>e.target.style.display='none';

     return(<img onClick={ (e) =>handleClick(e)} src={imageUrl}></img>)
 }
 
 export default Profilepic
