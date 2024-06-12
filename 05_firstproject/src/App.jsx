import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <div className="w-1000px h-1000px py-0" style={{backgroundColor : color}}>
      <div className="absolute bottom-0">
        <div className="flex justify-evenly">
          <button onClick={() => setcolor("blue")}>Blue</button>
          <button onClick={() => setcolor("red")}>Red</button>
          <button onClick={() => setcolor("green")}>Green</button>
          <button onClick={() => setcolor("pink")}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
