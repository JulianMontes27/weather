import React from 'react';
import {BsInstagram} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <section className='flex flex-col mt-[5rem] items-center'>
        <div>
            <h4>Made by Julian Montes</h4>
        </div>
        <div className='flex flex-row text-center items-center gap-3 '>
            <p>Find me in: </p>
            <BsInstagram size={30}/>
            < AiFillGithub size={30}/>
        </div>
    </section>
  )
}

export default Footer