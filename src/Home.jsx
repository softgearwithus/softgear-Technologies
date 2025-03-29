import React from 'react'
import Header from './pages/Header'
import DigitalSolutions from './pages/DigitalSolutions'
import WhyChooseSoftGear from './pages/WhyChoose'
import ClientSuccessStories from './pages/ClientSuccessStories'
import TransformBusinessSection from './pages/TransformBusinessSection'
import Footer from './components/Footer'

function Home() {
  return (
    <>
    <Header/>
    <DigitalSolutions/>
    <WhyChooseSoftGear/>
    <ClientSuccessStories/>
    <TransformBusinessSection/>
    <Footer/>
    </>
  )
}

export default Home