import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
    <div className=' w-screen h-screen' 
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
            <button className='px-4 rounded-full bg-red-500 outline-none'
            onClick={()=> setColor('red')}
            >Red</button>
            <button className='px-4 rounded-full bg-blue-500 outline-none'
            onClick={()=> setColor('blue')}
            >blue</button>
            <button className='px-4 rounded-full bg-green-500 outline-none'
            onClick={()=> setColor('green')}
            >green</button>
            <button className='px-4 rounded-full bg-orange-500 outline-none'
            onClick={()=> setColor('orange')}
            >orange</button>
            <button className='px-4 rounded-full bg-purple-500 outline-none'
            onClick={()=> setColor('purple')}
            >purple</button>
            <button className='px-4 rounded-full bg-white border-black text-black'
            onClick={()=> setColor('white')}
            >white</button>
            <button className='px-4 rounded-full bg-black '
            onClick={()=> setColor('black')}
            >black</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
