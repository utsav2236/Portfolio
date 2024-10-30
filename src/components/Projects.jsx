import React from 'react'
import portfolio from '../assets/Portfolio.png'
import Blog from '../assets/Blog_img.png'
import calc from '../assets/calc.png'

const arr = [
  {
    "id": 1,
    "name": "Personal Portfolio",
    "technology": "React",
    "imageName": portfolio,
    "githubLink": "https://github.com/username/personal-portfolio"
  },
  {
    "id": 2,
    "name": "Blog",
    "technology": "HTML & CSS",
    "imageName": Blog,
    "githubLink": "https://github.com/username/e-commerce-website"
  },
  {
    "id": 3,
    "name": "Calculator",
    "technology": "HTML , CSS & JS",
    "imageName": calc,
    "githubLink": "https://github.com/username/social-media-app"
  }
]


const Projects = () => {
  return (
    <div className='bg-black text-white py-12' id='Projects'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {arr.map( arr =>(
          <div key={arr.id} className='bg-gray-900 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
          <img src={arr.imageName} alt={arr.name} className='rounded-lg mb-4 w-full h-48 object-cover'/>
          <h3 className='text-2xl font-bold mb-2'>{arr.name}</h3>
          <p className='text-gray-400 mb-4'>{arr.technology}</p>
          <a href={arr.githubLink} className='inline-block bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-white px-4 py-2 rounded-full' target='_blank'>Gituhub</a>
        </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Projects