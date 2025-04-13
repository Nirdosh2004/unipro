import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  // Enhanced active link styles with more animations
  const getNavLinkStyle = ({ isActive }) =>
    isActive
      ? 'relative text-green-600 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600 after:animate-underline'
      : 'relative text-gray-700 hover:text-green-500 transition-all duration-300 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-green-500 hover:after:animate-underline';

  return (
    <nav className="bg-white rounded-2xl shadow-sm py-3 px-4 sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with enhanced animation */}
        <div
          onClick={() => navigate('/')}
          className="cursor-pointer flex items-center gap-2 hover:scale-105 transition-transform duration-300 hover:rotate-1"
        >
          <img src={assets.logo} className="h-10" alt="Logo" />
          <span className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded-lg shadow">
            UniPro
          </span>
        </div>

        {/* Desktop Navigation with enhanced animations */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={getNavLinkStyle}>
            <span className="block py-2 hover:translate-y-[-2px] transition-transform duration-300">Explore</span>
          </NavLink>
          <NavLink to="/students" className={getNavLinkStyle}>
            <span className="block py-2 hover:translate-y-[-2px] transition-transform duration-300">Students</span>
          </NavLink>
          <NavLink to="/assignments" className={getNavLinkStyle}>
            <span className="block py-2 hover:translate-y-[-2px] transition-transform duration-300">Assignments</span>
          </NavLink>
          <NavLink to="/resources" className={getNavLinkStyle}>
            <span className="block py-2 hover:translate-y-[-2px] transition-transform duration-300">Resources</span>
          </NavLink>
          <NavLink to="/about" className={getNavLinkStyle}>
            <span className="block py-2 hover:translate-y-[-2px] transition-transform duration-300">About</span>
          </NavLink>

          {/* Admin Dashboard Button - Always visible */}
          {/* <button
            onClick={() => navigate('/admin')}
            className="px-4 cursor-pointer py-1 rounded-lg bg-gradient-to-r from-gray-200 to-gray-400 text-black shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-gray-300 hover:to-gray-500 active:scale-95"
          >
            Admin Dashboard
          </button> */}
        </div>

        {/* Mobile Menu Button with enhanced animation */}
        <button
          onClick={() => setVisible(true)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all duration-300 group"
        >
          <img
            src={assets.menu_icon}
            className="h-6 w-6 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110"
            alt="Menu"
          />
        </button>
      </div>

      {/* Mobile Menu with enhanced animations */}
      {visible && (
        <>
          {/* Enhanced blur background overlay */}
          <div
            className="md:hidden fixed inset-0 z-40 backdrop-blur-sm bg-black/50 animate-fadeIn"
            onClick={() => setVisible(false)}
          />

          {/* Mobile Menu Panel with bounce animation */}
          <div
            className={`md:hidden fixed inset-y-0 right-0 z-50 w-72 bg-white shadow-2xl transform transition-all duration-500 ease-out-expo ${visible ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <div className="flex flex-col h-full">
              {/* Close Button with enhanced animation */}
              <div className="flex justify-between items-center p-4 border-b">
                <div className="w-8"></div> {/* Spacer */}
                <button
                  onClick={() => setVisible(false)}
                  className="p-2 rounded-full hover:bg-gray-100 focus:outline-none transition-all duration-300 group"
                >
                  <img
                    src={assets.right_arrow}
                    className="h-5 w-5 transition-transform duration-500 group-hover:rotate-180 group-hover:scale-125"
                    alt="Close"
                  />
                </button>
              </div>

              {/* Mobile Navigation Links with enhanced animations */}
              <div className="flex-1 flex flex-col px-6 py-4 space-y-4 overflow-y-auto">
                {[
                  { to: "/", label: "Explore", icon: "" },
                  { to: "/students", label: "Students", icon: "" },
                  { to: "/assignments", label: "Assignments", icon: "" },
                  { to: "/resources", label: "Resources", icon: "" },
                  { to: "/about", label: "About", icon: "" },
                ].map((link, index) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setVisible(false)}
                    className={({ isActive }) =>
                      `flex items-center py-4 px-4 rounded-xl transition-all duration-300 transform hover:translate-x-2 ${isActive
                        ? 'bg-green-50 text-green-600 font-medium shadow-inner'
                        : 'text-gray-700 hover:bg-gray-50'
                      } animate-slideInRight`
                    }
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-xl mr-3">{link.icon}</span>
                    <span className="text-lg">{link.label}</span>
                  </NavLink>
                ))}

                {/* Admin Dashboard Button for mobile */}
                {/* <button
                  onClick={() => {
                    navigate('/admin');
                    setVisible(false);
                  }}
                  className="mt-6 cursor-pointer px-6 py-3 rounded-xl bg-gradient-to-r from-gray-300 to-gray-200 text-black shadow-md transition-all duration-300 hover:scale-105  hover:shadow-lg hover:from-gray-300 hover:to-gray-500 active:scale-95 flex items-center justify-center"
                >
                  <span className="mr-2"></span>
                  Admin Dashboard
                </button> */}
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;