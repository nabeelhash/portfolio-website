import React from 'react'
import Navbar from '../components/Navbar'
import mern from '../assets/mern.jpg'
import ecommerce from '../assets/ecommerce.jpg'
import chat from '../assets/chatapp.jpg'
import social from '../assets/social.jpg'
import movie from '../assets/movie.PNG'
import gemini from '../assets/geminiApp.PNG'

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
      <div className='flex flex-col justify-center items-center py-5 lg:py-0 lg:pt-10'>
        <div className='px-7 md:px-20 py-10 flex flex-col gap-0 md:gap-3'>
          <p className='h1 text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-white font-bold mb-4 inline-flex'>My Projects.</p>
          <p className='h1 text-sm lg:text-[16px] leading-6 text-white font-medium'>I have built several full-stack applications using the MERN stack, which includes MongoDB for the database, Express.js for the backend framework, React for the frontend, and Node.js as the runtime environment. These projects demonstrate my ability to create end-to-end web applications, leveraging the power of the MERN stack to handle everything from user interface design to data management and server-side functionality.</p>
        </div>
        <div className=' flex flex-wrap gap-[20px] lg:gap-[30px] justify-center w-[90%] '>
          <div className='w-[100%] sm:w-[80%] md:w-[45%] lg:w-[31%] rounded-[10px] px-5 py-5 bg-blue-950'>
            <Link to={'https://nabeelhashmi-ecommerce.vercel.app/'}><img className='w-full object-cover object-left rounded-[7px] h-[220px] md:h-[250px]' src={ecommerce} alt="" /></Link>
            <div className='text-white flex flex-col gap-3 my-3'>
              <p className='text-2xl font-bold'>Ecommerce</p>
              <p className='text-sm ms:text-md text-gray-300'>A full-featured e-commerce application consist of user friendly interface and features such as user authentication and authorization using JWT token, profile creation, product creation, updates and deletion, review submission, product search, and shopping cart functionality</p>

            </div>
          </div>
          <div className='w-[100%] sm:w-[80%] md:w-[45%] lg:w-[31%] rounded-[10px] px-5 py-5 bg-blue-950'>
            <Link to={'https://nabeel-movie-app.vercel.app/'}><img className='w-full object-cover rounded-[7px] h-[220] md:h-[250px]' src={movie} alt="" /></Link>
            <div className='text-white flex flex-col gap-3 my-3'>
              <p className='text-2xl font-bold'>Movie</p>
              <p className='text-sm ms:text-md text-gray-300'>A Nextjs Movie website using TMDB api, which enable user to search new movies base on different categories and read its info which includes name, description, release date, poster, ratings and video trailer</p>
            </div>          
          </div>
          <div className='w-[100%] sm:w-[80%] md:w-[45%] lg:w-[31%] rounded-[10px] px-5 py-5 bg-blue-950'>
            <Link to={'https://nabeel-movie-app.vercel.app/'}><img className='w-full object-cover object-left rounded-[7px] h-[220px] md:h-[250px]' src={gemini} alt="" /></Link>
            <div className='text-white flex flex-col gap-3 my-3'>
              <p className='text-2xl font-bold'>Gemini APP</p>
              <p className='text-sm ms:text-md text-gray-300'>A AI Chat bot website similar to chatgpt built using Gemini AI, which helped create content, and code through simple conversations. Overall, it made the entire process faster and easier.  </p>
            </div>          
          </div>
          <div className='w-[100%] sm:w-[80%] md:w-[45%] lg:w-[31%] rounded-[10px] px-5 py-5 bg-blue-950'>
            <Link to={'https://nabeelhash-socialmedia.vercel.app/'}><img className='w-full bg-cover rounded-[7px] h-[220px] md:h-[250px]' src={social} alt="" /></Link>
            <div className='text-white flex flex-col gap-3 my-3'>
              <p className='text-2xl font-bold'>Social Media</p>
              <p className='text-sm ms:text-md text-gray-300'>A social media platform for users to create profiles, post management, follow and unfollow friends, block and unblock friends and engage through comments and likes. Key feature also includes user registration and authentication using JWT token.</p>
            </div>
          </div>        
          <div className='w-[100%] sm:w-[80%] md:w-[45%] lg:w-[31%] rounded-[10px] px-5 py-5 bg-blue-950'>
            <Link to={'https://nabeelhash-chatapp.vercel.app/'}><img className='w-full bg-cover rounded-[7px] h-[220px] md:h-[250px]' src={chat} alt="" /></Link>
            <div className='text-white flex flex-col gap-3 my-3'>
              <p className='text-2xl font-bold'>Chat App</p>
              <p className='text-sm ms:text-md text-gray-300'>A real-time chat application enabling users to have one to one chat or having group chat, send messages in real time, sharing and uploading images securely. MongoDB, Express.js, React.js, Node.js, Socket.IO for real-time communication, JWT for authentication.</p>
            </div> 
          </div>

        </div>
      </div>

    </div>
  )
}

export default Projects
