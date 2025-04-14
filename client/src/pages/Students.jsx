import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { backendUrl } from '../App';

const Students = () => {
  // const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000/';
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${backendUrl}/api/student/list`);
      if (!response.ok) {
        throw new Error('Failed to fetch students');
      }
      const data = await response.json();
      if (data.success) {
        setStudents(data.data);
      } else {
        throw new Error(data.message || 'Failed to fetch students');
      }
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const [displayCount, setDisplayCount] = useState(6);
  const [isHovered, setIsHovered] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Get all unique skills for filtering
  const allSkills = [...new Set(students.flatMap(student => student.technicalSkills || []))];

  // Filter students based on active filter and search term
  const filteredStudents = students.filter(student => {
    const matchesFilter = activeFilter === 'all' ||
      (student.technicalSkills && student.technicalSkills.includes(activeFilter));
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.enrollmentNo.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const displayedStudents = filteredStudents.slice(0, displayCount);

  const loadMore = () => setDisplayCount(prev => prev + 6);

  // Color generator with consistent mapping
  const getColor = (id) => {
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

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9 }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg text-gray-700">Loading students...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <svg className="mx-auto h-16 w-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">Error loading students</h3>
          <p className="mt-1 text-gray-500">{error}</p>
          <button
            onClick={fetchStudents}
            className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Tech Talent</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Meet the brilliant minds shaping the future of technology. Filter by skills or search to find your perfect match.
        </p>
      </motion.div>

      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <motion.div
          className="relative w-full md:w-96"
          animate={{ scale: searchTerm ? 1.02 : 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search students by name, email or ID..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === 'all' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            All Students
          </motion.button>
          {allSkills.slice(0, 5).map(skill => (
            <motion.button
              key={skill}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(skill)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${activeFilter === skill ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {skill}
            </motion.button>
          ))}
          {allSkills.length > 5 && (
            <div className="relative group">
              <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                +{allSkills.length - 5}
              </button>
              <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 p-2 hidden group-hover:block">
                <div className="grid grid-cols-2 gap-1">
                  {allSkills.slice(5).map(skill => (
                    <motion.button
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setActiveFilter(skill)}
                      className={`px-2 py-1 rounded text-xs font-medium transition-all ${activeFilter === skill ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                    >
                      {skill}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Student Cards Grid */}
      <AnimatePresence>
        {filteredStudents.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedStudents.map((student, index) => (
                <motion.div
                  key={student._id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative"
                  onMouseEnter={() => setIsHovered(student._id)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <Link
                    to={`/students/${student._id}`}
                    className="block h-full"
                  >
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                      {/* Header Section */}
                      <div className="p-6 pb-0 flex items-start space-x-4">
                        <motion.div
                          className={`flex items-center justify-center rounded-full w-16 h-16 ${getColor(index)}`}
                          animate={{
                            scale: isHovered === student._id ? [1, 1.05, 1] : 1,
                            rotate: isHovered === student._id ? [0, 5, -5, 0] : 0
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <span className="text-2xl font-bold">
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </motion.div>

                        <div className="flex-1 min-w-0">
                          <motion.h3
                            className="text-xl font-bold text-gray-900 truncate"
                            animate={{
                              color: isHovered === student._id ? '#3b82f6' : '#111827'
                            }}
                          >
                            {student.name}
                          </motion.h3>
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
                            Technical Skills
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {student.technicalSkills?.slice(0, 3).map((skill) => (
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
                            {student.githubLink && (
                              <motion.a
                                href={student.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-900"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                              </motion.a>
                            )}
                            {student.linkedinLink && (
                              <motion.a
                                href={student.linkedinLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-blue-700"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={(e) => e.stopPropagation()}
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
                          opacity: isHovered === student._id ? 1 : 0.8,
                          y: isHovered === student._id ? 0 : 5
                        }}
                      >
                        <div className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg shadow hover:shadow-md transition-all">
                          View Profile
                        </div>
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            {displayCount < filteredStudents.length && (
              <div className="text-center mt-12">
                <motion.button
                  onClick={loadMore}
                  className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-full shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200 font-medium"
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
              <motion.button
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('all');
                }}
                className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reset Filters
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Students;
