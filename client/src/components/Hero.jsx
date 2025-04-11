import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className=' m-10 flex flex-col sm:flex-row bg-green-50  drop-shadow-2xl border-white-300  rounded-3xl'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex  items-center justify-center py-10 px-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-3'>
            <h1 className='font-medium lg:text-7xl text-6xl'>See What "Grades" Can't Show</h1>
          </div>
          <p className=' text-xl mt-2 sm:py-3 leading-relaxed'>Transform scattered data into actionable insights—track progress, spot trends, and drive success with one intuitive platform.</p>
          <div className='flex items-center gap-2'>
            <button className='bg-green-200 mt-2 font-medium drop-shadow-2xl px-5 py-3 rounded-xl'>Discover Smart Analytics →</button>
          </div>
        </div>

      </div>
      {/* Hero Right side */}
      <img className='w-full sm:w-1/2  rounded ' src={assets.banner} alt="" />
    </div>
  )
}

export default Hero