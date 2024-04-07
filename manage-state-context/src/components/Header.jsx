import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <header className='flex justify-between items-center p-5 bg-slate-500 text-white font-medium'>
        <h1 className='text-2xl font-bold text-purple-300'>ECommerce </h1>
        <ul className='flex gap-5'>
            <li className='hover:underline cursor-pointer'>Home</li>
            <li className='hover:underline cursor-pointer'>About</li>
        </ul>
        <FaShoppingCart size={30} className='cursor-pointer'/>
    </header>
  )
}

export default Header