import React from 'react'
import  Navbar  from '../components/Navbar'

const Contacts = () => {
  return (
    <div className='bg-gradient-to-r from-gray-800 to-purple-950 h-screen'>
      <Navbar />
      <div className='flex flex-col justify-center items-center h-[89vh]'>
        <p className='text-[42px] text-white font-bold mb-4'>Contact <span className='text-red-600'>Us</span></p>
        <div className='flex flex-col gap-3 w-full justify-center items-center'>
          <input type="text" className='bg-transparent text-white border-2 border-gray-700 rounded-[6px] px-3 py-1 w-[70%] md:w-[50%] lg:w-[33%]' id="" placeholder='Name' />
          <input type="text" className='bg-transparent text-white border-2 border-gray-700 rounded-[6px] px-3 py-1 w-[70%] md:w-[50%] lg:w-[33%]' id="" placeholder='Subject' />
          <textarea type="text" className='bg-transparent text-white border-2 border-gray-700 rounded-[6px] px-3 py-1 w-[70%] md:w-[50%] lg:w-[33%] h-[150px]' id="" placeholder='Message' />
          <button className='bg-transparent text-white border-2 border-gray-600 rounded-[26px] px-7 py-2 transform transition-transform duration-200 hover:bg-red-600 hover:scale-105'>Submit</button>
        </div>

      </div>
    </div>
  )
}

export default Contacts
