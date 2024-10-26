import React from 'react'

const item = [
  {
      id: 1,
      title: "Fronted Developer",
      description: "Building efficient and interactive User Interfaces"
  },
  {
      id: 2,
      title: "Content Writing",
      description: "Writing Content for your business and companies."
  },
  {
      id: 3,
      title: "Web Designer",
      description: "Creating the layout and visual aspects of a website"
  },
  {
      id: 4,
      title: "Freelancer",
      description: "Build & maintain web application for clients."
  },
  {
      id: 5,
      title: "Digital Marketing",
      description: "Pronoting business with degital marketing terms."
  },
  {
      id: 6,
      title: "Backend",
      description: "Lerner of backend no sql technology MongoDb."
  }
];

const Sevices = () => {
  return (
    <div className='bg-black text-white py-12' id='Services'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
      <h2 className='text-4xl font-bold text-center mb-12'>Services</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {item.map(item =>(
          <div key={item.id} className='bg-gray-900 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
            <div className='bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-right text-2xl fomt-bold text-transparent bg-clip-text'>
              {item.id}
            </div>
            <h3 className='bg-gradient-to-r from-fuchsia-500 to-indigo-600 mt-2 text-2xl fomt-bold text-transparent bg-clip-text font-bold'>{item.title}</h3>
            <p className='mt-2 text-gray-300'>{item.description}</p>
            <a href="#" className='mt-4 inline-block text-purple-600 hover:text-purple-400'>Read More</a>
          </div>
        ))}
      </div>
      </div>
      </div>
  )
}

export default Sevices