import React from 'react'
import Navbar from '../components/Navbar'
import mern from '../assets/mern.jpg'
import ecommerce from '../assets/ecommerce.jpg'
import chat from '../assets/chatapp.jpg'
import social from '../assets/social.jpg'

import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
const Projects = () => {
  const [hover, setHover] = useState(null)
  const [hover1, setHover1] = useState(null)
  const [hover2, setHover2] = useState(null)
  const [hover3, setHover3] = useState(null)

  useGSAP(function () {
    if (hover) {
      gsap.set('.live', {
        y: 200,
        opacity: 0,
      })
      gsap.to('.live', {
        y: 0,
        duration: 0.8,
        opacity: 1
      })
    }
    if (hover1) {
      gsap.set('.live', {
        y: 200,
        opacity: 0,
      })
      gsap.to('.live', {
        y: 0,
        duration: 0.8,
        opacity: 1
      })
    }
    if (hover2) {
      gsap.set('.live', {
        y: 200,
        opacity: 0,
      })
      gsap.to('.live', {
        y: 0,
        duration: 0.8,
        opacity: 1
      })
    }
    if (hover3) {
      gsap.set('.live', {
        y: 200,
        opacity: 0,
      })
      gsap.to('.live', {
        y: 0,
        duration: 0.8,
        opacity: 1
      })
    }
  }, [hover, hover1, hover2, hover3])

  useGSAP(function () {
    gsap.from('.b', {
      x: 200,
      opacity: 0,
      duration: 0.3,
      stagger: 0.15,
      delay: 0.6
    })
    gsap.from('.h1', {
      y: 40,
      duration: 0.5,
      delay: 0.5,
      opacity: 0,
      stagger: 0.2
    })
  })
  return (

    <div className='bg-gradient-to-r from-gray-800 to-purple-950'>
      <Navbar />
      <div className='flex justify-center items-center py-5 lg:py-0 lg:pt-10'>
        <div className='flex w-[80%] flex-wrap lg:flex-nowrap m-auto'>
          <div className='w-[100%] md:w-[70%] lg:w-[30%] flex flex-col justify-center py-5 md:px-5 md:py-5 mx-10 rounded-[5px]'>
            <p className='h1 text-[42px] text-white font-bold mb-4 inline-flex'>My Projects</p>
            <p className='h1 text-sm leading-6 text-white font-medium'>I have built several full-stack applications using the MERN stack, which includes MongoDB for the database, Express.js for the backend framework, React for the frontend, and Node.js as the runtime environment. These projects demonstrate my ability to create end-to-end web applications, leveraging the power of the MERN stack to handle everything from user interface design to data management and server-side functionality.</p>
          </div>
          <div className='w-[100%] lg:w-[60%] flex flex-wrap md:flex-nowrap gap-2 justify-center'>
            <div className='flex flex-col gap-2'>
              <Link to={'https://nabeelhashmi-ecommerce.vercel.app/'}><div className='box relative w-[100%] b' style={{ perspective: '1000px' }} onMouseEnter={function () { setHover(true); console.log('helo') }} onMouseLeave={function () { setHover(false) }} >

                {/* Image container */}
                <div className='w-[100%]'>
                  <img className='w-full bg-cover rounded-[7px] h-[250px]' src={ecommerce} alt="" />
                </div>

                {/* Content that zooms in on hover with 3D effect */}
                <div style={{ transformStyle: 'preserve-3d', }} className={`w-[100%]  absolute top-0 left-0 cursor-pointer transition-transform duration-300 ${hover ? 'translate-y-0 translate-z-[130px] opacity-100 ' : 'translate-z-0 translate-y-[-50%] opacity-0 scale-0'}`}>
                  <div className='w-[100%] h-[250px] p-5 bg-amber-800 bg-opacity-[70%] flex-col flex justify-center items-center'>
                    <p className='text-white font-semibold text-lg live'>Live Project</p>
                    <p className='text-white font-semibold text-lg live'>Ecommerce</p>

                  </div>
                </div>
              </div></Link>
              <Link to={'https://nabeelhash-socialmedia.vercel.app/'}><div className='box relative w-[100%]  b' style={{ perspective: '1000px' }} onMouseEnter={function () { setHover1(true); console.log('helo') }} onMouseLeave={function () { setHover1(false) }} >

                {/* Image container */}
                <div className='w-[100%]'>
                  <img className='w-full bg-cover rounded-[7px] h-[250px]' src={social} alt="" />
                </div>

                {/* Content that zooms in on hover with 3D effect */}
                <div style={{ transformStyle: 'preserve-3d', }} className={`w-[100%]  absolute top-0 left-0 cursor-pointer transition-transform duration-300 ${hover1 ? 'translate-y-0 translate-z-[130px] opacity-100 ' : 'translate-z-0 translate-y-[-50%] opacity-0 scale-0'}`}>
                  <div className='w-[100%] h-[250px] p-5 bg-purple-800 bg-opacity-[70%] flex-col flex justify-center items-center'>
                    <p className='text-white font-semibold text-lg live'>Live Project</p>
                    <p className='text-white font-semibold text-lg live'>Social Media</p>
                  </div>
                </div>
              </div></Link>
            </div>
            <div className='flex flex-col gap-2'>
              <Link to={'https://nabeelhash-chatapp.vercel.app/'}><div className='box relative w-[100%] b' style={{ perspective: '1000px' }} onMouseEnter={function () { setHover2(true); console.log('helo') }} onMouseLeave={function () { setHover2(false) }} >

                {/* Image container */}
                <div className='w-[100%]'>
                  <img className='w-full bg-cover rounded-[7px] h-[250px]' src={chat} alt="" />
                </div>

                {/* Content that zooms in on hover with 3D effect */}
                <div style={{ transformStyle: 'preserve-3d', }} className={`w-[100%]  absolute top-0 left-0 cursor-pointer transition-transform duration-300 ${hover2 ? 'translate-y-0 translate-z-[130px] opacity-100 ' : 'translate-z-0 translate-y-[-50%] opacity-0 scale-0'}`}>
                  <div className='w-[100%] h-[250px] p-5 bg-blue-800 bg-opacity-[70%] flex-col flex justify-center items-center'>
                  <p className='text-white font-semibold text-lg live'>Live Project</p>
                    <p className='text-white font-semibold text-lg live'>Chat App</p>                  
                    </div>
                </div>
              </div></Link>
              <div className='box relative w-[100%] b' style={{ perspective: '1000px' }} onMouseEnter={function () { setHover3(true); console.log('helo') }} onMouseLeave={function () { setHover3(false) }} >

                {/* Image container */}
                <div className='w-[100%]'>
                  <img className='w-full bg-cover rounded-[7px] h-[250px]' src={mern} alt="" />
                </div>

                {/* Content that zooms in on hover with 3D effect */}
                <div style={{ transformStyle: 'preserve-3d', }} className={`w-[100%]  absolute top-0 left-0 cursor-pointer transition-transform duration-300 ${hover3 ? 'translate-y-0 translate-z-[130px] opacity-100 ' : 'translate-z-0 translate-y-[-50%] opacity-0 scale-0'}`}>
                  <div className='w-[100%] h-[250px] p-5 bg-amber-800 bg-opacity-[70%]  flex justify-center items-center'>
                    <p className='text-white font-semibold text-lg live'>Live Project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects
