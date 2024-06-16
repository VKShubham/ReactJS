
import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)
  if(user) return (<>Welcome {user.username}</>)
    return <>Please Login</>
}

export default Profile
