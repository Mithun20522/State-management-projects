import React from 'react'

const Product = ({product}) => {
  return (
    <div className=' p-3 max-w-fit border-2 shadow-md text-center'>
        <img src={product.image} alt="product-img" className='border w-[130px] h-[180px]'/>
        <div className='flex flex-col text-sm'>
            <span className='mt-2 mb-1 font-medium'>Price: Rs. {product.price}</span>
            <button className='text-white bg-slate-700 py-1 rounded-md hover:bg-slate-900'>Add to cart</button>
        </div>
    </div>
  )
}

export default Product