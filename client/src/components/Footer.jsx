import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

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
    { icon: assets.linkedin, alt: "LinkedIn" },
    { icon: assets.instagram, alt: "Instagram" }
  ];

  return (
    <footer className="bg-gray-300 text-black font-medium py-10 mt-20 mx-8 rounded-2xl">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-700">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className="hover:text-green-300 transition"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-700">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className="hover:text-green-300 transition"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-700">Contact Us</h3>
            <address className="not-italic space-y-2">
              {contactInfo.map((info, index) => (
                <p key={index} className="flex items-center">
                  <img src={info.icon} className="w-4 h-4 mr-2" alt={info.text.split(' ')[0]} />
                  {info.text}
                </p>
              ))}
            </address>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-700">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-green-300 transition"
                  aria-label={social.alt}
                >
                  <img src={social.icon} className="w-6 h-6" alt={social.alt} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={assets.logo} className="w-10 h-10 mr-2" alt="UniPro Logo" />
            <span className="font-medium">UniPro</span>
          </div>
          <p className="text-sm text-gray-700">
            © {currentYear} UniPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;