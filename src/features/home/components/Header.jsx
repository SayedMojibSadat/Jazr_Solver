import React from 'react'
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { LuHistory } from "react-icons/lu";

function Header() {
    return (
        <header className='h-1/9 w-full border-b text-blue-600 border-b-blue-600 fixed flex flex-row justify-between items-center p-5 bg-white'>
            <CgDetailsMore size={52} />
            <LuHistory size={42} />
        </header>
    )
}

export default Header