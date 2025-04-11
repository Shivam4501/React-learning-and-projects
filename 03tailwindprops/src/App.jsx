import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

    let myobj = {
      username: "Shivam",
      age: 18
    }
    let arr=[1,15,54,6,7]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      
      <Card username="chai" btn="Visit me"/>
      <Card username="Shivam" />
    </>
  )
}

export default App
