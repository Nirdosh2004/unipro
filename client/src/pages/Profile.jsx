// import React from 'react';
// import { motion } from 'framer-motion';
// import { students } from '../assets/assets';

// const Profile = () => {
//   const student = students[0]; // Assuming we're showing the first student

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   // Skill color mapping
//   const skillColors = {
//     'React': 'bg-blue-100 text-blue-800',
//     'Node.js': 'bg-green-100 text-green-800',
//     'Python': 'bg-amber-100 text-amber-800',
//     'AWS': 'bg-purple-100 text-purple-800',
//     'Docker': 'bg-cyan-100 text-cyan-800',
//     'MongoDB': 'bg-lime-100 text-lime-800',
//     'TensorFlow': 'bg-orange-100 text-orange-800',
//     'Kubernetes': 'bg-indigo-100 text-indigo-800',
//     'GraphQL': 'bg-pink-100 text-pink-800',
//     'TypeScript': 'bg-sky-100 text-sky-800'
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
//     >
//       <div className="max-w-6xl mx-auto px-4 py-12">
//         {/* Hero Section */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="text-center mb-16"
//         >
//           <motion.h1
//             variants={itemVariants}
//             className="text-5xl font-bold text-gray-900 mb-4"
//           >
//             {student.name}
//           </motion.h1>
//           <motion.p
//             variants={itemVariants}
//             className="text-xl text-gray-600 mb-6"
//           >
//             Full Stack Developer & AI Enthusiast
//           </motion.p>

//           <motion.div
//             variants={itemVariants}
//             className="flex justify-center space-x-4 mb-8"
//           >
//             {student.social.github && (
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href={student.social.github}
//                 className="bg-gray-900 text-white px-6 py-2 rounded-full flex items-center"
//               >
//                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                   <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
//                 </svg>
//                 GitHub
//               </motion.a>
//             )}
//             {student.social.linkedin && (
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href={student.social.linkedin}
//                 className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center"
//               >
//                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                 </svg>
//                 LinkedIn
//               </motion.a>
//             )}
//           </motion.div>
//         </motion.div>

//         {/* Skills Section */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-16"
//         >
//           <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Arsenal</h2>
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//             {student.skills.map((skill, index) => (
//               <motion.div
//                 key={skill}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.05 }}
//                 className={`${skillColors[skill] || 'bg-gray-100 text-gray-800'} px-4 py-2 rounded-full text-center text-sm font-medium`}
//               >
//                 {skill}
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Projects Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {student.projects.map((project, index) => (
//               <motion.div
//                 key={project.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
//               >
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{project.description}</p>
//                 <div className="mt-4 flex space-x-2">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//                   >
//                     View Demo →
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Contact Section */}
//         <motion.section
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="bg-white rounded-2xl shadow-xl p-8 text-center"
//         >
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Connect</h2>
//           <div className="space-y-4">
//             <p className="text-gray-600">
//               <span className="font-semibold">Email:</span> {student.email}
//             </p>
//             <p className="text-gray-600">
//               <span className="font-semibold">Enrollment No:</span> {student.enrollmentNo}
//             </p>
//             {student.social.portfolio && (
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 href={student.social.portfolio}
//                 className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium"
//               >
//                 Visit Portfolio
//               </motion.a>
//             )}
//           </div>
//         </motion.section>
//       </div>
//     </motion.div>
//   );
// };

// export default Profile;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import React from 'react';
import { motion } from 'framer-motion';
import { students } from '../assets/assets';

const Profile = () => {
  const student = students[0];

  // Animation configurations
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Skill color mapping for dark mode
  const skillColors = {
    'React': 'bg-blue-900/30 text-blue-400',
    'Node.js': 'bg-green-900/30 text-green-400',
    'Python': 'bg-amber-900/30 text-amber-400',
    'AWS': 'bg-purple-900/30 text-purple-400',
    'Docker': 'bg-cyan-900/30 text-cyan-400',
    'MongoDB': 'bg-lime-900/30 text-lime-400',
    'TensorFlow': 'bg-orange-900/30 text-orange-400',
    'Kubernetes': 'bg-indigo-900/30 text-indigo-400',
    'GraphQL': 'bg-pink-900/30 text-pink-400',
    'TypeScript': 'bg-sky-900/30 text-sky-400'
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />

          <motion.h1
            variants={slideUp}
            className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            {student.name}
          </motion.h1>
          <motion.p
            variants={slideUp}
            className="text-xl text-gray-400 mb-6"
          >
            Building Intelligent Solutions
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={fadeIn}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/30">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">10+</h3>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/30">
            <h3 className="text-2xl font-bold text-green-400 mb-2">5★</h3>
            <p className="text-gray-400">Hackathon Ratings</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/30">
            <h3 className="text-2xl font-bold text-purple-400 mb-2">50k+</h3>
            <p className="text-gray-400">Lines of Code</p>
          </div>
        </motion.div>

        {/* Skills Cloud */}
        <motion.section
          variants={fadeIn}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Expertise Matrix</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {student.skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`${skillColors[skill]} px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm`}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Innovation Portfolio</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {student.projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-blue-400/30 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <h3 className="text-2xl font-bold mb-4 text-blue-400">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-blue-600/30 text-blue-400 rounded-lg flex items-center hover:bg-blue-600/50 transition-all"
                  >
                    <span>Case Study</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/30"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Collaborate with Me</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's build something extraordinary together. Whether it's AI solutions, full-stack development, or cloud architecture - I'm ready for the challenge.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={`mailto:${student.email}`}
                className="bg-blue-600 text-white px-8 py-3 rounded-full flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Proposal
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={student.social.portfolio}
                className="border border-blue-400 text-blue-400 px-8 py-3 rounded-full hover:bg-blue-400/10 transition-all"
              >
                View Full Portfolio
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;




