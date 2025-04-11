import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { token, navigate, setToken } = useContext(AppContext);
  const [visible, setVisible] = useState(false);

  const logout = () => {
    navigate('/login');
    setToken('');
    localStorage.removeItem('token');
  };

  // Active link styles
  const getNavLinkStyle = ({ isActive }) =>
    isActive
      ? 'text-green-600 font-semibold border-b-2 border-green-600'
      : 'text-gray-700 hover:text-green-500 transition-colors';

  return (
    <nav className="bg-white shadow-sm py-3 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => navigate('/')}
          className="cursor-pointer flex items-center"
        >
          <img src={assets.logo} className="h-10" alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={getNavLinkStyle}>
            Explore
          </NavLink>
          <NavLink to="/students" className={getNavLinkStyle}>
            Students
          </NavLink>
          <NavLink to="/assignments" className={getNavLinkStyle}>
            Assignments
          </NavLink>
          <NavLink to="/resources" className={getNavLinkStyle}>
            Resources
          </NavLink>
          <NavLink to="/about" className={getNavLinkStyle}>
            About
          </NavLink>
        </div>

        {/* User Profile & Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Profile Dropdown */}
          <div className="relative group">
            <img
              onClick={() => token ? null : navigate('/login')}
              src={assets.default_user}
              className="h-8 w-8 rounded-full cursor-pointer hover:ring-2 hover:ring-green-200"
              alt="User"
            />
            {token && (
              <div className="absolute right-0  w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block z-50">
                <NavLink
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </NavLink>
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setVisible(true)}
            className="md:hidden p-1 rounded-md hover:bg-gray-100"
          >
            <img src={assets.menu_icon} className="h-6 w-6" alt="Menu" />
          </button>
        </div>
      </div>

      {/* Mobile Menu with Blur Background */}
      {visible && (
        <>
          {/* Blurry Background Overlay */}
          <div
            className="md:hidden fixed inset-0 z-40 backdrop-blur-sm bg-black/30"
            onClick={() => setVisible(false)}
          />

          {/* Mobile Menu Panel */}
          <div className="md:hidden fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setVisible(false)}
                  className="p-1 rounded-md hover:bg-gray-100"
                >
                  <img src={assets.right_arrow} className="h-5 w-5" alt="Close" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex-1 flex flex-col px-4 space-y-2">
                <NavLink
                  to="/"
                  onClick={() => setVisible(false)}
                  className={({ isActive }) =>
                    `py-3 px-4 rounded-md ${isActive ? 'bg-green-50 text-green-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`
                  }
                >
                  Explore
                </NavLink>
                <NavLink
                  to="/students"
                  onClick={() => setVisible(false)}
                  className={({ isActive }) =>
                    `py-3 px-4 rounded-md ${isActive ? 'bg-green-50 text-green-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`
                  }
                >
                  Students
                </NavLink>
                <NavLink
                  to="/assignments"
                  onClick={() => setVisible(false)}
                  className={({ isActive }) =>
                    `py-3 px-4 rounded-md ${isActive ? 'bg-green-50 text-green-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`
                  }
                >
                  Assignments
                </NavLink>
                <NavLink
                  to="/resources"
                  onClick={() => setVisible(false)}
                  className={({ isActive }) =>
                    `py-3 px-4 rounded-md ${isActive ? 'bg-green-50 text-green-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`
                  }
                >
                  Resources
                </NavLink>
                <NavLink
                  to="/about"
                  onClick={() => setVisible(false)}
                  className={({ isActive }) =>
                    `py-3 px-4 rounded-md ${isActive ? 'bg-green-50 text-green-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`
                  }
                >
                  About
                </NavLink>
              </div>

              {/* User Info */}
              {token && (
                <div className="p-4 border-t">
                  <p className="text-sm text-gray-500">Logged in as:</p>
                  <p className="font-medium">{localStorage.getItem('username') || 'User'}</p>
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