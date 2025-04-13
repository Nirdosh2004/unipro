import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const Hero = () => {
  const { navigate, token } = useContext(AppContext);
  const [currentTagline, setCurrentTagline] = useState(0);

  const taglines = [
    "Unlock your hidden talents, and watch your passions soar.",
    "Expand your horizons, and realize the full scope of your potential.",
    "Cultivate your interests, and scale them to extraordinary heights.",
    "Discover what you're truly capable of, and elevate your passions."
  ];

  // Rotate taglines every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      cursor: "pointer"
    },
    tap: { scale: 0.98 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className='mx-4 md:mx-10 my-8 md:my-12 flex flex-col lg:flex-row bg-gradient-to-br from-emerald-300 via-white to-emerald-500 rounded-3xl overflow-hidden border border-green-100 shadow-xl hover:shadow-2xl transition-all duration-500'
    >
      {/* Hero Left Side */}
      <div className='w-full lg:w-1/2 flex items-center justify-center py-8 md:py-12 px-6 md:px-12 lg:px-16 order-2 lg:order-1'>
        <motion.div className='text-gray-800' variants={containerVariants}>
          <motion.div className='mb-6 flex flex-wrap gap-3' variants={itemVariants}>
            <span className='relative inline-block bg-gradient-to-r from-green-600 to-emerald-500 text-white text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full shadow-md overflow-hidden'>
              <span className='relative z-10'>NEW: Student Portfolio Assistant</span>
              <span className='absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400 opacity-0 hover:opacity-100 transition-opacity duration-300'></span>
            </span>
          </motion.div>

          <motion.h1
            className='font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4'
            variants={itemVariants}
          >
            Discover Your <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500'>Full Potential</span>
          </motion.h1>

          <motion.div
            className="h-16 mb-6 overflow-hidden relative"
            variants={itemVariants}
          >
            {taglines.map((tagline, index) => (
              <motion.p
                key={index}
                className='text-base md:text-lg text-gray-700 leading-relaxed absolute w-full'
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: currentTagline === index ? 0 : -20,
                  opacity: currentTagline === index ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
              >
                {tagline}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            className='flex flex-col sm:flex-row gap-4 mb-8'
            variants={itemVariants}
          >
            <motion.button
              onClick={() => navigate('/resources')}
              className='relative overflow-hidden flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg group'
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className='relative z-10 flex items-center'>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Study Resources
              </span>
              <span className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
            </motion.button>

            <motion.button
              onClick={() => navigate('/assignments')}
              className='flex items-center justify-center bg-white border-2 border-emerald-500 hover:bg-emerald-50 text-emerald-600 font-semibold px-8 py-3.5 rounded-lg shadow-sm group'
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              My Assignments
            </motion.button>
          </motion.div>

          <motion.div
            className='flex flex-wrap gap-4 text-sm text-gray-600'
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
              <span>100% Free (till I get greedy)</span>
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
              <span>Free because I haven't added a "Buy Me a Coffee" button yet.</span>
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
            className='w-full h-full max-h-[550px] object-contain transition-transform duration-700 hover:scale-105'
            src={assets.banner}
            alt="Education analytics dashboard showing student progress"
          />
          <div className='absolute inset-0 bg-gradient-to-t from-emerald-100/30 via-transparent to-transparent'></div>

          {/* Floating elements animation */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/30 shadow-lg"
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-emerald-400/20 backdrop-blur-sm rounded-full border-2 border-emerald-300/30 shadow-lg"
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;