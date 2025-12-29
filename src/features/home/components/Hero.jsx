import React from 'react'
import useNumber from '../../store/useNumber'
import useDegree from '../../store/useDegree'
import useMethod from '../../store/useMethod'

function Hero() {

    const { number, setNumber } = useNumber()
    const { degree, setDegree } = useDegree()
    const { method, setMethod } = useMethod()

    return (
        <div className='m-5 mt-30 h-2/9 gap-5 bg-gray-100 border grid grid-cols-1 grid-rows-2 active:border-2 transition-all duration-700 p-6 border-blue-400 rounded-2xl'>
            <select onChange={(e) => {
                setMethod(e.target.value);
            }} className='w-full rounded-full bg-blue-600 pl-2 pr-2 text-white text-center border-0 outline-0'>
                <option value={'U'}>Unique | منفرد</option>
                <option value={'G'}>General | همگانی</option>
                <option value={'O'}>Euclidean | اقلیدوسی</option>
            </select>
            <div className='w-full grid grid-cols-2 gap-4'>
                <input onChange={(e) => { setNumber(e.target.value) }} type='number' placeholder='number..' className='h-full rounded-full bg-blue-600 pl-2 pr-2 text-white text-center border-0 outline-0' />
                <input onChange={(e) => { setDegree(e.target.value) }} type='number' placeholder='Deg..' className='h-full rounded-full bg-blue-600 pl-2 pr-2 text-white text-center border-0 outline-0' />
            </div>
        </div>
    )
}

export default Hero