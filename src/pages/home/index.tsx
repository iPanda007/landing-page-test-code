import React from 'react'
import HeroSection from '../../components/HeroSection'
import AboutPage from '../../components/AboutPage'
import OurChallenges from '../../components/Challage'
import Information from '../../components/Information'
import Footer from '../../components/Footer'

const HomeIndex = () => {
  return (
    <div>   
        <HeroSection/>
        <AboutPage/>
        <OurChallenges/>
        <Information/>
        <Footer/>
    </div>
  )
}

export default HomeIndex
