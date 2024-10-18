import React from 'react'
import logo from '../assest/Logo1.png'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className='h-16 shadow-sm'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between '>
        <div className=''>
          <img src={logo} alt="Logo" />
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within: shadow-sm pl- '>
          <input type='text' placeholder='search product here...' className='w-full outline-none pl-2' />
          <div className='text-lg min-w-[50px] h-8 bg-600 flex items-center justify-center rounded-r-full text-white' style={{ backgroundColor: '#336A29' }}>
            <GrSearch />
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='text-3xl cursor-pointer '>
            <FaRegCircleUser />
          </div>

          <div className='text-3xl relative'>
            <span>
              <FaShoppingCart />
            </span>
            <div className='bg-yellow-600 text-white w-5 h-5 rounded-full p-1  flex items-center justify-center absolute -top-2 -right-3'>
              <p className='text-sm'>0</p>
            </div>
          </div>

          <div>
            <button className='px-2 py-1 rounded-full bg-green-500 text-white hover:bg-green-700'>Login</button>
          </div>

        </div>


      </div>
    </header>
  )
}

export default Header