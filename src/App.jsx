import React from 'react'
import { useState } from 'react'

function App() {
  var [a, b] = useState(0);
  return (
    <div className=' w-full h-screen bg-purple-100'>
      <h1 className='bg-pink-200 text-2xl font-mono p-4 text-center'> RealTime Clickable Counting  </h1>

      <div className=' mt-40 ml-[40%] flex justify-center  h-12 w-64 bg-red-100 rounded-3xl items-center'>
        <h1 className=' text-center p-10 text-4xl ' >{a}</h1>
        <button
          onClick={() => b(a + 1)}
          className='w-20 h-10 bg-emerald-900 rounded-2xl text-zinc-100'
        >
          <h1 className='text-xl font-bold font-mono'>
            Count
          </h1>
        </button>
      </div>
    </div>
  )
}

export default App
