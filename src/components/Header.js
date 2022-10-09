import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/Logo.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

const navs = [
    {id: 1, name: 'Shop', path: '/shop'},
    {id: 2, name: 'Orders', path: '/orders'},
    {id: 3, name: 'Inventory', path: '/inventory'},
    {id: 4, name: 'About', path: '/about'},
]
const Header = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className='flex items-center justify-between h-[80px] bg-black px-6 sticky top-0 z-50'>
        <div className=''>
            <Link to={'/'}><img src={logo} alt="" /></Link>
        </div>
        <div>
            <div className={`flex flex-col md:block absolute left-[0%] md:static text-white space-y-4 md:space-x-3 duration-500 ease-in text-xl text-center w-full bg-[#0909098a] -z-20 md:bg-inherit ${open ? 'top-[80px]': 'top-[-170px]'}`}>
                {
                    navs.map(({id,path,name}) => {
                        return (
                            <NavLink onClick={() => setOpen(!open)}
                            className={(({isActive}) => isActive ? 'text-red-500': 'text-green-400')}
                            key={id} to={path}>{name}</NavLink>
                        )
                    })
                }
            </div>
            <div className='text-white md:hidden text-4xl'  onClick={() => setOpen(!open)}>
                {open? <MdCancel /> : <GiHamburgerMenu />}
            </div>
        </div>
    </div>
  )
}

export default Header