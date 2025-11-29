import React from 'react'
import {Navbar} from '../Navbar/Navbar.jsx'
import NavbarBanner from '../Navbar/NavbarBanner.jsx'
import Hero from '../Hero/Hero.jsx'
import Explanation from '../Explanation/Explanation.jsx'
import Ourbusiness from '../Explanation/Ourbusiness.jsx'
import Members from '../Explanation/Members.jsx'
import Instagram from '../SNS/Instagram.jsx'
import Footer from '../Footer/Footer.jsx'

function Home() {
  return (
    <>
      <Navbar />
      <NavbarBanner />
      <Hero />
      <Explanation />
      <Ourbusiness />
      <Members />
      <Instagram />
      <Footer />
      </>
    
  )
}

export default Home