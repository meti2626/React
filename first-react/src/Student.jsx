
//propsTypes = a mechanism that ensures that the passed value is of the correct datatype

import PropTypes from "prop-types";


function Student(props)
{
    return(
        <div  className="student" >
          
           <p>Name:{props.name}</p>
           <p>Age: {props.age}</p>
           <p>Student: {props.isStudent ? "Yes" : "No" }</p>
            
            {/* with boolean value we will use ternary operation */}

          
        </div>
    );




}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
};

Student.defaultProps = {
    name: "Unknown",
    age: 0,
    isStudent: false
};

export default Student
 