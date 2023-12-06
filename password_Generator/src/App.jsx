import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charecterAllowed, setCharAllowed] = useState(false)
    const [password, setPassword ] = useState(" ")
    const passwordRef = useRef(null)

    const passwordGenerator = useCallback(()=>{
      let pass = " ";
      let str = ' ABCDEFGHIJKLMNOPQRTSUVWXYZabcdefghijkmlnopqrstuvwxyz';
      if (numberAllowed) {
        str += '0123456789';
      }
      if (charecterAllowed) {
        str += '!@#$%^&*()~:{}[]';
      }
      for (let i = 0; i <= length; i++) {
        const position = Math.floor(Math.random()*str.length+1) ;
        pass += str.charAt(position);
      }
      setPassword(pass)
    }, [length, numberAllowed, charecterAllowed, setPassword])

    const copyTextToClip = () => {
      window.navigator.clipboard.writeText(password)
      passwordRef.current?.select();
    }

    useEffect(()=>{
      passwordGenerator()
    }, [length, numberAllowed, charecterAllowed, passwordGenerator])

  return (
    <>
      <h1 className='text-4xl font-bold text-white'>Password Generator</h1>
      <div className='"w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
          <div className="flex shadow rounded-lg overflow-hidden mb-4"> 
              <input 
              type="text"
              placeholder='Password'
              value={password}
              className='outline-none w-full py-1 px-3'
              readOnly
              ref={passwordRef}
              />
              <button
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
              onClick={(copyTextToClip)}
              >
                Copy
              </button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'> 
                <input 
                type="range" 
                min={8}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e)=>{
                  setLength(e.target.value)
                }}
                />
                <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input 
                type="checkbox"
                id='charAllowed'
                defaultChecked = {charecterAllowed}
                onChange={(e)=>{
                    setCharAllowed((prev)=>!prev)
                }}
                 />
                 <label htmlFor="charAllowed">Charecters</label>
                <input 
                type="checkbox"
                id='numberAllowed'
                defaultChecked = {numberAllowed}
                onChange={(e)=>{
                    setNumberAllowed((prev)=>!prev)
                }}
                 />
                 <label htmlFor="numberAllowed">Numbers</label>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
