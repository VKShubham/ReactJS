import { useState } from 'react'
import viteLogo from '/vite.svg'
import DisplayName  from './Chai';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DisplayName/>
    </>
    // <></> this is called fragment. it is used beause the ReactDOM Only Accpets One Element
  );
}

export default App
