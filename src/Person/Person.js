import React from 'react';
import './Person.css';



const person = (props) => {


//Zaista zanimljivo
//Proslijedio sam funkciju ovom h1 preko propsa
//koja je definisana u skroz drugoj komponennti

//Kad kliknem na aaaaa izvrsi se klik koji referira na funkciju koja mijenja imena
//<h5 onClick = {props.click} >{props.children}</h5>

return(

<div className = "Person">



<h1 onClick = {props.click}>I am {props.name}</h1>

 <h3 onClick = {props.click}>My age is: {props.age} years</h3>

  <h5>{props.children}</h5>

   <input type = "text" onChange = {props.changed} value = {props.name} />



</div>
);
}







 export default person;