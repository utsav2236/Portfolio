import React from 'react'
import { MdCall } from 'react-icons/md'
import { IoMdMail } from 'react-icons/io'
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className='bg-black text-white py-20' id='Contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact</h2>
        <div className=' flex flex-col md:flex-row items-center md:space-x-12'>
          <div className='flex-1'>
            <h3 className='bg-gradient-to-r from-fuchsia-500 to-indigo-600 my-2 text-3xl fomt-bold text-transparent bg-clip-text font-bold'>Let's Talk</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, officia?</p>
            <div className='mb-4 mt-4'>
              <IoMdMail className='inline pr-2 size-7 align-top' />
              <a href="milato:prajapatiutsav2236@gmail.com" className='hover:underline hover:text-blue-700'>prajapatiutsav2236@gmail.com</a>
            </div>
            <div className='mb-4'>
              <MdCall className='inline pr-2 size-7 align-top' />
              <span>+91  99242 43822</span>
            </div>
            <div className='mb-4'>
              <FaLocationDot className='inline pr-2 size-6 align-top' />
              <span>D-44 Shitalnath Prabhu Society kathwada road naroda-382330 Ahmedabad India</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form action="" className='space-y-4'>
              <div>
                <label htmlFor="name" className='mb-2 block'>Name</label>
                <input type='text' className='w-full p-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-purple-400' placeholder='Enter Your Name' />
              </div>
              <div>
                <label htmlFor="email" className='mb-2 block'>E-mail</label>
                <input type='text' className='w-full p-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-purple-400' placeholder='Enter Your Email' />
              </div>
              <div>
                <label htmlFor="Message" className='mb-2 block'>Message</label>
                <textarea type='text' className='w-full p-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-purple-400' placeholder='Enter Your Message' rows='5' />
                <button className='bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-6 rounded-full text-center py-2 mt-3'>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact