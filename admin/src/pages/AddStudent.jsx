import React, { useState } from 'react';
import { FaUserGraduate, FaEnvelope, FaGithub, FaLinkedin, FaTools, FaProjectDiagram, FaPlusCircle, FaCodeBranch, FaLink, FaTrash } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: '',
    enrollmentNo: '',
    email: '',
    about: '',
    technicalSkills: [''],
    projects: [{ title: '', bio: '', technologies: [''], githubLink: '', liveLink: '' }],
    githubLink: '',
    linkedinLink: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (i, value) => {
    const newSkills = [...student.technicalSkills];
    newSkills[i] = value;
    setStudent({ ...student, technicalSkills: newSkills });
  };

  const handleProjectChange = (i, field, value) => {
    const newProjects = [...student.projects];
    newProjects[i][field] = value;
    setStudent({ ...student, projects: newProjects });
  };

  const addSkill = () => {
    if (student.technicalSkills.length < 15) {
      setStudent({ ...student, technicalSkills: [...student.technicalSkills, ''] });
    }
  };

  const addProject = () => {
    if (student.projects.length < 4) {
      setStudent({
        ...student,
        projects: [...student.projects, { title: '', bio: '', technologies: [''], githubLink: '', liveLink: '' }]
      });
    }
  };

  const removeSkill = (index) => {
    const newSkills = [...student.technicalSkills];
    newSkills.splice(index, 1);
    setStudent({ ...student, technicalSkills: newSkills });
  };

  const removeProject = (index) => {
    const newProjects = [...student.projects];
    newProjects.splice(index, 1);
    setStudent({ ...student, projects: newProjects });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log(student);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setStudent({
          name: '',
          enrollmentNo: '',
          email: '',
          about: '',
          technicalSkills: [''],
          projects: [{ title: '', bio: '', technologies: [''], githubLink: '', liveLink: '' }],
          githubLink: '',
          linkedinLink: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <motion.div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-green-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
            <h2 className="text-3xl font-bold text-center">Add New Student</h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-green-700 mb-1">Student Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUserGraduate className="text-green-600" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nirdosh Kushwaha"
                    value={student.name}
                    onChange={handleChange}
                    className="pl-10 w-full p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-green-700 mb-1">Enrollment Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCodeBranch className="text-green-600" />
                  </div>
                  <input
                    type="text"
                    name="enrollmentNo"
                    placeholder="BCA221214106075"
                    value={student.enrollmentNo}
                    onChange={handleChange}
                    className="pl-10 w-full p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-green-700 mb-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-green-600" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="nirdosh@dev.com"
                    value={student.email}
                    onChange={handleChange}
                    className="pl-10 w-full p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-green-700 mb-1">GitHub Profile</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaGithub className="text-green-600" />
                  </div>
                  <input
                    type="url"
                    name="githubLink"
                    placeholder="https://github.com/username"
                    value={student.githubLink}
                    onChange={handleChange}
                    className="pl-10 w-full p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="md:col-span-2"
              >
                <label className="block text-sm font-medium text-green-700 mb-1">LinkedIn Profile</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLinkedin className="text-green-600" />
                  </div>
                  <input
                    type="url"
                    name="linkedinLink"
                    placeholder="https://linkedin.com/in/username"
                    value={student.linkedinLink}
                    onChange={handleChange}
                    className="pl-10 w-full p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <label className="block text-sm font-medium text-green-700 mb-1">About Student</label>
              <textarea
                name="about"
                placeholder="Tell us about the student's background, interests, and achievements..."
                rows="4"
                value={student.about}
                onChange={handleChange}
                className="w-full p-4 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ease-in-out hover:shadow-sm"
              />
            </motion.div>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-green-700 mb-1 flex items-center gap-2">
                  <FaTools /> Technical Skills
                </label>
                <span className="text-xs text-green-600">{student.technicalSkills.length}/15</span>
              </div>

              <AnimatePresence>
                {student.technicalSkills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 mb-2"
                  >
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleSkillChange(i, e.target.value)}
                      className="flex-1 p-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      placeholder={`Skill ${i + 1}`}
                    />
                    {student.technicalSkills.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSkill(i)}
                        className="p-2 text-red-500 hover:text-red-700 transition-colors duration-200"
                        aria-label="Remove skill"
                      >
                        <FaTrash />
                      </button>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {student.technicalSkills.length < 15 && (
                <motion.button
                  type="button"
                  onClick={addSkill}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 flex items-center gap-2 text-green-600 hover:text-green-800 font-medium text-sm px-4 py-2 rounded-lg bg-green-50 hover:bg-green-100 transition-all duration-200"
                >
                  <FaPlusCircle /> Add Skill
                </motion.button>
              )}
            </motion.div>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-green-700 mb-1 flex items-center gap-2">
                  <FaProjectDiagram /> Projects
                </label>
                <span className="text-xs text-green-600">{student.projects.length}/4</span>
              </div>

              <AnimatePresence>
                {student.projects.map((proj, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-green-50 rounded-xl shadow-sm p-4 mb-4 space-y-4 border border-green-200"
                  >
                    <div>
                      <label className="block text-xs font-medium text-green-700 mb-1">Project Title</label>
                      <input
                        type="text"
                        placeholder="My New Project"
                        value={proj.title}
                        onChange={(e) => handleProjectChange(i, 'title', e.target.value)}
                        className="w-full p-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-green-700 mb-1">Project Description</label>
                      <textarea
                        placeholder="Describe the project, its purpose, and your role..."
                        value={proj.bio}
                        onChange={(e) => handleProjectChange(i, 'bio', e.target.value)}
                        rows="3"
                        className="w-full p-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-green-700 mb-1">Technologies Used</label>
                      <input
                        type="text"
                        placeholder="React, Node.js, MongoDB"
                        value={proj.technologies.join(', ')}
                        onChange={(e) => handleProjectChange(i, 'technologies', e.target.value.split(',').map(s => s.trim()))}
                        className="w-full p-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-green-700 mb-1 flex items-center gap-2">
                          <FaGithub /> GitHub Repository
                        </label>
                        <input
                          type="url"
                          placeholder="https://github.com/username/project"
                          value={proj.githubLink}
                          onChange={(e) => handleProjectChange(i, 'githubLink', e.target.value)}
                          className="w-full p-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-green-700 mb-1 flex items-center gap-2">
                          <FaLink /> Live Demo
                        </label>
                        <input
                          type="url"
                          placeholder="https://project-demo.com"
                          value={proj.liveLink}
                          onChange={(e) => handleProjectChange(i, 'liveLink', e.target.value)}
                          className="w-full p-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {student.projects.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeProject(i)}
                        className="text-red-500 hover:text-red-700 flex items-center gap-2 text-sm mt-2 transition-colors duration-200"
                      >
                        <FaTrash /> Remove Project
                      </button>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {student.projects.length < 4 && (
                <motion.button
                  type="button"
                  onClick={addProject}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 text-green-600 hover:text-green-800 font-medium text-sm px-4 py-2 rounded-lg bg-green-50 hover:bg-green-100 transition-all duration-200"
                >
                  <FaPlusCircle /> Add Project
                </motion.button>
              )}
            </motion.div>

            <motion.div
              className="text-center pt-4"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                  >
                    Student information submitted successfully!
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Submit Student'
                )}
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AddStudent;