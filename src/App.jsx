import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';

import React from 'react'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden h-[100vh]'>
      <Hero />
      <Footer />

    </div>
  )
}

export default App
