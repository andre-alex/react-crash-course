import { useState } from 'react'

import './App.css'

function App() {

  //counter = variable, setCounter = function/method
  const [counter, setCounter] = useState(1) //initial value
  
  //let counter  = 15;

  const addValue = () => {
    if(counter == 10){
      setCounter(0);
      return;
    }

    setCounter(counter + 1);
    //setCounter((prevCounter) => prevCounter + 1)
    //setCounter has a callback
  }

  const removeValue = () => {
    if(counter == 0){
      setCounter(10);
      return;
    }

    setCounter(counter - 1);
  }

  return (
    <>
      <h1>React from freeCodeCamp {counter} </h1>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={addValue}
      >Add value</button> {" "} 
      <button
        onClick={removeValue}
      >Remove value</button>
      <p>Footer:  {counter}</p>
    </>
  )
}

export default App
