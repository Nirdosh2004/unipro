import React, { useState } from 'react';
import { students } from '../assets/assets';

const StudentsCard = () => {

  const displayStudent = students.slice(0, 6)

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-3xl font-medium text-center mb-1">Step into the world of tech talent with our brightest minds</h1>
      <p className='flex text-center items-center px-50 py-10'>Lorem ipsum dolor, sit amet consectetur  adipisicing elit. Magnam cupiditate libero aspernatur et asperiores suscipit nesciunt earum aliquid consequuntur iure, optio quam. Voluptatum molestiae ab, alias quas blanditiis sapiente. Debitis?</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayStudent.map((student) => (
          <div
            key={student.enrollmentNo}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-[400px] flex flex-col"
          >
            {/* Image Section (70% height) */}
            <div className="h-[70%] bg-gradient-to-r from-green-200 to-green-50 flex items-center justify-center text-white text-5xl">
              {student.name.charAt(0)}
            </div>

            {/* Content Section (30% height) */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h2 className="text-xl font-bold line-clamp-1">{student.name}</h2>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {student.enrollmentNo}
                  </span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-1 mb-2">{student.email}</p>
              </div>

              <div>
                <h3 className="font-semibold text-sm mb-1">Top Skills:</h3>
                <div className="flex flex-wrap gap-1">
                  {student.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsCard;