import React from 'react'
import { FaSearchDollar } from "react-icons/fa";
// import Hamburger from '../../icons/Hamburger';
export default function Navbar() {

    const links =[
        {
            name:'Home',
            to:'/'
        },
        {
            name:'Stores',
            to:'storepage'
        },
        {
            name:'Categories',
            to:'categorypage'
        },
        {
            name:'Contact Us',
            to:'contactpage'
        },
    ]

  return (
    
    <header className='flex justify-between items-center text-white p-3 px-[8vw] bg-darkBlue'>
      <a href="#">
        <h1 className='text-2xl font-bold'>Coupons</h1>
      </a>

      <ul className='flex gap-6 max-md:hidden '>
        {
            links.map((link,index)=>(
                <a key={index} href={link.to}>
                <li>
                    {link.name}
                </li>
                </a>
            ))
        }
      </ul>
      
      <div className='flex items-center justify-between gap-3 bg-white rounded-lg w-[23rem] overflow-hidden max-md:hidden'>
        <input type="text" placeholder='Search for brand/store' className='border-0 outline-none px-3 text-gray-500 font-extralight '/>
        <button className='py-3 px-4 bg-yellow-400'><FaSearchDollar className='h-5 w-5'/></button>
      </div>

      {/* <div className='hidden max-md:block'>
      <Hamburger />
      </div> */}
    </header>
    


  )
}
