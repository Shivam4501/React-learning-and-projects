import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 

function App() {
  let [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    if(counter==20){
      setCounter(20)
    }
    else{
      setCounter(counter+1)
    }
  }
  function deleteValue(){
    if(counter==0){
      setCounter(0)
    }
    else{
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button
        onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={deleteValue}
      >Delete Value {counter}</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
