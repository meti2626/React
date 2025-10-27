//conditional rendering = allows you to control what gets rendered in your application  based on certain conditins (sjow,hide,or change )

import UserGreeting from './UserGreeting.jsx';

function App() {

return(
 
   <>
    <UserGreeting isLoggedIn={false} username="BroCode" />
           
  </>
     

 );
}

export default App
