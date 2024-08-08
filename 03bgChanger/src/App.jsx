import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

  return (
    <>
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            onClick={() => setColor("red")}
            >Red</button>
          <button 
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            onClick={() => setColor("green")}
            >Green</button>
          <button 
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            onClick={() => setColor("blue")}
            >Blue</button>
          <button 
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            onClick={() => setColor("purple")}
            >Purple</button>
          <button 
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            onClick={() => setColor("orange")}
            >Orange</button>
          <button 
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            onClick={() => setColor("brown")}
            >Brown</button>
        </div>
        <div className='flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("black")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
