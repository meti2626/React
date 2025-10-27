
//propsTypes = a mechanism that ensures that the passed value is of the correct datatype

 {/* if we are passing a value and not string literal we have to inclose it witth curly brace */}


import PropTypes from "prop-types";


function Student({ name = "Unknown", age = 0, isStudent = false }) {
    return (
        <div className="student">
            <p>Name:{name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>

            {/* with boolean value we will use ternary operation */}
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
};

export default Student
 