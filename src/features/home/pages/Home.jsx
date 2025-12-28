import React from 'react'
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { LuHistory } from "react-icons/lu";

function Home() {
  return (
    <div className='h-screen w-full flex flex-col gap-10'>
      <header className='h-1/9 w-full border-b text-blue-600 border-b-blue-600 fixed flex flex-row justify-between items-center p-5 bg-white'>
        <CgDetailsMore size={52} />
        <LuHistory size={42} />
      </header>
      <div className='m-5 mt-30 h-2/9 gap-5 bg-gray-100 border grid grid-cols-1 grid-rows-2 active:border-2 transition-all duration-700 p-6 border-blue-400 rounded-2xl'>
        <select className='w-full rounded-full bg-blue-600 pl-2 pr-2 text-white text-center border-0 outline-0'>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <div className='w-full grid grid-cols-2 gap-4'>
          <input type='number' placeholder='number..' className='h-full rounded-full bg-blue-600 pl-2 pr-2 text-white text-center border-0 outline-0' />
          <input type='number' placeholder='Deg..' className='h-full rounded-full bg-blue-600 pl-2 pr-2 text-white text-center border-0 outline-0' />
        </div>
      </div>
      <div className='h-6/9 m-5 bg-gray-500 rounded-2xl'></div>
    </div>
  )
}

export default Home