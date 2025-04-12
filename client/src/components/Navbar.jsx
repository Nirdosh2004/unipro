import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { token, navigate, setToken } = useContext(AppContext);
  const [visible, setVisible] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const logout = () => {
    navigate('/login');
    setToken('');
    localStorage.removeItem('token');
    setProfileOpen(false);
  };

  // Active link styles
  const getNavLinkStyle = ({ isActive }) =>
    isActive
      ? 'text-green-600 font-semibold border-b-2 border-green-600'
      : 'text-gray-700 hover:text-green-500 transition-colors duration-200';

  return (
    <nav className="bg-white rounded-2xl shadow-sm py-3 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with animation */}
        <div
          onClick={() => navigate('/')}
          className="cursor-pointer flex items-center hover:scale-105 transition-transform duration-200"
        >
          <img src={assets.logo} className="h-10" alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={getNavLinkStyle}>
            <span className="hover:scale-105 transition-transform duration-200 block">Explore</span>
          </NavLink>
          <NavLink to="/students" className={getNavLinkStyle}>
            <span className="hover:scale-105 transition-transform duration-200 block">Students</span>
          </NavLink>
          <NavLink to="/assignments" className={getNavLinkStyle}>
            <span className="hover:scale-105 transition-transform duration-200 block">Assignments</span>
          </NavLink>
          <NavLink to="/resources" className={getNavLinkStyle}>
            <span className="hover:scale-105 transition-transform duration-200 block">Resources</span>
          </NavLink>
          <NavLink to="/about" className={getNavLinkStyle}>
            <span className="hover:scale-105 transition-transform duration-200 block">About</span>
          </NavLink>
        </div>

        {/* User Profile & Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Profile Dropdown */}
          <div className="relative">
            <img
              onClick={() => {
                if (!token) navigate('/login');
                else setProfileOpen(!profileOpen);
              }}
              src={assets.default_user}
              className={`h-8 w-8 rounded-full cursor-pointer hover:ring-2 hover:ring-green-200 transition-all duration-200 ${profileOpen ? 'ring-2 ring-green-400' : ''
                }`}
              alt="User"
            />
            {token && profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 animate-fadeIn">
                <NavLink
                  to="/profile"
                  onClick={() => setProfileOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                >
                  Profile
                </NavLink>
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button with animation */}
          <button
            onClick={() => setVisible(true)}
            className="md:hidden p-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all duration-200"
          >
            <img
              src={assets.menu_icon}
              className="h-6 w-6 hover:rotate-90 transition-transform duration-300"
              alt="Menu"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu with Blur Background */}
      {visible && (
        <>
          {/* Blurry Background Overlay with fade-in animation */}
          <div
            className="md:hidden fixed inset-0 z-40 backdrop-blur-sm bg-black/30 animate-fadeIn"
            onClick={() => setVisible(false)}
          />

          {/* Mobile Menu Panel with slide-in animation */}
          <div
            className={`md:hidden fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-xl transform transition-all duration-300 ease-in-out ${visible ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <div className="flex flex-col h-full">
              {/* Close Button with animation */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setVisible(false)}
                  className="p-1 rounded-md hover:bg-gray-100 focus:outline-none transition-colors duration-200"
                >
                  <img
                    src={assets.right_arrow}
                    className="h-5 w-5 hover:rotate-180 transition-transform duration-300"
                    alt="Close"
                  />
                </button>
              </div>

              {/* Mobile Navigation Links with staggered animations */}
              <div className="flex-1 flex flex-col px-4 space-y-2">
                {[
                  { to: "/", label: "Explore" },
                  { to: "/students", label: "Students" },
                  { to: "/assignments", label: "Assignments" },
                  { to: "/resources", label: "Resources" },
                  { to: "/about", label: "About" }
                ].map((link, index) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setVisible(false)}
                    className={({ isActive }) =>
                      `py-3 px-4 rounded-md transition-all duration-200 transform hover:scale-105 ${isActive
                        ? 'bg-green-50 text-green-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                      } animate-slideInRight`
                    }
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              {/* User Info with fade-in animation */}
              {token && (
                <div className="p-4 border-t animate-fadeIn">
                  <p className="text-sm text-gray-500">Logged in as:</p>
                  <p className="font-medium text-green-600">
                    {localStorage.getItem('username') || 'User'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;