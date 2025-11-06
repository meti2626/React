import React , {useState , createContext} from 'react';

//useContext () =   React hook that allows sharing values with out props

export const UserContext = createContext();

import ComponentB from "./ComponentB";

  function ComponentA()
  {

    const [user, setUser]  = useState("Brocode")

      return (
          <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>

           <UserContext.Provider value={user}>
             <ComponentB />
           </UserContext.Provider>
          </div>

      )


  }

  export default ComponentA;