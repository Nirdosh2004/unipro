import React, { useState } from 'react';
import { assets, students } from '../assets/assets'; // Import students array directly
// import banner from '../assets/assets.js'; // Import your banner image

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Get all unique skills from students
  const allSkills = [...new Set(
    students.flatMap(student =>
      Array.isArray(student?.skills) ? student.skills : []
    )
  )].sort((a, b) => a.localeCompare(b));

  // Filter students based on search term and selected skills
  const filteredStudents = students.filter(student => {
    if (!student) return false;

    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      (student.name?.toLowerCase() || '').includes(searchLower) ||
      (student.email?.toLowerCase() || '').includes(searchLower) ||
      (student.enrollmentNo?.toLowerCase() || '').includes(searchLower) ||
      (student.skills?.some(skill =>
        skill.toLowerCase().includes(searchLower)
      ) || false);

    const matchesSkills = selectedSkills.length === 0 ||
      (student.skills?.some(skill =>
        selectedSkills.includes(skill)
      ) || false);

    return matchesSearch && matchesSkills;
  });

  const toggleSkill = (skill) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSkills([]);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Mobile Filter Toggle Button */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="md:hidden bg-blue-500 text-white p-2 flex items-center justify-center"
      >
        {showFilters ? 'Hide Filters' : 'Show Filters'}
        <svg
          className={`ml-2 h-4 w-4 transform ${showFilters ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Filters Sidebar - Hidden on mobile unless toggled */}
      <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-3/12 bg-white p-4 border-r border-gray-200`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Filters</h2>
          <button
            onClick={clearFilters}
            className="text-sm text-blue-500 hover:text-blue-700"
          >
            Clear All
          </button>
        </div>

        {/* Search Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search students..."
            className="w-full p-2 border border-gray-300 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Skills Filter */}
        <div>
          <h3 className="font-semibold mb-3">Filter by Skills</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {allSkills.map(skill => (
              <div key={skill} className="flex items-center">
                <input
                  type="checkbox"
                  id={`skill-${skill}`}
                  checked={selectedSkills.includes(skill)}
                  onChange={() => toggleSkill(skill)}
                  className="mr-2"
                />
                <label htmlFor={`skill-${skill}`} className="cursor-pointer">
                  {skill}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Students Content */}
      <div className="w-full md:w-9/12 p-4 md:p-6">
        <h1 className="text-2xl font-bold mb-6">Our Students</h1>

        <p className="text-gray-600 mb-4">
          Showing {filteredStudents.length} of {students.length} students
        </p>

        {/* Student Cards Grid */}
        {filteredStudents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredStudents.map(student => (
              <div
                key={student.enrollmentNo}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Student Image */}
                <div className="h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={student.image || banner}
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Student Details */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-lg font-bold">{student.name || 'Unknown'}</h2>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {student.enrollmentNo || 'N/A'}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-3">{student.email || 'No email'}</p>

                  {/* Skills */}
                  <div>
                    <h3 className="font-medium text-sm mb-1">Top Skills:</h3>
                    <div className="flex flex-wrap gap-1">
                      {student.skills?.slice(0, 3).map(skill => (
                        <span
                          key={skill}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                      {student.skills?.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{student.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Social Links */}
                  {student.social && (
                    <div className="mt-3 flex space-x-2">
                      {student.social.github && (
                        <a href={student.social.github} target="_blank" rel="noopener noreferrer">
                          <img src={assets.github_icon} alt="GitHub" className="h-5 w-5" />
                        </a>
                      )}
                      {student.social.linkedin && (
                        <a href={student.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <img src={assets.linkedin} alt="LinkedIn" className="h-5 w-5" />
                        </a>
                      )}
                      {/* Add other social icons as needed */}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">No students match your search criteria</p>
            <button
              onClick={clearFilters}
              className="mt-2 text-blue-500 hover:text-blue-700"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Students;