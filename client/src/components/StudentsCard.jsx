import React, { useState } from 'react';
import { students } from '../assets/assets';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const StudentsCard = () => {
  const navigate = useNavigate();
  const [displayCount, setDisplayCount] = useState(6);
  const [isHovered, setIsHovered] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Get all unique skills for filtering
  const allSkills = [...new Set(students.flatMap(student => student.skills))];

  // Filter students based on active filter and search term
  const filteredStudents = students.filter(student => {
    const matchesFilter = activeFilter === 'all' || student.skills.includes(activeFilter);
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.enrollmentNo.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const displayedStudents = filteredStudents.slice(0, displayCount);

  const loadMore = () => {
    setDisplayCount(prev => prev + 6);
  };

  // Generate random color class
  const getRandomColor = (id) => {
    const colors = [
      'bg-blue-100 text-blue-800',
      'bg-green-100 text-green-800',
      'bg-purple-100 text-purple-800',
      'bg-amber-100 text-amber-800',
      'bg-rose-100 text-rose-800',
      'bg-indigo-100 text-indigo-800'
    ];
    return colors[id % colors.length];
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Enhanced Banner Section */}
      <motion.div
        className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl mb-12 min-h-[400px] flex items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Floating background elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />

        <div className="relative z-10 p-8 sm:p-12 text-white w-full">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-1 mb-8 lg:mb-0 lg:pr-12">
                <motion.h2
                  className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Discover Our <span className="text-yellow-300">Tech Talent</span> Community
                </motion.h2>

                <motion.p
                  className="text-xl mb-8 opacity-90 max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  transition={{ delay: 0.4 }}
                >
                  Connect with top computer science students specializing in web development,
                  data science, and cloud computing. Filter by skills and find your perfect match.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <button
                    onClick={() => navigate('/students')}
                    className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-all duration-200 flex items-center cursor-pointer"
                  >
                    Browse All Students
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  <button
                    onClick={() => document.getElementById('search').focus()}
                    className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center cursor-pointer"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search Students
                  </button>

                  <button
                    onClick={() => setActiveFilter('React')}
                    className="px-6 py-3 bg-blue-500 bg-opacity-30 hover:bg-opacity-50 text-white rounded-lg font-medium transition-all duration-200 flex items-center cursor-pointer"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Top React Developers
                  </button>
                </motion.div>

                <motion.div
                  className="mt-8 flex flex-wrap gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full flex items-center cursor-default">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    {students.length}+ Active Students
                  </span>
                  <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full flex items-center cursor-default">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {allSkills.length}+ Skills Available
                  </span>
                  <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full flex items-center cursor-default">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    100% Verified Profiles
                  </span>
                </motion.div>
              </div>

              <motion.div
                className="hidden lg:block w-full max-w-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 shadow-2xl">
                  <h3 className="text-xl font-bold mb-4">Popular Skills</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'UI/UX', 'Data', 'AI/ML'].map((tech, i) => (
                      <motion.button
                        key={tech}
                        onClick={() => setActiveFilter(tech)}
                        className={`p-2 rounded-lg text-sm font-medium text-center cursor-pointer transition-all ${i % 3 === 0 ? 'bg-blue-500 bg-opacity-30 hover:bg-opacity-50' :
                          i % 3 === 1 ? 'bg-purple-500 bg-opacity-30 hover:bg-opacity-50' :
                            'bg-green-500 bg-opacity-30 hover:bg-opacity-50'
                          }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.button>
                    ))}
                  </div>
                  <div className="mt-6 text-sm opacity-80 cursor-default">
                    <p>Click any skill to filter students</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full md:w-96">
          <motion.div
            animate={{
              scale: searchTerm ? 1.02 : 1
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="relative"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              id="search"
              type="text"
              placeholder="Search students by name, email or ID..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm cursor-text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${activeFilter === 'all' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            All Students
          </motion.button>
          {allSkills.slice(0, 5).map(skill => (
            <motion.button
              key={skill}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(skill)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${activeFilter === skill ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {skill}
            </motion.button>
          ))}
          {allSkills.length > 5 && (
            <div className="relative group cursor-pointer">
              <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium cursor-pointer">
                +{allSkills.length - 5}
              </button>
              <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 p-2 hidden group-hover:block">
                <div className="grid grid-cols-2 gap-1">
                  {allSkills.slice(5).map(skill => (
                    <button
                      key={skill}
                      onClick={() => setActiveFilter(skill)}
                      className={`px-2 py-1 rounded text-xs font-medium transition-all cursor-pointer ${activeFilter === skill ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'
                        }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Student Cards Grid */}
      {filteredStudents.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {displayedStudents.map((student, index) => (
                <motion.div
                  key={student.enrollmentNo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative"
                  onMouseEnter={() => setIsHovered(student.enrollmentNo)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                    {/* Header with Avatar and Info */}
                    <div className="p-6 pb-0 flex items-start space-x-4">
                      <motion.div
                        className={`flex items-center justify-center rounded-full w-16 h-16 ${getRandomColor(index)}`}
                        animate={{
                          scale: isHovered === student.enrollmentNo ? [1, 1.05, 1] : 1,
                          rotate: isHovered === student.enrollmentNo ? [0, 5, -5, 0] : 0
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-2xl font-bold">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        <motion.h2
                          className="text-xl font-bold text-gray-900 truncate"
                          animate={{
                            color: isHovered === student.enrollmentNo ? '#3b82f6' : '#111827'
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {student.name}
                        </motion.h2>
                        <p className="text-gray-600 text-sm truncate flex items-center mt-1">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {student.email}
                        </p>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600 mt-1 inline-block">
                          {student.enrollmentNo}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-4">
                        <h3 className="font-semibold text-sm mb-2 text-gray-700 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          Top Skills:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {student.skills.slice(0, 3).map((skill) => (
                            <motion.span
                              key={skill}
                              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                              whileHover={{ scale: 1.05 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <div className="flex space-x-3">
                          {student.social?.github && (
                            <motion.a
                              href={student.social.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-gray-900"
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                              </svg>
                            </motion.a>
                          )}
                          {student.social?.linkedin && (
                            <motion.a
                              href={student.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-blue-700"
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                              </svg>
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* View Profile Button */}
                    <motion.div
                      className="px-6 pb-6"
                      animate={{
                        opacity: isHovered === student.enrollmentNo ? 1 : 0.8,
                        y: isHovered === student.enrollmentNo ? 0 : 5
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <button
                        onClick={() => navigate(`/students/${student.enrollmentNo}`)}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg shadow hover:shadow-md transition-all hover:from-blue-700 hover:to-blue-600 cursor-pointer"
                      >
                        View Profile
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Load More Button */}
          {displayCount < filteredStudents.length && (
            <div className="text-center mt-12">
              <motion.button
                onClick={loadMore}
                className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-full shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200 font-medium cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Load More Talent
              </motion.button>
            </div>
          )}
        </>
      ) : (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-md mx-auto">
            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No matching students found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
            <div className="mt-6">
              <motion.button
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('all');
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reset Filters
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default StudentsCard;