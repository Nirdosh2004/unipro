import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Hero = () => {

  const { navigate, token } = useContext(AppContext)

  return (
    <div className='m-10 flex flex-col sm:flex-row bg-gradient-to-r from-green-50 to-green-100 drop-shadow-2xl rounded-3xl overflow-hidden border border-green-200'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-12 px-8 sm:px-12'>
        <div className='text-[#2d3748]'>
          <div className='mb-6'>
            <span className='bg-green-600 text-white text-sm font-semibold px-4 py-1 rounded-full'>
              NEW: Without AI Insights
            </span>
          </div>

          <h1 className='font-bold lg:text-6xl text-5xl leading-tight mb-4'>
            Unlock Hidden <span className='text-green-600'>Learning Patterns</span>
          </h1>

          <p className='text-lg text-gray-700 mb-8 leading-relaxed'>
            Go beyond traditional grades with our intelligent analytics platform that reveals student strengths, predicts challenges, and personalizes learning paths.
          </p>

          <div className='flex flex-col sm:flex-row gap-4'>
            {
              token
                ? null
                : <button onClick={() => navigate('/login')} className='bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all transform hover:scale-105'>
                  Get Started - It's Free
                </button>
            }
            <button className='border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600  font-medium px-6 py-3 rounded-lg transition-all cursor-pointer'>
              See How It Works →
            </button>
          </div>

          <div className='mt-6 flex items-center text-sm text-gray-600'>
            <div className='flex items-center mr-4'>
              <svg className='w-5 h-5 mr-1 text-green-500' fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Paisa nhi lunga bhai
            </div>
            <div className='flex items-center'>
              <svg className='w-5 h-5 mr-1 text-green-500' fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              30-second setup
            </div>
          </div>
        </div>
      </div>

      {/* Hero Right side */}
      <div className='w-full sm:w-1/2 relative'>
        <img
          className='w-full h-full object-cover'
          src={assets.banner}
          alt="Education analytics dashboard showing student progress"
        />
        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6 text-white'>
          <p className='text-sm'>" फीस - पूरी लो
            ✅ प्लेसमेंट - 'भगवान भरोसे'"</p>
          <p className='text-xs mt-1'>— Delhi Institute of Higher Education.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;