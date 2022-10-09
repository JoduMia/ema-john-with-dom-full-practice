import React from 'react'

const SingleShop = ({img,price,name,handleCart,product}) => {
  return (
    <div className='border border-gray-500 rounded space-y-3 p-2 relative mt-4'>
        <div className=' border border-green-300'>
            <img className='w-full' src={img} alt="images" />
        </div>
        <div className='pb-12'>
            <h3 className='text-lg font-bold'>{name}</h3>
            <p>Price: ${price}</p>
        </div>
        <button onClick={() => handleCart(product)} className='py-1 px-2 w-full bg-blue-500 text-lg font-bold absolute bottom-0 left-0 hover:bg-green-600 hover:text-red-600 duration-300'>Buy Now</button>
    </div>
  )
}

export default SingleShop