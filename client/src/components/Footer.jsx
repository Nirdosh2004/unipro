import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black font-medium py-10 mt-20 mx-8 rounded-2xl">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-700">Quick Links</h3>
            <ul className="space-y-2">
              <li><NavLink to="/" className="hover:text-green-300 transition">Explore</NavLink></li>
              <li><NavLink to="/students" className="hover:text-green-300 transition">Students</NavLink></li>
              <li><NavLink to="/assignments" className="hover:text-green-300 transition">Assignments</NavLink></li>
              <li><NavLink to="/resources" className="hover:text-green-300 transition">Resources</NavLink></li>
            </ul>
          </div>

          {/* Column 2: Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-700">Support</h3>
            <ul className="space-y-2">
              <li><NavLink to="/faq" className="hover:text-green-300 transition">FAQ</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-green-300 transition">Contact Us</NavLink></li>
              <li><NavLink to="/privacy" className="hover:text-green-300 transition">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms" className="hover:text-green-300 transition">Terms of Service</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-700">Contact Us</h3>
            <address className="not-italic space-y-2">
              <p className="flex items-center">
                <img src={assets.location} className="w-4 h-4 mr-2" alt="Address" />
                Abhi tak office nhi liya
              </p>
              <p className="flex items-center">
                <img src={assets.email} className="w-4 h-4 mr-2" alt="Email" />
                nirdoshkushwaha75@gmail.com
              </p>
              <p className="flex items-center">
                <img src={assets.phone} className="w-4 h-4 mr-2" alt="Phone" />
                (+91) 7704901719
              </p>
            </address>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-700">Connect With Me</h3>
            <div className="flex space-x-4">
              {/* <a href="#" className="hover:text-green-300 transition">
                <img src={assets.facebook} className="w-6 h-6" alt="Facebook" />
              </a> */}

              <a href="#" className="hover:text-green-300 transition">
                <img src={assets.linkedin} className="w-6 h-6" alt="LinkedIn" />
              </a>
              <a href="#" className="hover:text-green-300 transition">
                <img src={assets.instagram} className="w-6 h-6" alt="Instagram" />
              </a>
            </div>
            {/* <div className="mt-4">
              <p className="text-sm">Subscribe to our newsletter</p>
              <div className="flex mt-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 text-gray-800 rounded-l focus:outline-none w-full"
                />
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r">
                  <img src={assets.send_icon} className="w-4 h-4" alt="Subscribe" />
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={assets.logo} className="w-10 h-10 mr-2" alt="Logo" />
            <span className="font-medium">UniPro</span>
          </div>
          <p className="text-sm text-gray-700">
            © {new Date().getFullYear()} UniPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;