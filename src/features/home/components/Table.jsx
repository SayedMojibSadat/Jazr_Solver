import React from 'react'
import useNumber from '../../store/useNumber'
import useDegree from '../../store/useDegree'
import useMethod from '../../store/useMethod'
import useResult from '../../store/useResult'

function Table() {

    const { number, setNumber } = useNumber()
    const { degree, setDegree } = useDegree()
    const { method, setMethod } = useMethod()
    const { result, setResult } = useResult()

    return (
        <table className='border-black w-full text-center'>
            <tbody className='w-full'>
                <tr className='w-full grid grid-cols-4'>
                    <td className=''></td>
                    <td className='col-span-3 border-b-2'>{result}</td>
                </tr>
                <tr className='w-full grid grid-cols-4'>
                    <td className='border-r-2 col-span-1 text-[#ffffff00] border-black'>.</td>
                </tr>
                <tr className='w-full grid grid-cols-4'>
                    <td className='border-r-2 col-span-1 text-[#ffffff00] border-black'>.</td>
                </tr>
                <tr className='w-full grid grid-cols-4'>
                    <td className='border-r-2 col-span-1 text-[#ffffff00] border-black'>.</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table