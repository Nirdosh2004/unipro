import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const { token, navigate, setToken } = useContext(AppContext)
  const [visible, setVisible] = useState(false)

  const logout = () => {
    navigate('/login')
    setToken('')
    localStorage.removeItem('token')
  }

  return (
    <div className='flex items-center justify-between gap-6 font-medium py-2'>
      <img onClick={() => navigate('/')} src={assets.logo} className='w-20' alt="" />
      <ul className='hidden border sm:flex border-gray-200 px-5 py-2 drop-shadow-2xl rounded-2xl bg-gray-200 gap-10'>
        <NavLink to={'/'} className='flex flex-col items-center'>Explore</NavLink>
        <NavLink to={'/students'} className='flex flex-col items-center'>Students</NavLink>
        <NavLink to={'/'} className='flex flex-col items-center'>Assignments</NavLink>
        <NavLink to={'/'} className='flex flex-col items-center'>Resources</NavLink>
        <NavLink to={'/'} className='flex flex-col items-center'>About us</NavLink>
      </ul>

      {/* Separate container for profile and menu button */}
      <div className='flex items-center gap-4'>
        {/* Profile icon with dropdown */}
        <div className='group relative'>
          <img
            onClick={() => token ? null : navigate('/login')}
            className='w-8 cursor-pointer'
            src={assets.default_user}
            alt=""
          />
          {token && (
            <div className='group-hover:block hidden absolute dropdown-menu border border-[#C0C0C0] rounded right-0'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p onClick={() => navigate('/profile')} className='cursor-pointer text-black font-medium'>Profile</p>
                <p onClick={logout} className='cursor-pointer text-red-600'>Logout</p>
              </div>
            </div>
          )}
        </div>

        {/* Menu button - visible only on mobile */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt=""
        />
      </div>

      {/* Mobile menu */}
      <div className={`absolute font-medium top-0 right-0 bottom-0 overflow-scroll bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-800 '>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img src={assets.right_arrow} className='h-4 rotate-0' alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b-2 border-gray-400 rounded-r-md ' to='/'>Explore</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b-2 border-gray-400 rounded-r-md' to='/students'>Students</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b-2 border-gray-400 rounded-r-md' to='/about'>Assignments</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b-2 border-gray-400 rounded-r-md' to='/contact'>Resources</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b-2 border-gray-400 rounded-r-md' to='/contact'>About us</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar