import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { addToDb } from '../Utilities/fakeDb';
import Cart from './Cart';
import SingleShop from './SingleShop';

const Shop = () => {
    const {products, savedCart} = useLoaderData();
    console.log(products);
    const [cart, setCart] = useState(savedCart);
    console.log(cart);

    // useEffect(() => {
    //     const storedCart = getStoredCart();
    //     console.log(storedCart);
    //     const savedCart = [];
    //     for(const id in storedCart) {
    //         const addedProduct = products.find(product => product.id === id);
    //         if(addedProduct) {
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             savedCart.push(addedProduct);
    //         }
    //     }
    //     setCart(savedCart);
    // },[products])

    const handleCart = (SelectedProduct) => {
        let newCart = [];
        const exists = products.find(product => product.id === SelectedProduct.id);
        if(!exists) {
            SelectedProduct.quantity = 1;
            newCart = [...cart, SelectedProduct]
        } else {
            const rests = products.filter(product => product.id !== SelectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rests, exists];
        }
        setCart(newCart);
        addToDb(SelectedProduct.id)
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('shoppingCart');
    };




    console.log(cart);
    return (
    <div className='grid md:grid-cols-5 px-3 md:px-0 md:pl-6 gap-3 -z-10'>
        <div className='md:col-span-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:mr-[50px] lg:mr-0'>
            {
                products.map(product => <SingleShop handleCart={handleCart} key={product.id} {...product} product={product}/>)
            }
        </div>
        <div className=''>
            <Cart cart={cart} clearCart={clearCart}>
                <Link className='bg-blue-500 p-1 rounded' to={'/orders'}>Review order</Link>
            </Cart>
        </div>
    </div>
  )
}

export default Shop