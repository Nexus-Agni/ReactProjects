import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='flex justify-center items-center bg-gray-700 text-white text-3xl py-5'>
        User: {id}</div>
  )
}

export default User