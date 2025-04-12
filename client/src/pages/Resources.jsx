import { motion, useMotionValue, useTransform } from "framer-motion";
import { resources } from "../assets/assets";
import { useEffect, useState } from "react";

const Resources = () => {

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
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Resources Hub</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Access curated educational materials across multiple disciplines. All resources are organized by subject and include downloadable content.
        </p>
      </motion.div>

      {/* Resources Grid */}
      <motion.div
        variants={containerVariants}
        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10"
      >
        {resources.map((resource) => (
          <motion.div
            key={resource.id}
            variants={itemVariants}
            whileHover="hover"
            onHoverStart={() => setHoveredCard(resource.id)}
            onHoverEnd={() => setHoveredCard(null)}
            className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white flex flex-col h-full relative overflow-hidden"
          >
            {/* Animated background effect on hover */}
            {hoveredCard === resource.id && (
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
                {resource.courseName} • {resource.teacherName}
              </p>
            </div>

            <p className="text-gray-700 text-sm mb-4 flex-grow relative z-10">
              {resource.bio}
            </p>

            <div className="mt-auto relative z-10">
              <motion.a
                href={resource.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Access Resources
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

              {/* Resource type indicator */}
              <div className="mt-2 flex items-center text-xs text-gray-500">
                <span className="mr-2">Format:</span>
                {resource.type === 'pdf' && (
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full">PDF</span>
                )}
                {resource.type === 'video' && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Video</span>
                )}
                {resource.type === 'slides' && (
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Slides</span>
                )}
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
        <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors relative overflow-hidden"
        >
          {/* Button shine effect */}
          <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
          Request Additional Resources
        </motion.button>

        {/* New feature: Quick filter tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {['All', 'PDF', 'Video', 'Slides', 'Recent', 'Popular'].map((tag) => (
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