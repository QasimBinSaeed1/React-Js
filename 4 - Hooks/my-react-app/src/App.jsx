import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addValue =() =>{
    if (counter ===20) return;
    setCounter(counter +=1)
  }
  const removeValue =() =>{
    if (counter===0) return;
    setCounter(counter -=1)
  }
  return (
    <>
    <h1>Using Hook (useState) Demo:</h1>
      <p>Counter Value : {counter} </p>
      <button onClick={addValue}>Increase Value Counter Value : {counter} </button>
      <button onClick={removeValue}>Decrease Value Counter Value : {counter} </button>
    </>
  )
}

export default App
