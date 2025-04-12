import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import StudentsCard from '../components/StudentsCard'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

const Explore = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Hero />
      <StudentsCard />
      <CallToAction />
      {/* <Footer /> */}
    </div>
  )
}

export default Explore