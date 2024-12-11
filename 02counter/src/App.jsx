import { useState } from 'react';
import './App.css'

function App() {
  // const [counter, setCounter] = useState(15);
  let [counter, setCounter] = useState(15);


  // let counter = 5;

  const addValue = () => {
    console.log("Clicked", counter);

    if (counter === 20) return;
   
    counter = counter + 1;
    setCounter(counter);  //work on let

    // setCounter(counter + 1); //can change value of let/const both
  };

  const removeValue = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
