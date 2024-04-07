import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-purple-700 py-2 px-4 text-white font-sans'>
        <span className='font-bold cursor-pointer text-xl px-4'>iTasks</span>
        <ul className='flex justify-between items-center'>
            <li className='cursor-pointer py-2 px-4 m-1 rounded-xl hover:bg-purple-400 transition duration-300'>Home</li>
            <li className='cursor-pointer py-2 px-4 m-1 rounded-xl hover:bg-purple-400 transition duration-300'>Tasks</li>
        </ul>
    </div>
  )
}

export default Navbar