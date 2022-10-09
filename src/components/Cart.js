import React from 'react'
import { GiProgression } from 'react-icons/gi';

const Cart = ({cart,children, clearCart}) => {
    let total = 0;
    let totalPrice = 0;

    for(const product of cart){
      total = total + product.quantity;
      totalPrice = totalPrice + (product.price * product.quantity)
    }

  return (
    <div className='bg-gray-700 text-white min-h-screen p-3 fixed top-[80px] right-[-180px] md:right-0 hover:right-0 duration-500 ease-in'>
        <h1 className='text-xl font-bold text-center'>Orders summary</h1>
        <div>
            <h1>Added Product: {total}</h1>
            <h1>Total Price: {totalPrice}</h1>
            <button onClick={() => clearCart()}>Clear-Cart</button>
            {children}
        </div>

        <div className='bg-gray-700 text-white p-3 rounded-l-lg absolute top-[30%] left-[-35px] md:hidden'>
          <GiProgression />
        </div>
    </div>
  )
}

export default Cart