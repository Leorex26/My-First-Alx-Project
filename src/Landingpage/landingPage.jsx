import React from 'react'
import Header from './components/navBar'
import Hero from './components/hero'
import About from './components/about'
import WhyJoin from './components/whyjoin'
import Blog from './components/blog'
import Team from './components/theme'
import Footer from './components/footer'

const LandingPage = () => {
  return (
    <main className='flex flex-col w-full font-Poppins'>
      <Header/>
      <Hero/>
      <About/>
      <WhyJoin/>
      <Blog/>
      <Team/>
      <Footer/>
    </main>
  )
}

export default LandingPage
