import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const[username,setusernam] = useState("")
    const[password,setpassword] = useState("")
    
    const {setuser} = useContext(useContext)
    const handlesubmit = (e) => {
        e.preventDefault();
        setuser({username,password})
    }
  return (
    <>
        <h2>Login</h2>
        <input type='text' value={username} onChange={(e) => setusernam(e.target.value)} placeholder='username'/>
        <input type='text' value={password} onChange={(e) => setpassword(e.target.value)} placeholder='password'/>
        <button onClick={handlesubmit}>Submit</button>
    </>
  )
}

export default Login
