import React, { useState } from 'react';
const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props
    const[ageActual, setAgeActual] = useState(age)
    const haveBirthday = ()=> {
        setAgeActual(ageActual + 1)
    }
    return(
        <div>
            <h1 style={{color:"green"}}>Instructor {firstName}</h1>
            <p>Age: {ageActual}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={haveBirthday}>Happy Birthday {firstName}</button>
        </div>
    );
}
export default PersonCard;
