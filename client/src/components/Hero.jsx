import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const Hero = () => {
  const { navigate, token } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className='mx-4 md:mx-10 my-8 md:my-12 flex flex-col lg:flex-row bg-gradient-to-r from-green-50 via-white to-green-50 rounded-3xl overflow-hidden border border-green-200 shadow-xl hover:shadow-2xl transition-shadow duration-500'
    >
      {/* Hero Left Side */}
      <div className='w-full lg:w-1/2 flex items-center justify-center py-8 md:py-12 px-6 md:px-12 lg:px-16 order-2 lg:order-1'>
        <motion.div className='text-gray-800' variants={containerVariants}>
          <motion.div className='mb-6' variants={itemVariants}>
            <span className='relative inline-block bg-gradient-to-r from-green-600 to-emerald-500 text-white text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full shadow-md overflow-hidden'>
              <span className='relative z-10'>NEW: Without AI Insights</span>
              <span className='absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400 opacity-0 hover:opacity-100 transition-opacity duration-300'></span>
            </span>
          </motion.div>

          <motion.h1
            className='font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4'
            variants={itemVariants}
          >
            Unlock Hidden <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500'>Learning Patterns</span>
          </motion.h1>

          <motion.p
            className='text-base md:text-lg text-gray-700 mb-8 leading-relaxed'
            variants={itemVariants}
          >
            Go beyond traditional grades with our intelligent analytics platform that reveals student strengths, predicts challenges, and personalizes learning paths.
          </motion.p>

          <motion.div
            className='flex flex-col sm:flex-row gap-4 mb-8'
            variants={itemVariants}
          >
            {!token && (
              <button
                onClick={() => navigate('/login')}
                className='relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className='relative z-10 flex items-center justify-center'>
                  Get Started - It's Free
                  <svg
                    className={`ml-2 w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className='absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
              </button>
            )}
            <button className='flex items-center justify-center border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 font-medium px-6 py-3 rounded-lg transition-all duration-300 group'>
              <span>See How It Works</span>
              <svg
                className='ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1'
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>

          <motion.div
            className='flex flex-col sm:flex-row gap-4 text-sm text-gray-600'
            variants={itemVariants}
          >
            <div className='flex items-center'>
              <div className='relative mr-2'>
                <div className='w-5 h-5 bg-green-100 rounded-full flex items-center justify-center'>
                  <svg className='w-3 h-3 text-green-600' fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className='absolute inset-0 rounded-full border-2 border-green-200 animate-ping opacity-0'></div>
              </div>
              <span>Paisa nhi lunga bhai</span>
            </div>
            <div className='flex items-center'>
              <div className='relative mr-2'>
                <div className='w-5 h-5 bg-green-100 rounded-full flex items-center justify-center'>
                  <svg className='w-3 h-3 text-green-600' fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className='absolute inset-0 rounded-full border-2 border-green-200 animate-ping opacity-0 animation-delay-300'></div>
              </div>
              <span>30-second setup</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Right side */}
      <motion.div
        className='w-full lg:w-1/2 relative order-1 lg:order-2'
        variants={itemVariants}
      >
        <div className='relative h-64 md:h-80 lg:h-full w-full overflow-hidden'>
          <img
            className='w-full h-full object-cover transition-transform duration-700 hover:scale-105'
            src={assets.banner}
            alt="Education analytics dashboard showing student progress"
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent'></div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className='max-w-md'
          >
            <p className='text-sm md:text-base font-medium italic'>"फीस - पूरी लो ✅ प्लेसमेंट - 'भगवान भरोसे'"</p>
            <p className='text-xs md:text-sm mt-1 opacity-90'>— Delhi Institute of Higher Education.</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;