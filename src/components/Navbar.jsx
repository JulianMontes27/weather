import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex flex-row justify-between items-center'>
            <h4>Weather App</h4>
            <ul className='flex flex-row list-none justify-end items-center'>
                <li className='mr-6'>HOME</li>
                <li className='mr-6'>CONTACT US</li>
                <li className='mr-6'>ABOUT</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
