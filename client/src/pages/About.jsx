// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { useState } from "react";

// const About = () => {
//   const [activeTab, setActiveTab] = useState('about');
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // Mouse tracking effects
//   const rotateX = useTransform(y, [0, window.innerHeight], [5, -5]);
//   const rotateY = useTransform(x, [0, window.innerWidth], [-5, 5]);

//   const handleMouseMove = (e) => {
//     x.set(e.clientX);
//     y.set(e.clientY);
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//     hover: {
//       y: -3,
//       transition: { duration: 0.2 },
//     },
//   };

//   const tabContentVariants = {
//     hidden: { opacity: 0, x: -10 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.3 }
//     },
//     exit: { opacity: 0, x: 10 }
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//       className="p-6 max-w-4xl mx-auto min-h-screen"
//       onMouseMove={handleMouseMove}
//     >
//       {/* Mouse follower element */}
//       <motion.div
//         className="fixed pointer-events-none z-0 w-64 h-64 rounded-full bg-blue-100 opacity-10 blur-xl"
//         style={{
//           left: x,
//           top: y,
//           x: "-50%",
//           y: "-50%",
//         }}
//       />

//       {/* Profile Header */}
//       <motion.div
//         variants={itemVariants}
//         className="flex flex-col md:flex-row gap-6 items-center mb-10 relative z-10"
//         style={{
//           rotateX,
//           rotateY,
//           transformPerspective: 1000,
//         }}
//       >
//         {/* Avatar */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-green-100 overflow-hidden border-4 border-white shadow-lg"
//         >
//           {/* Placeholder for avatar image */}
//           <div className="w-full h-full flex items-center justify-center text-4xl">👨‍💻</div>
//         </motion.div>

//         {/* Profile Info */}
//         <div className="flex-1">
//           <h1 className="text-3xl font-bold text-gray-800 mb-1">rrisavv</h1>
//           <p className="text-gray-600 mb-2">Nirdosh2004 · he/him</p>

//           <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
//             <span>1 follower · 1 following</span>
//           </div>

//           <div className="flex flex-wrap gap-2">
//             <motion.a
//               href="https://calm-kitsune-ee5836.netlify.app/"
//               target="_blank"
//               rel="noopener"
//               whileHover={{ y: -2 }}
//               className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs flex items-center"
//             >
//               <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
//               </svg>
//               Portfolio
//             </motion.a>

//             <motion.a
//               href="https://leetcode.com/Nirdosh2004/"
//               target="_blank"
//               rel="noopener"
//               whileHover={{ y: -2 }}
//               className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-xs flex items-center"
//             >
//               <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
//               </svg>
//               LeetCode
//             </motion.a>

//             <motion.a
//               href="https://linkedin.com/in/nirdoshkushwaha"
//               target="_blank"
//               rel="noopener"
//               whileHover={{ y: -2 }}
//               className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs flex items-center"
//             >
//               <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//               </svg>
//               LinkedIn
//             </motion.a>
//           </div>
//         </div>
//       </motion.div>

//       {/* Location and Time */}
//       <motion.div
//         variants={itemVariants}
//         className="flex items-center gap-4 text-sm text-gray-500 mb-8 relative z-10"
//       >
//         <span className="flex items-center">
//           <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//           </svg>
//           Greater Noida, India
//         </span>
//         <span className="flex items-center">
//           <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//           22:44 (UTC +05:30)
//         </span>
//       </motion.div>

//       {/* Tabs Navigation */}
//       <motion.div
//         variants={itemVariants}
//         className="flex border-b border-gray-200 mb-6 relative z-10"
//       >
//         <button
//           onClick={() => setActiveTab('about')}
//           className={`px-4 py-2 font-medium text-sm ${activeTab === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//         >
//           About
//         </button>
//         <button
//           onClick={() => setActiveTab('projects')}
//           className={`px-4 py-2 font-medium text-sm ${activeTab === 'projects' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//         >
//           Projects
//         </button>
//         <button
//           onClick={() => setActiveTab('skills')}
//           className={`px-4 py-2 font-medium text-sm ${activeTab === 'skills' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//         >
//           Skills
//         </button>
//       </motion.div>

//       {/* Tab Content */}
//       <div className="relative z-10 min-h-[300px]">
//         <motion.div
//           key={activeTab}
//           variants={tabContentVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           className="bg-white rounded-lg p-6 shadow-sm"
//         >
//           {activeTab === 'about' && (
//             <div>
//               <h2 className="text-xl font-semibold text-gray-800 mb-4">About Me</h2>
//               <p className="text-gray-600 mb-4">
//                 Hello! I'm Nirdosh, a passionate developer and problem solver currently building web applications and solving algorithmic challenges. My journey in tech focuses on creating efficient, user-friendly solutions.
//               </p>
//               <p className="text-gray-600 mb-4">
//                 When I'm not coding, you can find me exploring new technologies, contributing to open source, or participating in coding competitions.
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//                 <motion.div
//                   whileHover="hover"
//                   variants={itemVariants}
//                   className="bg-blue-50 p-4 rounded-lg"
//                 >
//                   <h3 className="font-medium text-blue-700 mb-2">Education</h3>
//                   <p className="text-sm text-gray-600">Bachelor's in Computer Science</p>
//                   <p className="text-xs text-gray-500">Greater Noida Institute of Technology</p>
//                 </motion.div>
//                 <motion.div
//                   whileHover="hover"
//                   variants={itemVariants}
//                   className="bg-green-50 p-4 rounded-lg"
//                 >
//                   <h3 className="font-medium text-green-700 mb-2">Interests</h3>
//                   <p className="text-sm text-gray-600">Web Development, Algorithms, UI/UX Design</p>
//                 </motion.div>
//               </div>
//             </div>
//           )}

//           {activeTab === 'projects' && (
//             <div>
//               <h2 className="text-xl font-semibold text-gray-800 mb-4">Featured Projects</h2>
//               <div className="space-y-4">
//                 <motion.div
//                   whileHover={{ y: -3 }}
//                   className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
//                 >
//                   <h3 className="font-medium text-gray-800 mb-1">UniPro - Student Portal</h3>
//                   <p className="text-sm text-gray-600 mb-2">A comprehensive platform for students to manage assignments, resources, and academic progress.</p>
//                   <div className="flex flex-wrap gap-2">
//                     <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">React</span>
//                     <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Tailwind CSS</span>
//                     <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Framer Motion</span>
//                   </div>
//                 </motion.div>
//                 <motion.div
//                   whileHover={{ y: -3 }}
//                   className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
//                 >
//                   <h3 className="font-medium text-gray-800 mb-1">Algorithm Visualizer</h3>
//                   <p className="text-sm text-gray-600 mb-2">Interactive tool to visualize sorting and pathfinding algorithms with customizable speed and inputs.</p>
//                   <div className="flex flex-wrap gap-2">
//                     <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">JavaScript</span>
//                     <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">D3.js</span>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           )}

//           {activeTab === 'skills' && (
//             <div>
//               <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills & Technologies</h2>
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                 {[
//                   { name: 'JavaScript', level: 85 },
//                   { name: 'React', level: 80 },
//                   { name: 'HTML/CSS', level: 90 },
//                   { name: 'Tailwind CSS', level: 75 },
//                   { name: 'Node.js', level: 70 },
//                   { name: 'Data Structures', level: 80 },
//                   { name: 'Algorithms', level: 75 },
//                   { name: 'UI/UX Design', level: 65 },
//                   { name: 'Git', level: 70 }
//                 ].map((skill, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.05 }}
//                     className="mb-4"
//                   >
//                     <div className="flex justify-between text-sm mb-1">
//                       <span className="text-gray-700">{skill.name}</span>
//                       <span className="text-gray-500">{skill.level}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <motion.div
//                         className="h-2 rounded-full bg-blue-500"
//                         initial={{ width: 0 }}
//                         animate={{ width: `${skill.level}%` }}
//                         transition={{ duration: 0.8, delay: index * 0.1 }}
//                       />
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </motion.div>
//       </div>

//       {/* Footer */}
//       <motion.div
//         variants={itemVariants}
//         className="text-center mt-12 text-sm text-gray-500 relative z-10"
//       >
//         <p>© {new Date().getFullYear()} Nirdosh Kushwaha. All rights reserved.</p>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default About;

import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FiGithub, FiLinkedin, FiExternalLink, FiClock, FiMapPin, FiCode, FiLayers } from "react-icons/fi";
import LiveClock from "../components/LiveClock";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
    rotateX: 15,
    rotateY: -15
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.3 }
  }
};

const orbVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const [activeTab, setActiveTab] = useState('about');
  const [hoveredCard, setHoveredCard] = useState(null);
  const constraintsRef = useRef(null);

  // Mouse parallax effects
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, window.innerHeight], [15, -15]);
  const rotateY = useTransform(x, [0, window.innerWidth], [-15, 15]);

  const handleMouseMove = (e) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative overflow-hidden p-6 max-w-6xl mx-auto min-h-screen"
      onMouseMove={handleMouseMove}
      ref={constraintsRef}
    >
      {/* Floating animated orbs */}
      <motion.div
        variants={orbVariants}
        animate="animate"
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-100 opacity-20 blur-xl -z-10"
      />
      <motion.div
        variants={orbVariants}
        animate="animate"
        style={{ y: -30 }}
        className="absolute top-3/4 right-1/4 w-48 h-48 rounded-full bg-green-100 opacity-20 blur-xl -z-10"
      />

      {/* Main content container */}
      <div className="relative z-10">
        {/* Profile header with 3D effect */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 items-center mb-16 p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-sm"
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1000,
          }}
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Avatar with floating effect */}
          <motion.div
            className="relative"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 overflow-hidden border-4 border-white shadow-xl">
              <div className="w-full h-full flex items-center justify-center text-6xl">👨‍💻</div>
            </div>
            <motion.div
              className="absolute -bottom-3 -right-3 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              Available
            </motion.div>
          </motion.div>

          {/* Profile info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-bold text-gray-800">rrisavv</h1>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                PRO
              </span>
            </div>
            <p className="text-lg text-gray-600 mb-4">Full Stack Developer & Problem Solver</p>

            <div className="flex flex-wrap gap-3 mb-4">
              <motion.a
                href="https://github.com/Nirdosh2004"
                target="_blank"
                rel="noopener"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg flex items-center gap-2 shadow-xs hover:shadow-sm"
              >
                <FiGithub className="text-gray-600" />
                Github
              </motion.a>
              <motion.a
                href="https://calm-kitsune-ee5836.netlify.app/"
                target="_blank"
                rel="noopener"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg flex items-center gap-2 shadow-xs hover:shadow-sm"
              >
                <FiExternalLink className="text-blue-500" />
                Portfolio
              </motion.a>
              <motion.a
                href="https://leetcode.com/Nirdosh2004/"
                target="_blank"
                rel="noopener"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg flex items-center gap-2 shadow-xs hover:shadow-sm"
              >
                <FiCode className="text-yellow-500" />
                LeetCode
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/nirdoshkushwaha"
                target="_blank"
                rel="noopener"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg flex items-center gap-2 shadow-xs hover:shadow-sm"
              >
                <FiLinkedin className="text-blue-600" />
                LinkedIn
              </motion.a>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <FiMapPin className="text-gray-400" />
                Greater Noida, India
              </span>
              <span className="flex items-center gap-1">
                {/* <FiClock className="text-gray-400" /> */}
                <LiveClock />
              </span>
            </div>
          </div>
        </motion.div>

        {/* Interactive tabs */}
        <div className="mb-8">
          <div className="flex gap-1 p-1 bg-gray-100 rounded-xl max-w-md mx-auto">
            {['about', 'skills', 'projects'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium relative ${activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-700'}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {activeTab === tab && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 capitalize">{tab}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tab content with smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-12"
          >
            {activeTab === 'about' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 gap-6"
              >
                <motion.div
                  variants={cardVariants}
                  className="bg-white p-6 rounded-2xl shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Bio
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Hey! I'm Nirdosh — but you might know me as rrisavv. I'm a full-stack developer who loves turning ideas into slick, working apps. Whether it's crafting clean UIs or cracking backend bugs, I’m all about building cool stuff that just works.
                  </p>
                  <p className="text-gray-600">
                    Right now, I'm all about AI — figuring out how it works, what it can do, and how to make cool stuff with it.
                  </p>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  className="bg-white p-6 rounded-2xl shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Education
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700">Bachelor's in Computer Application</h4>
                      <p className="text-sm text-gray-500">Delhi Institute of Higher Education</p>
                      <p className="text-xs text-gray-400 mt-1">2022 - 2025</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">IIT-JEE Preparation</h4>
                      <p className="text-sm text-gray-500">Dedicated preparation, did not qualify.</p>
                      <p className="text-xs text-gray-400 mt-1">2021 - 2022</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Studied Science with Math</h4>
                      <p className="text-sm text-gray-500">Saraswati Shishu Mandir Senior Secondary School</p>
                      <p className="text-xs text-gray-400 mt-1">2017 - 2021</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  className="bg-white p-6 rounded-2xl shadow-sm md:col-span-2"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['UI/UX Design', 'Reels Scrolling ', 'Memes Sharing', 'Criticizing Politicians', 'Netflix Bingeing', 'Procrastination', 'Pretending to Work'].map((interest, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {interest}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    category: 'Frontend', skills: [
                      { name: 'React', level: 55.02 },
                      { name: 'JavaScript', level: 69.96 },
                      { name: 'HTML/CSS', level: 92.88 },
                      { name: 'Tailwind CSS', level: 83.76 }
                    ]
                  },
                  {
                    category: 'Backend', skills: [
                      { name: 'Node.js', level: 65.08 },
                      { name: 'Express', level: 58.54 },
                      { name: 'MongoDB', level: 89.99 }
                    ]
                  },
                  {
                    category: 'Tools', skills: [
                      { name: 'Git', level: 43.98 },
                      { name: 'Figma', level: 77.65 },
                      { name: 'VS Code', level: 90.19 }
                    ]
                  },
                  {
                    category: 'Other', skills: [
                      { name: 'Data Structures', level: 55.87 },
                      { name: 'Algorithms', level: 63.54 },
                      { name: 'Problem Solving', level: 45.09 }
                    ]
                  }
                ].map((group, i) => (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-white p-6 rounded-2xl shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">{group.category}</h3>
                    <div className="space-y-3">
                      {group.skills.map((skill, j) => (
                        <div key={j}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-700">{skill.name}</span>
                            <span className="text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-blue-400 to-green-400"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 0.8, delay: j * 0.1 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "UniPro Student Portal",
                    description: "UniPro is a comprehensive platform for students to manage their assignments, resources, and academic overview. It provides a personalized student profile showcasing skills, projects, and achievements, acting as a digital portfolio. It serves as a one-stop solution for all academic needs, helping students stay organized and on top of their work.",
                    tags: ["React", "MongoDB", "Express", "Node.js", "Tailwind CSS", "Framer Motion"],
                    link: "https://unipro-rrisavv.vercel.app/"
                  },
                  {
                    title: "SuperStock - Inventory Management System",
                    description: "SuperStock is an intuitive inventory management system designed for supermarket grocery shops, helping managers track items, their brands, availability, prices, and more. It ensures efficient stock management and real-time updates to keep everything running smoothly.",
                    tags: ["React", "MongoDB", "Express", "Node.js", "Tailwind CSS", "Framer Motion"],
                    link: "https://superstock-rrisavv.vercel.app/"
                  },
                  {
                    title: "Seven.Ecom - E-commerce Website ",
                    description: "Seven-Ecom is a modern eCommerce platform designed to provide a seamless shopping experience. It offers a wide range of products with easy navigation, secure payments, and efficient order tracking. Whether you're buying gadgets, apparel, or groceries, Seven-Ecom ensures a smooth, fast, and enjoyable shopping journey for every user.",
                    tags: ["React", "Node.js", "MongoDB", "Node.js", "Online Tutorial"],
                    link: "https://ecommerce-app-frontend-steel.vercel.app/"
                  },
                  {
                    title: "Portfolio V1",
                    description: "My first portfolio website showcasing projects and skills.",
                    tags: ["HTML/CSS", "JavaScript"],
                    link: "https://calm-kitsune-ee5836.netlify.app/"
                  }
                ].map((project, i) => (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-white p-6 rounded-2xl shadow-sm flex flex-col"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, j) => (
                          <span key={j} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener"
                      whileHover={{ x: 3 }}
                      className="inline-flex items-center text-blue-600 text-sm font-medium mt-auto"
                    >
                      View project
                      <FiExternalLink className="ml-1" />
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Floating action button */}
        {/* <motion.div
          drag
          dragConstraints={constraintsRef}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-blue-500 to-green-500 rounded-full shadow-lg flex items-center justify-center cursor-grab"
        >
          <FiGithub className="text-white text-xl" />
        </motion.div> */}
      </div>
    </motion.div>
  );
};

export default About;
