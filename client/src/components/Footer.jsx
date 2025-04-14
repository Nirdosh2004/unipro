import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Explore" },
    { path: "/students", label: "Students" },
    { path: "/assignments", label: "Assignments" },
    { path: "/resources", label: "Resources" }
  ];

  const supportLinks = [
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact Us" },
    { path: "/privacy", label: "Privacy Policy" },
    { path: "/terms", label: "Terms of Service" }
  ];

  const contactInfo = [
    { icon: assets.location, text: "Abhi tak office nhi liya" },
    { icon: assets.email, text: "nirdoshkushwaha75@gmail.com" },
    { icon: assets.phone, text: "(+91) 7704901719" }
  ];

  const socialMedia = [
    { icon: assets.linkedin, alt: "LinkedIn", url: "https://www.linkedin.com" },
    { icon: assets.instagram, alt: "Instagram", url: "https://www.instagram.com" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { duration: 0.2 }
  };

  const tapEffect = {
    scale: 0.95
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 font-medium py-12 mt-20 mx-4 sm:mx-8 rounded-2xl shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10"
        >
          {/* Column 1: Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-green-600 border-b border-green-200 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={hoverEffect}
                  whileTap={tapEffect}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block py-1 transition-colors duration-200 ${isActive ? 'text-green-600 font-semibold' : 'hover:text-green-500'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: Support */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-green-600 border-b border-green-200 pb-2">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={hoverEffect}
                  whileTap={tapEffect}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block py-1 transition-colors duration-200 ${isActive ? 'text-green-600 font-semibold' : 'hover:text-green-500'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-green-600 border-b border-green-200 pb-2">Contact Us</h3>
            <address className="not-italic space-y-3">
              {contactInfo.map((info, index) => (
                <motion.p
                  key={index}
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={info.icon} className="w-5 h-5 mr-3 mt-1 flex-shrink-0" alt={info.text.split(' ')[0]} />
                  <span className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                    {info.text}
                  </span>
                </motion.p>
              ))}
            </address>
          </motion.div>

          {/* Column 4: Social Media */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-green-600 border-b border-green-200 pb-2">Connect With Me</h3>
            <div className="flex space-x-5">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-colors duration-200"
                  aria-label={social.alt}
                  whileHover={{ y: -3 }}
                  whileTap={tapEffect}
                >
                  <img src={social.icon} className="w-7 h-7 hover:opacity-80 transition-opacity" alt={social.alt} />
                </motion.a>
              ))}
            </div>
            {/* <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-gray-600">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 text-sm rounded-l-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500 w-full"
                />
                <motion.button
                  whileHover={hoverEffect}
                  whileTap={tapEffect}
                  className="bg-green-600 text-white px-3 py-2 rounded-r-lg text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </div> */}
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="flex items-center mb-4 md:mb-0"
            whileHover={{ scale: 1.02 }}
          >
            <img src={assets.logo} className="w-10 h-10 mr-2" alt="UniPro Logo" />
            <span className="font-semibold text-gray-800">UniPro</span>
          </motion.div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-600 mb-2 md:mb-0">
              © {currentYear} UniPro. All rights reserved.
            </p>
            <div className="flex space-x-4 text-xs text-gray-500">
              <a href="" className="hover:text-green-600 transition-colors">Privacy Policy</a>
              <a href="" className="hover:text-green-600 transition-colors">Terms of Service</a>
              <a href="" className="hover:text-green-600 transition-colors">Cookies</a>
            </div>
            
          </div>
          
          <p class="border-t border-gray-300 pt-6 max-w-full break-words text-medium leading-relaxed mt-4">
    Some buttons might not work. This is not a bug; it's simply because the functionality for those features has not yet been implemented. Please bear with me, as I am still working on it. Thank you for your patience. - Nirdosh Kushwaha.
</p>
<p class="text-sm text-gray-500 ">
    Note: This is a temporary state. Full functionality will be available in a future update... you know, when I monetize it, haha.
</p>

        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
