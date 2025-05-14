import React from 'react'
import {appleImg} from '../utils/utils';

const Navbar = () => {
  return (
    <header>
    <nav>
        <img src={appleImg} alt='Apple' width={14} height={18}/>
    </nav>
    </header>
  )
}

export default Navbar