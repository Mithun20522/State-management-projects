import React from 'react'

const Product = () => {
  return (
    <div className=' p-3 max-w-fit border-2 shadow-md text-center'>
        <img src="https://endlessicons.com/wp-content/uploads/2012/11/image-holder-icon-614x460.png" alt="product-img" className='border w-[130px] h-[180px]'/>
        <div className='flex flex-col text-sm'>
            <span className='mt-2 font-medium'>Price: Rs. 500</span>
            <button className='text-white bg-slate-700 py-1 rounded-md hover:bg-slate-900'>Add to cart</button>
        </div>
    </div>
  )
}

export default Product