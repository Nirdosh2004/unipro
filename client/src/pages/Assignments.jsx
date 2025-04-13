import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { backendUrl } from "../App";

// const backendUrl = "http://localhost:4000";

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

export const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, window.innerHeight], [10, -10]);
  const rotateY = useTransform(x, [0, window.innerWidth], [-10, 10]);

  const handleMouseMove = (e) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/assignment/list`);
        const result = await response.json();

        const formatted = result.data.map(assignment => ({
          id: assignment._id,
          subject: assignment.subjectName,
          topic: assignment.topicName,
          teacherName: assignment.teacherName,
          submitDate: new Date(assignment.assignedDate).toLocaleDateString(),
          dueDate: new Date(assignment.dueDate).toLocaleDateString(),
          body: Object.values(assignment.paragraphs).filter(p => p && p.trim() !== ''),
          attachments: assignment.attachments || [],
          submitted: assignment.status === "Submitted" || false
        }));

        setAssignments(formatted);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAssignments();
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  function getNextDeadline(assignments) {
    if (!assignments.length) return 'No deadlines';
    const now = new Date();
    const upcoming = assignments
      .filter(a => new Date(a.dueDate) > now)
      .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    return upcoming.length
      ? new Date(upcoming[0].dueDate).toLocaleDateString()
      : 'None upcoming';
  }

  function getOverdueCount(assignments) {
    const now = new Date();
    return assignments.filter(a => new Date(a.dueDate) < now && !a.submitted).length;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-4 sm:p-6 max-w-7xl mx-auto min-h-screen"
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

      {/* Header */}
      <motion.div
        variants={itemVariants}
        className="text-center mb-8 sm:mb-12 relative z-10"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
      >
        {/* Animated title with gradient */}
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Assignment Overview
        </motion.h1>

        {/* Animated divider */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-4 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Assignment counter with pulse animation */}
        <motion.p
          className="text-lg sm:text-xl text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Here are the details for your <motion.span
            className="font-bold text-green-600"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >{assignments.length}</motion.span> assignments to help you stay organized.
        </motion.p>

        {/* Next deadline with floating animation */}
        <motion.div
          className="inline-block bg-gradient-to-br from-blue-50 to-green-50 p-4 rounded-xl shadow-sm border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ y: -2, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
        >
          <div className="flex items-center justify-center space-x-2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </motion.div>
            <p className="text-sm sm:text-base text-blue-800">
              <span className="font-semibold">Next deadline:</span> {getNextDeadline(assignments)}
            </p>
          </div>
        </motion.div>

        {/* Floating animated dots decoration */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-100 opacity-30"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 40 - 20],
                x: [0, Math.random() * 40 - 20],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Assignments Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-10">
        {assignments.map((assignment) => (
          <motion.div
            key={assignment.id}
            variants={itemVariants}
            whileHover="hover"
            className="border border-gray-200 bg-white rounded-lg p-4 sm:p-5 hover:shadow-md transition-shadow flex flex-col h-full min-h-[280px] sm:min-h-[300px]"
          >
            <div className="mb-3">
              <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-800 rounded-full">
                {assignment.subject}
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mt-2 line-clamp-2">
                {assignment.topic}
              </h3>
              <p className="text-sm text-gray-500">{assignment.teacherName}</p>
            </div>

            <ul className="text-gray-700 text-sm mb-4 space-y-2 flex-grow overflow-y-auto max-h-[120px] sm:max-h-[150px] pr-2">
              {assignment.body.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start"
                >
                  <span className="mr-1">•</span>
                  <span className="line-clamp-3">{point}</span>
                </motion.li>
              ))}
            </ul>

            {/* Attachments Section */}
            {assignment.attachments.length > 0 && (
              <div className="mb-3">
                <p className="text-xs font-medium text-gray-500 mb-1">Attachments:</p>
                <div className="flex flex-wrap gap-2">
                  {assignment.attachments.map((attachment, i) => (
                    <a
                      key={i}
                      href={attachment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center transition-colors"
                    >
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span className="truncate max-w-[100px] sm:max-w-[120px]">
                        {attachment.name || "Attachment"}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-auto">
              <div className="border-t border-gray-100 pt-3 text-xs text-gray-500">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">Assigned: </span>
                    <span>{assignment.submitDate}</span>
                  </div>
                  <div>
                    <span className="font-medium">Due: </span>
                    <span className={new Date(assignment.dueDate) < new Date() ? "text-red-500" : "text-green-600"}>
                      {assignment.dueDate}
                    </span>
                  </div>
                </div>
              </div>

              <div className={`mt-2 text-xs flex items-center ${assignment.submitted ? "text-green-700" : "text-yellow-600"}`}>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d={assignment.submitted ? "M5 13l4 4L19 7" : "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}
                  />
                </svg>
                {assignment.submitted ? "Submitted" : "Pending submission"}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};