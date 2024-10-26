import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services  from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
     <Navbar />
     <Hero />
     <About />
     <Services />
     <Projects />
     <Contact />
     <Footer />
    </>
  )
  
}

export default App