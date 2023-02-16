import React from 'react';
import Navbar from './Navbar';
import { BsSearch } from 'react-icons/bs'

const Hero = () => {
  return (
    <div>
        <Navbar />
        <div className='flex flex-row justify-center '>
            <input className='text-primary max-w-[50%] rounded-[10px]'  type="text" />
            <button type='button'>{<BsSearch style={{marginLeft:'20px'}}/>}</button>
        </div>
    </div>
  )
}

export default Hero
