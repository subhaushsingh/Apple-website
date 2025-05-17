import React from 'react'
import {appleImg, bagImg, searchImg} from '../utils/utils';

import { navLists } from './../constant/index';

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center ' >
    <nav className='flex w-full screen-max-width'> 
        <img src={appleImg} alt='Apple' width={14} height={18}/>

        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav)=>(
            <div key={nav} className='px-5 text-sm text-gray-500 transition-all cursor-pointer hover:text-white' >
              {nav}
            </div>
          ))}
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} height={18} width={18} alt='search'/>
          <img src={bagImg} height={18} width={18} alt='bag'/>
        </div>
    </nav>
    </header>
  )
}

export default Navbar