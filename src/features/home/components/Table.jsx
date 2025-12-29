import React from 'react'

function Table() {
    return (
        <table className='border-black w-full text-center'>
            <tbody className='w-full'>
                <tr className='border-b-2 w-full grid grid-cols-4'>
                    <td className='border-r-2'>dfk</td>
                    <td className='col-span-3'>dfk</td>
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