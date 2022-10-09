import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { removeFromDb } from '../Utilities/fakeDb';
import Cart from './Cart';
import Review from './Review';

const Orders = () => {
  const {savedCart} = useLoaderData();
  console.log(savedCart);
  const [cart, setCart] = useState(savedCart);

  const deleteFromDb = (id) => {
    const newCart = cart.filter(product => product.id !== id)
    setCart(newCart)
    removeFromDb(id)
  }
  return (
    <div className='grid md:grid-cols-5 px-3 md:px-0 md:pl-6 gap-3 -z-10'>
        <div className='md:col-span-4 mt-5 gap-5 flex items-center justify-center flex-col'>
          {
            cart.map(product => <Review handleDelete={deleteFromDb} key={product.id} {...product}/>)
          }
          {
            cart.length ===0 && <p>No product is added to the cart. <Link className='bg-blue-500 p-1 rounded' to={'/shop'}>Shop More</Link> </p>
          }
        </div>
        <div>
            <Cart cart={cart} />
        </div>
    </div>
  )
}

export default Orders