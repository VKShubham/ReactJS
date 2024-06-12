import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let[counter, setcounter] = useState(0);

  // First Args : Variable Which Will Be Need To Change
  // Second Args : It is Function which is used To trigger which we passed value which we need to Updates

  const addvalue = () => {
    setcounter(counter+1);

    // Instead of this we can get previous value and update it

    setcounter(PrevCounter => PrevCounter + 1); // it has an callback function which will has an argument as a current state
    console.log('Clicked :',counter,Math.random());
  }
  return (
    <>
    <h1>Chai aur React</h1>
    <h1>Counter Value : {counter}</h1>
    <button onClick={addvalue}>ADD Value</button>
    <button>REMOVE Value</button>
    </>
  )   
}

export default App
