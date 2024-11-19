import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

import ParticleComponent from '../utils/particle'
const Home = () => {

  // style={{ backgroundImage: `url(${image})` }}
  return (
    <div className='h-screen relative z-10' >
      {/* Particle Component is now in the background, with a lower z-index */}
      <ParticleComponent id='particles' />

      {/* The content like Navbar and Hero is placed above the particles */}
      <div className='relative z-10 '>
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default Home
