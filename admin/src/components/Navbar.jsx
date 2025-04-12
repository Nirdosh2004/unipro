import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiUserPlus,
  FiUsers,
  FiBookOpen,
  FiClipboard,
  FiFolderPlus,
  FiList,
  FiMenu,
  FiX,
} from 'react-icons/fi';

const navItems = [
  { path: '/add-student', label: 'Add Student', icon: <FiUserPlus /> },
  { path: '/list-students', label: 'List Students', icon: <FiUsers /> },
  { path: '/add-assignment', label: 'Add Assignment', icon: <FiBookOpen /> },
  { path: '/list-assignments', label: 'List Assignments', icon: <FiClipboard /> },
  { path: '/add-resource', label: 'Add Resource', icon: <FiFolderPlus /> },
  { path: '/list-resources', label: 'List Resources', icon: <FiList /> },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const navLinkBase = "relative px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-2";
  const activeLink = "text-green-600 font-bold";
  const inactiveLink = "text-gray-700 hover:text-green-500";

  return (
    <nav className="bg-white shadow-md rounded-2xl py-3 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Admin label */}
        <div
          onClick={() => navigate('/')}
          className="flex items-center cursor-pointer space-x-2 group transition-all duration-300 hover:scale-105"
        >
          <img src={assets.logo} alt="Logo" className="h-10" />
          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-lg shadow">
            Admin Panel
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? activeLink : inactiveLink}`
              }
            >
              <motion.span whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>
                {item.icon}
              </motion.span>
              <motion.span whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>
                {item.label}
              </motion.span>
            </NavLink>
          ))}
        </div>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setVisible(true)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
        >
          <FiMenu className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {visible && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setVisible(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-50 w-72 h-full bg-white shadow-lg rounded-l-2xl p-6 flex flex-col space-y-4"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-semibold text-green-600">Admin Panel</span>
                <button onClick={() => setVisible(false)}>
                  <FiX className="h-6 w-6 text-gray-600 hover:text-red-500 transition-colors" />
                </button>
              </div>

              {navItems.map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setVisible(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 py-3 px-4 rounded-xl transition-all ${isActive
                      ? 'bg-green-50 text-green-600 font-medium shadow-inner'
                      : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.icon}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.div>
                </NavLink>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
