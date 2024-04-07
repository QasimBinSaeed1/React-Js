import { useState } from 'react'
import Navbar from "./Components/Navbar.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='container rounded-xl mx-auto my-5 p-5 bg-purple-100 min-h-[70vh] max-w-[80vh]'>
        <h1 className='text-xl font-bold text-center'>iTask - Manage your Tasks at one Place.</h1>
        <h2 className='text-lg  font-bold'>Todo List App</h2>
        <div className='flex justify-center items-center font-bold m-1'>
          <input className='bg-white rounded-l-full py-2 px-4 w-[80%] focus:outline-none' type="text" placeholder='Enter Task' />
          <button className='bg-purple-700 rounded-r-full py-2 px-4 text-white hover:opacity-80 active:opacity-50 transition duration-100'>Save</button>
        </div>
        <hr class="border-gray-600 border-[0.5] m-2"/>
      </div>
    </>
  )
}

export default App
