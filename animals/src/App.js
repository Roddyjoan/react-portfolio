import './App.css';
import AnimalShow from "./AnimalShow";
import React, { useState } from 'react';


function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow' , 'dog', 'gator', 'horse'];
  return animals [Math.floor(Math.random() * animals.length)];
}

function App() {

  const [ animals, setAnimals] = useState([]);


  const handleAddClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type = {animal} key = {index} />
  });

 

  

  return (
    <>
    <div className="app">
      <button type ="button" className="btn btn-primary" onClick={handleAddClick}> Add animal </button>
      
    <div className='animal-list'> {renderedAnimals}</div>
    </div>
    </>
  );
}

export default App;