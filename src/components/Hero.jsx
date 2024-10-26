import React from 'react'
import img from '../assets/Photo1.png'


const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16' id='Home'>
      <img src={img} alt="img" className='mx-auto mb-8 h-48 w-48 rounded-full object-fill transform transition-transform duration-300 hover:scale-105' />
      <h1 className='text-4xl font-bold'>I'm {""}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Utsav Prajapati</span>
          , Fronted Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300 px-4 md:px-32'>I am Build Responsive Web Applications </p>
      <div className='mt-8 space-x-4'>
        <button className='bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 rounded-full text-center py-2'> Connect With Me</button>
        <button className='bg-blue-500  -700 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 rounded-full text-center py-2'>Resume</button>
      </div>
    </div>
  )
}

export default Hero
