import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import ProductContext from '../context/product/productContext';
import {useNavigate} from 'react-router-dom';
const Header = () => {
  const {addedItem} = useContext(ProductContext);
  const navigate = useNavigate();
  let isClicked = false;
  const handleClick = () => {
      isClicked = true;
      navigate('/cart');
  }
  return (
    <header className='flex justify-between items-center p-5 bg-slate-500 text-white font-medium'>
        <h1 className='text-2xl font-bold text-purple-300'>ECommerce </h1>
        <ul className='flex gap-5'>
            <li className='hover:underline cursor-pointer'>Home</li>
            <li className='hover:underline cursor-pointer'>About</li>
        </ul>
        <div className='relative'>
        <FaShoppingCart onClick={handleClick} size={32} className='cursor-pointer' />
          {
            addedItem > 0 ? (
              <div className='absolute -top-2 right-1 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs font-bold'>
                {addedItem}
              </div>
            ) : ''
          }
          
      </div>
    </header>
  )
}

export default Header