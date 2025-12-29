import React from 'react'

function Hero() {
    return (
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
    )
}

export default Hero