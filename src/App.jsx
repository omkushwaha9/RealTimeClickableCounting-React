import React from 'react'
import { useState } from 'react'

function App() {
  var [a,b] = useState(0);
  return (
    <div className=' w-full h-screen bg-lime-300'>
     <h1 className='bg-pink-400 text-2xl font-mono p-4 text-center'> Basic RealTime Calculations </h1>

     <div className='w-60 h-72 bg-yellow-300 rounded-3xl items-center'>
      <h1 className='text-center p-10' >{a}</h1>
      <button
      onClick={()=>b(a+1)}
      className='w-20 h-10 bg-purple-500 rounded-xl text-zinc-100'
      >
        Count
      </button>
     </div>
    </div>
  )
}

export default App
