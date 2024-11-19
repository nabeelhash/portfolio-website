import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useRef } from 'react'
import Computers from './canvas/Computers'
import hero from '../assets/heroimg.png'
const Hero = () => {
  const ref = useRef()

  useGSAP(function () {
    gsap.from('.pin', {
      y: -200,
      duration: 0.5,
      opacity: 0,
      delay: 0.6
    })
    gsap.from('.letter', {
      x: -200,
      duration: 0.15,
      opacity: 0,
      stagger: 0.08,
      delay: 0.9
    })
    gsap.from('.p2', {
      duration: 0.5,
      opacity: 0,
      delay: 2,
    })
    gsap.from('.btn', {
      duration: 0.5,
      opacity: 0,
      stagger: 0.3,
      delay: 2.5,
    })
  })
  // Helper function to split text into individual letters
  const splitText = (text) => {
    return text.split('').map((letter, index) => (
      index < 8 ?
        <span key={index} className="letter">{letter}</span>
        :
        <span key={index} className="letter text-red-500">{letter}</span>

    ));
  };
  return (
    <div >
      <div className='px-[40px] sm:px-[20px] flex md:px-[40px] lg:px-[60px] py-20  w-[100%] '>
        <div className='pin flex flex-col items-center mr-2 md:mr-5'>
          <div className='w-[25px] h-[25px] bg-red-700 rounded-[30px]' />
          <div className='w-[3px] h-[350px] bg-gradient-to-b from-red-700 to-gray-700 absolute' />
        </div>
        <div className='flex flex-col gap-2 w-[100%] md:w-[50%]'>
          <div className='p1 text-[50px] md:text-[60px] lg:text-[85px] text-white font-extrabold'> {splitText("Hi, I'm Nabeel")} </div>
          <div className='p2 w-[80%] text-[20px] md:text-[25px] text-white font-semibold'>I create stunning looking mern stack website with great user interface </div>
          <div className='flex  justify-start gap-3 mt-5'>
            <button className='btn bg-gray-700 text-xl text-white font-medium px-[40px] py-1 rounded-[3px] transform transition-transform duration-200 hover:scale-105'>Hire Me</button>
            <button className='btn bg-red-600 text-xl text-white font-medium px-[40px] py-1 rounded-[3px] transform transition-transform duration-200 hover:scale-105'>Hire Me</button>
          </div>
        </div>
        <div className='w-[50%] md:block hidden'>
          <img src={hero} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Hero