import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg lg:px-24'>
      <div className='container py-2 flex md:justify-between items-center'>
        <div>
          <div className='text-2xl font-bold hidden md:inline'>UtSav</div>
        </div>
        <div className='space-x-6 text-xl'>
          <a href="#Home" className='hover:text-purple-700'>Home</a>
          <a href="#About" className='hover:text-purple-700'>About</a>
          <a href="#Services" className='hover:text-purple-700'>Services</a>
          <a href="#Projects" className='hover:text-purple-700'>Projects</a>
          <a href="#Contact" className='hover:text-purple-700'>Contact</a>
        </div>
        <div>
          <button className='bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 rounded-full text-center py-1' >Connect Me</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
