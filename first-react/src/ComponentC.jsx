
//useContext () =   React hook that allows sharing values with out props


import ComponentD from "./ComponentD";

  function ComponentC()
  {

      return (
          <div className="box">
            <h1>ComponentC</h1>
            <ComponentD />
          </div>

      )


  }

  export default ComponentC;