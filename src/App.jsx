import React from 'react'
import { Navbar } from './components/Navbar/Navbar.jsx'
import NavbarBanner from './components/Navbar/NavbarBanner.jsx'
import Hero from './components/Hero/Hero.jsx'
import Explanation from './components/Explanation/Explanation.jsx'
import Ourbusiness from './components/Explanation/Ourbusiness.jsx'
import Members from './components/Explanation/Members.jsx'
import Instagram from './components/SNS/Instagram.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
      <Explanation />
      <Ourbusiness />
      <Members />
      <Instagram />
      <Footer />




    </main>
  )
}

export default App