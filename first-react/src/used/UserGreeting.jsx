
//conditional rendering = allows you to control what gets rendered in your application  based on certain conditins (sjow,hide,or change )



function UserGreeting (props)
{

const WelcomeMessage =  <h2 className= 
    "Welcome-message"  >Welcome {props.username}</h2>
const logInMsg =  <h2 className="logIn-prmt">please log in first</h2>

   return( props.isLoggedIn ? WelcomeMessage  :  logInMsg);

}

export default UserGreeting