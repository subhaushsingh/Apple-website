import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Models from './components/Models'


const App = () => {
  

  return (
    <>
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <Models />
    </main>
    </>
  )
}

export default App
