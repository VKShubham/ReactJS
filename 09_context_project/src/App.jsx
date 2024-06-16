import { useState } from 'react'
import './App.css'
import UserContextProvider from './assets/context/UserContextProvider'
import Profile from './assets/componets/Profile'
import Login from './assets/componets/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h2>TEst</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
