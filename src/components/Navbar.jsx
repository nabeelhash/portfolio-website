import React from 'react'
import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const location = useLocation()
  console.log(location.pathname)
  return (
    <div>
      <div className='flex justify-between px-10 py-0 items-center'>
        <div className='flex justify-center items-center gap-3'>
          <img src={logo} alt="logo" className='w-[50px]' />
          <div className='flex flex-col text-white'>
            <p className='text-lg font-bold '>Nabeel</p>
            <p className='text-lg font-bold'>| Portfolio</p>
          </div>
        </div>
        <div className='list-none gap-10 hidden md:flex '>
          <Link to={'/'}><li className={`text-gray-200 ${location.pathname === '/' ? 'text-white font-semibold underline  decoration-red-500 decoration-2' : ''} cursor-pointer transform transition-transform duration-300 hover:scale-110`}>Home</li></Link>
          <Link to={'/about'}><li className={`text-gray-200 ${location.pathname === '/about' ? 'text-white font-semibold underline  decoration-red-500 decoration-2' : ''} cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:text-white`}>About</li></Link>
          <Link to={'/contact'}><li className={`text-gray-200 ${location.pathname === '/contact' ? 'text-white font-semibold underline  decoration-red-500 decoration-2' : ''} cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:text-white`}>Contacts</li></Link>
          <Link to={'/projects'}><li className={`text-gray-200 ${location.pathname === '/projects' ? 'text-white font-semibold underline  decoration-red-500 decoration-2' : ''} cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:text-white`}>Projects</li></Link>
          <Link to={'/testimonial'}><li className={`text-gray-200 ${location.pathname === '/testimonial' ? 'text-white font-semibold underline  decoration-red-500 decoration-2' : ''} cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:text-white`}>Testimonial</li></Link>

        </div>
        <div className='block md:hidden'>
          {!toggle ?
            <img src={menu} alt="" onClick={function () { setToggle(true) }} />
            :
            <div >
              <img className='relative' src={close} alt="" onClick={function () { setToggle(false) }} />
              <div className='bg-black  rounded-l-[5px] h-[180px] absolute right-0 top-[60px] w-[200px] z-10'>
                <div className='list-none  gap-2 flex flex-col px-5 py-3'>
                  <Link to={'/'}><li className={`text-gray-200 ${location.pathname === '/' ? 'text-white font-semibold underline  decoration-red-500 decoration-2' : ''} cursor-pointer transform transition-transform duration-300 hover:scale-110`}>Home</li></Link>
                  <Link to={'/about'}><li className={`text-gray-200 ${location.pathname === '/about' ? 'text-white font-semibold underline  decoration-red-500 decoration-2' : ''} cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:text-white`}>About</li></Link>
                  <Link to={'/contact'}><li className={`text-gray-200 ${location.pathname === '/contact' ? 'text-white font-semibold underline  decoration-red-500 decoration-2' : ''} cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:text-white`}>Contacts</li></Link>
                  <Link to={'/projects'}><li className={`text-gray-200 ${location.pathname === '/projects' ? 'text-white font-semibold underline  decoration-red-500 decoration-2' : ''} cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:text-white`}>Projects</li></Link>
                  <Link to={'/testimonial'}><li className={`text-gray-200 ${location.pathname === '/testimonial' ? 'text-white font-semibold underline  decoration-red-500 decoration-2' : ''} cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:text-white`}>Testimonial</li></Link>

                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar