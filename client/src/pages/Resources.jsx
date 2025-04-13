import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { backendUrl } from "../App";

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/resource/list`);
      const result = await response.json();

      if (result.success && result.data) {
        setResources(result.data);
      }
    } catch (error) {
      console.error("Error fetching resources:", error);
    } finally {
      setLoading(false);
    }
  };

  // For the mouse follower effect
  const rotateX = useTransform(y, [0, window.innerHeight], [10, -10]);
  const rotateY = useTransform(x, [0, window.innerWidth], [-10, 10]);

  const handleMouseMove = (e) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };

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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

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
          Resources Hub
        </motion.h1>

        {/* Animated divider */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-4 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Resources counter with pulse animation */}
        <motion.p
          className="text-lg sm:text-xl text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Explore our collection of <motion.span
            className="font-bold text-green-600"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >{resources.length}</motion.span> curated learning resources
        </motion.p>

        {/* Latest resource with floating animation */}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </motion.div>
            <p className="text-sm sm:text-base text-blue-800">
              <span className="font-semibold">Newest resource:</span> {resources.length > 0 ? resources[0].topicName : "None added yet"}
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

      {/* Resources Grid */}
      <motion.div
        variants={containerVariants}
        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10"
      >
        {resources.map((resource) => (
          <motion.div
            key={resource._id}
            variants={itemVariants}
            whileHover="hover"
            onHoverStart={() => setHoveredCard(resource._id)}
            onHoverEnd={() => setHoveredCard(null)}
            className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white flex flex-col h-full relative overflow-hidden"
          >
            {/* Animated background effect on hover */}
            {hoveredCard === resource._id && (
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
                {resource.subjectName}
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">
                {resource.topicName}
              </h3>
              <p className="text-sm text-gray-500">
                {resource.chapterName} • {resource.teacherName}
              </p>
            </div>

            <p className="text-gray-700 text-sm mb-4 flex-grow relative z-10 line-clamp-4">
              {resource.aboutTopic}
            </p>

            <div className="mt-auto relative z-10">
              <motion.a
                href={resource.accessLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Access Resource
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>

              <div className="mt-3 flex justify-between items-center text-xs text-gray-500">
                <div>
                  <span className="font-medium">Published:</span> {resource.formattedPublishedDate}
                </div>
                <div className="flex items-center">
                  {resource.resourceType === 'Slides' && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                      {resource.resourceType}
                    </span>
                  )}
                  {resource.resourceType === 'PDF' && (
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full">
                      {resource.resourceType}
                    </span>
                  )}
                  {resource.resourceType === 'Video' && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                      {resource.resourceType}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        variants={itemVariants}
        className="text-center mt-12 relative z-10"
      >
        <p className="text-gray-600 mb-4">Need additional resources?</p>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"

          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors relative overflow-hidden"
        >
          Request Resources
        </motion.button>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {['All', 'Slides', 'PDF', 'Video', 'Recent'].map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Resources;