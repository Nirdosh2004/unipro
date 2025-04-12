import { motion, useMotionValue, useTransform } from "framer-motion";
import { assignments } from "../assets/assets";
import { useEffect, useState } from "react";

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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    transition: { duration: 0.2 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.98,
  },
};

export const Assignments = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const [hoveredCard, setHoveredCard] = useState(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // For the mouse follower effect
  const rotateX = useTransform(y, [0, window.innerHeight], [10, -10]);
  const rotateY = useTransform(x, [0, window.innerWidth], [-10, 10]);

  const handleMouseMove = (e) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };

  // Progress bar variants
  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-6 max-w-7xl mx-auto min-h-screen"
      onMouseMove={handleMouseMove}
    >
      {/* Mouse follower element */}
      <motion.div
        className="fixed pointer-events-none z-0 w-64 h-64 rounded-full bg-green-100 opacity-10 blur-xl"
        style={{
          left: x,
          top: y,
          x: "-50%",
          y: "-50%",
        }}
      />

      {/* Heading Section with 3D tilt effect */}
      <motion.div
        variants={itemVariants}
        className="text-center mb-10 relative z-10"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Course Assignments</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          All your current assignments organized by due date. Stay on top of your coursework with clear requirements and deadlines.
        </p>
      </motion.div>

      {/* New feature: Status filter tabs */}
      {/* <motion.div
        variants={itemVariants}
        className="flex justify-center gap-2 mb-8 relative z-10"
      >
        {['All', 'Active', 'Upcoming', 'Overdue'].map((tab) => (
          <motion.button
            key={tab}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
          >
            {tab}
          </motion.button>
        ))}
      </motion.div> */}

      {/* Assignments Grid */}
      <motion.div
        variants={containerVariants}
        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10"
      >
        {assignments.map((assignment) => (
          <motion.div
            key={assignment.id}
            variants={itemVariants}
            whileHover="hover"
            onHoverStart={() => setHoveredCard(assignment.id)}
            onHoverEnd={() => setHoveredCard(null)}
            className="border border-green-200 bg-white rounded-lg p-5 hover:shadow-md transition-shadow flex flex-col h-full min-h-[300px] relative overflow-hidden"
          >
            {/* Animated background effect on hover */}
            {hoveredCard === assignment.id && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-50 to-white opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}

            <div className="mb-3 relative z-10">
              <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-800 rounded-full">
                {assignment.subject}
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">
                {assignment.topic}
              </h3>
              <p className="text-sm text-gray-500">{assignment.teacherName}</p>
            </div>

            <ul className="text-gray-700 text-sm mb-4 space-y-2 overflow-y-auto flex-grow pr-2 relative z-10">
              {assignment.body.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start"
                >
                  <span className="mr-1">•</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto relative z-10">
              {/* Progress bar for time remaining */}
              {/* <div className="mb-2">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Time remaining:</span>
                  <span>
                    {new Date(assignment.dueDate) < new Date() ? 'Overdue' : 'Due soon'}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <motion.div
                    className="bg-green-600 h-1.5 rounded-full"
                    initial="hidden"
                    animate="visible"
                    variants={progressVariants}
                    style={{
                      backgroundColor: new Date(assignment.dueDate) < new Date() ? '#ef4444' : '#16a34a'
                    }}
                  />
                </div>
              </div> */}

              <div className="border-t border-gray-100 pt-3 text-xs text-gray-500">
                <div className="flex justify-between">
                  <div>
                    <span className="font-medium">Assigned: </span>
                    <span>{assignment.submitDate}</span>
                  </div>
                  <div>
                    <span className="font-medium">Due: </span>
                    <span
                      className={
                        new Date(assignment.dueDate) < new Date()
                          ? "text-red-500 font-semibold"
                          : "text-green-600"
                      }
                    >
                      {assignment.dueDate}
                    </span>
                  </div>
                </div>
              </div>

              {/* Submission status indicator */}
              {assignment.submitted ? (
                <div className="mt-2 text-xs text-green-700 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Submitted
                </div>
              ) : (
                <div className="mt-2 text-xs text-yellow-600 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pending submission
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        variants={itemVariants}
        className="text-center mt-12 relative z-10"
      >
        <p className="text-gray-600 mb-4">Need help with an assignment?</p>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors relative overflow-hidden"
        >
          {/* Button shine effect */}
          <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
          Contact Instructor
        </motion.button>

        {/* New feature: Quick action buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export All
          </motion.button>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Calendar View
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};