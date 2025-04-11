import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='mx-4 my-10 sm:mx-10 flex flex-col sm:flex-row bg-gradient-to-br from-green-50 to-green-100 shadow-xl border border-green-200 rounded-3xl overflow-hidden'
    >
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center p-8 sm:p-12'>
        <div className='text-gray-800'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className='flex items-center gap-3'
          >
            <h1 className='font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight'>
              See What <span className='text-green-600'>"Grades"</span> Can't Show
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='text-lg sm:text-xl mt-4 sm:mt-6 leading-relaxed text-gray-600'
          >
            Transform scattered data into actionable insights—track progress, spot trends, and drive success with one intuitive platform.
          </motion.p>

          {/* Call-to-action buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className='flex flex-col sm:flex-row gap-4 mt-8'
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className='bg-green-600 text-white hover:bg-green-700 transition-all font-semibold shadow-md px-6 py-3 rounded-lg flex items-center gap-2'
            >
              Discover Smart Analytics
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>

            <div className='flex items-center justify-center sm:justify-start'>
              <span className='text-gray-600 mr-2 text-sm sm:text-base'>No account?</span>
              <motion.button
                whileHover={{ x: 2 }}
                className='text-green-600 font-semibold hover:text-green-800 transition-colors text-sm sm:text-base underline underline-offset-4'
              >
                Create one now - it's free!
              </motion.button>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className='mt-8 flex flex-wrap gap-4 text-sm text-gray-600'
          >
            <div className='flex items-center bg-white/50 px-3 py-1.5 rounded-full shadow-sm'>
              <svg className='w-4 h-4 mr-2 text-green-500' fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Trusted by 10,000+ Educators
            </div>
            <div className='flex items-center bg-white/50 px-3 py-1.5 rounded-full shadow-sm'>
              <svg className='w-4 h-4 mr-2 text-green-500' fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free Forever Plan Available
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Right side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className='w-full sm:w-1/2 relative'
      >
        <div className='absolute inset-0 bg-gradient-to-l from-green-100/50 to-transparent z-10 sm:hidden'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-green-100/50 to-transparent z-10 hidden sm:block'></div>
        <img
          className='w-full h-full object-cover'
          src={assets.banner}
          alt="Educational analytics dashboard showing student performance metrics"
        />
        <motion.div
          whileHover={{ scale: 1.05 }}
          className='absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md cursor-pointer border border-gray-200'
        >
          <div className='flex items-center gap-2'>
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className='font-medium text-sm'>View Demo</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default CallToAction;