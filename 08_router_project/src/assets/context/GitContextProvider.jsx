import React, { useState } from 'react'
import UserContext from './GitContext'

function GitContextProvider({child}) {
    const [followers,setfollowers] = useState("")
  return (
    <UserContext.Provider value={[followers,setfollowers]}>
        {child}
    </UserContext.Provider>
  )
}

export default GitContextProvider
