import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div className='w-full flex justify-center items-center h-fit'>
        <div className='w-[60%] mx-auto p-8 rounded-lg my-4 '>
        <h2>Login</h2>

        {/* <input type="text" 
        value={username}
        onChange={(e)=>setusername(e.target.value)}
        placeholder='Username'/> */}

<div class="w-full md:w-1/3">
  <label
    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="name"
  >
    Username
  </label>
  <input
    class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="text"
    placeholder="Enter your name"
    id="name"
    value={username}
    onChange={(e)=>setusername(e.target.value)}
  />
</div>
<div class="w-full md:w-1/3">
  <label
    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="name"
  >
    Password
  </label>
  <input
    class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="text"
    placeholder="Enter your name"
    id="name"
    value={password}
    onChange={(e)=>setpassword(e.target.value)}
  />
</div>


        {/* <input type="text" 
        value={password}
        onChange={(e)=> setpassword(e.target.value)}
        placeholder='Password'/> */}

        {/* <button onClick={handleSubmit}>Submit</button> */}
        <button
      type="button"
      className="rounded-full bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black my-5"
      onClick={handleSubmit}
    >
      Submit
    </button>
    </div>
    </div>
  )
}



export default Login