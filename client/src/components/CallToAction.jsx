import React from 'react'
import { assets } from '../assets/assets'

const CallToAction = () => {
  return (
    <div className='m-10 flex flex-col sm:flex-row bg-green-100 drop-shadow-2xl border-white-300 rounded-3xl'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 px-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-3'>
            <h1 className='font-medium lg:text-7xl text-6xl'>See What "Grades" Can't Show</h1>
          </div>
          <p className='text-xl mt-2 sm:py-3 leading-relaxed'>Transform scattered data into actionable insights—track progress, spot trends, and drive success with one intuitive platform.</p>

          {/* Call-to-action buttons */}
          <div className='flex flex-col sm:flex-row gap-4 mt-4'>
            <button className='bg-green-600 text-white hover:bg-green-700 transition-colors font-medium drop-shadow-lg px-6 py-3 rounded-xl'>
              Discover Smart Analytics →
            </button>
            <div className='flex items-center'>
              <span className='text-gray-600 mr-2'>No account?</span>
              <button className='text-green-600 font-semibold underline hover:text-green-800 transition-colors'>
                Create one now - it's free!
              </button>
            </div>
          </div>

          {/* Trust indicators */}
          <div className='mt-6 flex items-center gap-2 text-sm text-gray-500'>
            <div className='flex items-center'>
              <svg className='w-4 h-4 mr-1 text-green-500' fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Trusted by 1 Person
            </div>
            <div className='flex items-center'>
              <svg className='w-4 h-4 mr-1 text-green-500' fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Paisa nhi lgta isme bro
            </div>
          </div>
        </div>
      </div>

      {/* Hero Right side */}
      <img className='w-full sm:w-1/2 rounded' src={assets.banner} alt="Educational analytics dashboard" />
    </div>
  )
}

export default CallToAction