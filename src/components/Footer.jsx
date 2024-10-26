import React from 'react'
import { FaTwitter,FaFacebook,FaGithub,FaLinkedin,FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
          <div className='flex-1 mb-4 md:mb-0'>
            <h3 className='text-2xl font-bold mb-2'>Yousaf</h3>
            <p className='text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, praesentium?</p></div>
       
        <div className='flex-1 w-full'>
          <form className='flex items-center justify-center'>
            <input type="email" placeholder='Enter Email' className='w-full p-2 rounded-l-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-purple-500' />
            <button className='bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-white px-4 py-2 rounded-r-lg  '>Subscribe
            </button>
          </form>
        </div>
        </div>
        <div className='flex flex-col border-t border-purple-600 pt-4 md:flex-row justify-between items-center'>
          <p className='text-gray-400'>
            &copy; {new Date().getFullYear()}
          </p>
          <div className='flex space-x-4 my-4 md:my-0'>
            <a href="" className='text-gray-400 hover:text-white'>
              <FaInstagram />
            </a>
            <a href="" className='text-gray-400 hover:text-white'>
              <FaLinkedin />
            </a>
            <a href="" className='text-gray-400 hover:text-white'>
              <FaFacebook />
            </a>
            <a href="" className='text-gray-400  hover:text-white'>
              <FaGithub />
            </a>
            <a href="" className='text-gray-400 hover:text-white'>
              <FaTwitter  />
            </a>
          </div>
          <div>
            <p>
              <a href="" className='text-gray-400 hover:text-white'>Privacy </a>
              <a href="" className='text-gray-400 hover:text-white'>  Terms of Service</a>
               </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer