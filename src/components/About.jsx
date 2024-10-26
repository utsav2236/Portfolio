import React from 'react'
import img from '../assets/Photo1.png'

const About = () => {
  return (
    <div className='bg-black text-white py-20' id='About'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        <div className=' flex flex-col md:flex-row items-center md:space-x-12'>
          <img src={img} alt="img" className='w-64 h-72 rounded object-fill mb-8 md:mb-0' />
          <div className='flex-1'>
            <p className='text-lg mb-8'>I'm a front end developer. I'm passionate about creating great user experiences and have a strong understanding of usability and accessibility standards</p>
            <div className='space-y-4'>
              <div className='flex items-center'>
                <label htmlFor="HTML&CSS" className='w-2/12'>HTML & CSS</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-fuchsia-500 to-indigo-600 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <label htmlFor="JavaScript" className='w-2/12'>JavaScript</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-fuchsia-500 to-indigo-600 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <label htmlFor="React" className='w-2/12'>React</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-fuchsia-500 to-indigo-600 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-6/12'> 
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-12 flex justify-between text-center'>
              <div>
                <h3 className='bg-gradient-to-r from-fuchsia-500 to-indigo-600 bg-clip-text font-bold text-transparent text-2xl'>1+</h3>
                <p>Experience</p>
              </div>
              <div>
                <h3 className='bg-gradient-to-r from-fuchsia-500 to-indigo-600 bg-clip-text font-bold text-transparent text-2xl'>2</h3>
                <p>Project Completed</p>
              </div>
              <div>
                <h3 className='bg-gradient-to-r from-fuchsia-500 to-indigo-600 bg-clip-text font-bold text-transparent text-2xl'>3rd</h3>
                <p>Year in BCA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About