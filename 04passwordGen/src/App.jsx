import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let generatedPassword = '';
    let str = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%¨&*()_+';

    for(let i = 0; i < length; i++){
      const char = Math.floor(Math.random() * str.length + 1);
      generatedPassword += str.charAt(char);
    }

    setPassword(generatedPassword);
  }, [length, numberAllowed, charAllowed]);


  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  return (
      <div className='max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>
          Password Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          ></input>
          <button 
            className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
            </svg>
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              name='length' 
              id=''
              min={6}
              max={32}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="length">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              name='number'
              id='number'
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prevValue) => !prevValue)
              }}
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              name='char'
              id='char'
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prevValue) => !prevValue)
              }}
            />
            <label htmlFor="char">Characters</label>
          </div>
        </div>
      </div>
  )
}

export default App
