//Cilj je iamti definisanu metodu unutar klasne pametne komponente i onda je 
//korsititi u skroz drugoj komponennti koja je glupa

import React, { Component } from 'react';

import Verson from './Person/Person';

import './App.css';




class App extends Component {



  //state pocetni---------------------------------------------------------------------######
state = {

persons: [

{id: 'abc1', name: 'Maxx', age: '28', },
{id: 'abc2', name : "Anes", age: "23"},
{id: 'abc3', name : "Safet", age: "21"}

],

otherState: 'someValue',
//Ovo smo namjerno settali na false
showPersons: true
}
//state pocetni ----------------------------------------------------------------------------------







//Funkcija promijenjenoIme ------------------------------------------------------------###########


promijenjenoIme = (event, id) =>  {


//novi kod za two way binding---------------------------####@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const IndexOsobe = this.state.persons.findIndex(i => {

  //Ovo ispod vraca true ili false, da li smo potrefili ono sto zelimo
  //dakle da li se podudaraju id-evi
  //ako se podudaraju, onda se u IndexOsobe spasi index tog objekta
return i.id === id;


});

//roki je citava osoba, ne samo index kao IndexOsobe.. i to ona osoba koja
//sadrzi odredjeni id i bas ona koja nam treba

//roki je kopija citavog objekta sa odredjenim indeksom
//namjerno kazem kopija jer je objekat refrence type i ne valja 
//sa njim direktno manipulisati

const roki = {
  ...this.state.persons[IndexOsobe]

};

roki.name = event.target.value;


const licnosti = [...this.state.persons];
licnosti[IndexOsobe] = roki;


//const roki2 = Object.assign({}, this.state.persons[IndexOsobe])
//alternativa rokiju

//novi kod za two way binding-------------------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






  this.setState({ persons:licnosti })
   
  
}

//Funkcija promijenjenoIme ------------------------------------------------------------











//Funkcija togglePersonsHandler ------------------------------------------#######################

togglePersonsHandler = () => {

const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});


}


//Funkcija togglePersonsHandler ---------------------------------------------------------------
//Zelimo da uklonimo objeakt iz naseg arraya kada kliknemo na paragraf


deletePersonHandler = (personIndex) => {

const narod = [...this.state.persons];
narod.splice(personIndex, 1);

this.setState({persons: narod});

}













  render(){

//Do sad je sve kretalo od reurna, jedino smo za inline styling korsitili ovaj render
//Sad cemo ga korsititi i za if statement


let osobe = null;

//Ako je ovo true
if (this.state.showPersons){

  osobe = (

    <div>  

{/* Sad nam je cilj da mapiramo ovaj gore pocetni state (svaki elemnt pomocu map funkcije)
u nesto sto ce JSX razumjeti. JEr ovo gore on kao ne razumije.

)*/}


      {this.state.persons.map((x, index) => {

      return <Verson
              click = {() => this.deletePersonHandler(index)}
              changed = {(event) => this.promijenjenoIme(event, x.id)}
              name = {x.name}
              age = {x.age}
              key = {x.id}
              
              
              />

       })}

   </div>

  );
}











//Inline styling ---------------------

const style = {

backgroundColor: 'white',
font: 'inherit',
border: '1px solid blue',
padding: '8px',
cursor: 'pointer'



};
//Inline styling ---------------------


  return (










    <div className="App">
    



<button style = {style} onClick = {this.togglePersonsHandler}>Toggle Persons</button>

    


{osobe}



 
  
 </div> 
  );
  
  }
}



export default App;
