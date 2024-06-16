import React, { useState } from 'react'
import UserContext from './UserContext'

function UserContextProvider({child}) {
    const [user,Setuser] = useState(null)
  return (
    <UserContext.Provider value={[user,Setuser]}>
        {child}
    </UserContext.Provider>
  )
}

export default UserContextProvider
