import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { SiPhpmyadmin } from "react-icons/si";

function Navbar() {
  return (
    <nav className='flex w-full justify-between items-center bg-black text-white px-3 sm:px-10 py-6 fixed top-0'>
        <div>
            <h2 className='text-sm sm:text-2xl text-nowrap uppercase font-extralight font-sans'>try-on | <span className='text-zinc-400'>demo</span></h2>
        </div>
        <div>
            <ul className='flex gap-5 font-light tracking-widest font-sans text-[.8rem] uppercase'>
                <li>
                    <NavLink className={"flex items-center gap-1 transition-all duration-300 hover:opacity-70"} to={"/"}>Shop <HiOutlineShoppingBag/></NavLink>
                </li>
                <li>
                    <NavLink className={"flex items-center gap-1 transition-all duration-300 hover:opacity-70"} to={"/"}>Admin <SiPhpmyadmin /></NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar