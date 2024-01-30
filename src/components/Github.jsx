import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('https://api.github.com/users/Nexus-Agni');
    //             const data = await response.json();
    //             setData(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchData();
    // }, [data]);

    const data = useLoaderData()
  return (
    <>
    <div className='flex justify-center items-center bg-gray-700 text-white text-3xl py-5'>Github followers : {data.followers}</div>
    <div className='w-full flex justify-center items-center my-2'>
    <img src={data.avatar_url} alt="Github img" className='rounded-lg'/>
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/Nexus-Agni');
    return response.json()
}