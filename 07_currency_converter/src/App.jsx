import { useState } from 'react'
import {INPUTBOX} from './componets'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl text-red-600'>Currency</h1>
    </>
  )
}

export default App
