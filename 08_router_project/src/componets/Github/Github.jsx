import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import UserContext from '../../assets/context/GitContext'

function Github() {
    const data = useLoaderData()
    // const {setfollowers} = useContext(UserContext)
    // const {followers} = useContext(UserContext)
    setfollowers(data.followers)
    useEffect(() => {
        fetch('https://api.github.com/users/VKShubham')
        .then(res => res.json())
        .then(res => setdata(res))
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl'>
      Github Followes : {data.followers}
      <img src={data.avatar_url} alt="Github Image" width={250}/>
    </div>
  )
}

// export const Optimize = () => {
//     const [data,setdata] = useState()
//     fetch('https://api.github.com/users/VKShubham')
//     .then(res => res.json())
//     .then(res => setdata(res))
//     return data
// }

export default Github
