import React, { useState } from 'react';
import {
  FaUserGraduate, FaEnvelope, FaGithub, FaLinkedin, FaTools, FaProjectDiagram,
  FaPlusCircle, FaCodeBranch, FaLink, FaTrash, FaStar, FaGraduationCap
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { backendUrl } from '../App';

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: '',
    enrollmentNo: '',
    email: '',
    about: '',
    technicalSkills: [''],
    projects: [{
      title: '',
      bio: '',
      technologies: [''],
      githubLink: '',
      liveLink: ''
    }],
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
    if (field === 'technologies') {
      newProjects[i][field] = value.split(',').map(tech => tech.trim());
    } else {
      newProjects[i][field] = value;
    }
    setStudent({ ...student, projects: newProjects });
  };

  const addSkill = () => {
    if (student.technicalSkills.length < 15) {
      setStudent({ ...student, technicalSkills: [...student.technicalSkills, ''] });
    }
  };

  const removeSkill = (i) => {
    const newSkills = [...student.technicalSkills];
    newSkills.splice(i, 1);
    setStudent({ ...student, technicalSkills: newSkills });
  };

  const addProject = () => {
    if (student.projects.length < 4) {
      setStudent({
        ...student,
        projects: [...student.projects, {
          title: '',
          bio: '',
          technologies: [''],
          githubLink: '',
          liveLink: ''
        }]
      });
    }
  };

  const removeProject = (i) => {
    const newProjects = [...student.projects];
    newProjects.splice(i, 1);
    setStudent({ ...student, projects: newProjects });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`${backendUrl}/api/student/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student),
      });
      const result = await response.json();
      if (response.ok) {
        setSubmitSuccess(true);
        setStudent({
          name: '',
          enrollmentNo: '',
          email: '',
          about: '',
          technicalSkills: [''],
          projects: [{
            title: '',
            bio: '',
            technologies: [''],
            githubLink: '',
            liveLink: ''
          }],
          githubLink: '',
          linkedinLink: ''
        });
        setTimeout(() => setSubmitSuccess(false), 3000);
      } else {
        alert(result.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error(error);
      alert('Error submitting form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-indigo-50 to-purple-50"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="max-w-6xl mx-auto"
      >
        <motion.div
          className="flex items-center justify-center mb-8 gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaGraduationCap className="text-4xl text-indigo-600" />
          </motion.div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Student Portfolio Creator
          </h1>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
            <motion.h2
              className="text-2xl font-bold flex items-center gap-3"
              initial={{ x: -10 }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaStar className="text-yellow-300" />
              Student Information
            </motion.h2>
            <p className="text-indigo-100">Fill in your details to create an amazing portfolio</p>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* Personal Info Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              <Input
                icon={<FaUserGraduate className="text-indigo-600" />}
                name="name"
                value={student.name}
                onChange={handleChange}
                placeholder="Full Name"
                color="indigo"
              />
              <Input
                icon={<FaCodeBranch className="text-indigo-600" />}
                name="enrollmentNo"
                value={student.enrollmentNo}
                onChange={handleChange}
                placeholder="Enrollment No"
                color="indigo"
              />
              <Input
                icon={<FaEnvelope className="text-indigo-600" />}
                name="email"
                value={student.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
                color="indigo"
              />
              <Input
                icon={<FaGithub className="text-indigo-600" />}
                name="githubLink"
                value={student.githubLink}
                onChange={handleChange}
                placeholder="GitHub URL"
                color="indigo"
              />
              <Input
                icon={<FaLinkedin className="text-indigo-600" />}
                name="linkedinLink"
                value={student.linkedinLink}
                onChange={handleChange}
                placeholder="LinkedIn URL"
                color="indigo"
              />
            </motion.div>

            {/* About Section */}
            <motion.div
              className="bg-indigo-50 rounded-xl p-6"
              whileHover={{ scale: 1.005 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <label className="block mb-3 text-lg font-medium text-indigo-800">About You</label>
              <textarea
                name="about"
                value={student.about}
                onChange={handleChange}
                rows={4}
                className="w-full p-4 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 bg-white"
                placeholder="Tell us about yourself, your passions, and your goals..."
              />
            </motion.div>

            {/* Skills Section */}
            <motion.div
              className="bg-white border border-indigo-100 rounded-xl p-6 shadow-sm"
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-medium text-indigo-800 flex items-center gap-3">
                  <motion.span
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="bg-indigo-100 p-2 rounded-lg"
                  >
                    <FaTools className="text-indigo-600" />
                  </motion.span>
                  Technical Skills
                </label>
                <span className="text-sm text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">
                  {student.technicalSkills.length}/15 skills
                </span>
              </div>

              <AnimatePresence>
                {student.technicalSkills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 my-3"
                  >
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleSkillChange(i, e.target.value)}
                      className="flex-1 p-3 border rounded-lg border-indigo-200 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-200"
                      placeholder={`Skill ${i + 1}`}
                    />
                    {student.technicalSkills.length > 1 && (
                      <motion.button
                        type="button"
                        onClick={() => removeSkill(i)}
                        className="text-red-500 bg-red-50 p-2 rounded-lg"
                        whileHover={{ scale: 1.1, backgroundColor: '#FEE2E2' }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaTrash />
                      </motion.button>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {student.technicalSkills.length < 15 && (
                <motion.button
                  type="button"
                  onClick={addSkill}
                  className="mt-4 text-indigo-600 flex items-center gap-2 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-lg transition duration-200"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <motion.span
                    animate={{ rotate: [0, 180, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <FaPlusCircle className="text-indigo-600" />
                  </motion.span>
                  Add Skill
                </motion.button>
              )}
            </motion.div>

            {/* Projects Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-indigo-800 flex items-center gap-3">
                  <motion.span
                    whileHover={{ rotate: -15, scale: 1.1 }}
                    className="bg-purple-100 p-2 rounded-lg"
                  >
                    <FaProjectDiagram className="text-purple-600" />
                  </motion.span>
                  Your Projects
                </h3>
                <span className="text-sm text-purple-500 bg-purple-50 px-3 py-1 rounded-full">
                  {student.projects.length}/4 projects
                </span>
              </div>

              <AnimatePresence>
                {student.projects.map((proj, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100 shadow-sm hover:shadow-md transition duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-medium text-purple-800">Project {i + 1}</h4>
                        {student.projects.length > 1 && (
                          <motion.button
                            type="button"
                            onClick={() => removeProject(i)}
                            className="text-red-500 bg-red-50 p-2 rounded-lg"
                            whileHover={{ scale: 1.1, backgroundColor: '#FEE2E2' }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaTrash />
                          </motion.button>
                        )}
                      </div>

                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="Project Title"
                          value={proj.title}
                          onChange={(e) => handleProjectChange(i, 'title', e.target.value)}
                          className="w-full p-3 border rounded-lg border-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-200"
                        />
                        <textarea
                          placeholder="Project Description"
                          value={proj.bio}
                          onChange={(e) => handleProjectChange(i, 'bio', e.target.value)}
                          rows={3}
                          className="w-full p-3 border rounded-lg border-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-200"
                        />
                        <input
                          type="text"
                          placeholder="Technologies (comma separated)"
                          value={proj.technologies.join(', ')}
                          onChange={(e) => handleProjectChange(i, 'technologies', e.target.value)}
                          className="w-full p-3 border rounded-lg border-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-200"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Input
                            icon={<FaGithub className="text-purple-600" />}
                            value={proj.githubLink}
                            onChange={(e) => handleProjectChange(i, 'githubLink', e.target.value)}
                            placeholder="GitHub URL"
                            color="purple"
                          />
                          <Input
                            icon={<FaLink className="text-purple-600" />}
                            value={proj.liveLink}
                            onChange={(e) => handleProjectChange(i, 'liveLink', e.target.value)}
                            placeholder="Live Demo URL"
                            color="purple"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {student.projects.length < 4 && (
                <motion.button
                  type="button"
                  onClick={addProject}
                  className="w-full text-purple-600 flex items-center justify-center gap-2 bg-purple-50 hover:bg-purple-100 px-4 py-3 rounded-lg transition duration-200 mt-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    animate={{ rotate: [0, 180, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <FaPlusCircle className="text-purple-600" />
                  </motion.span>
                  Add Another Project
                </motion.button>
              )}
            </motion.div>

            {/* Submit Section */}
            <motion.div
              className="pt-6 border-t border-indigo-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl"
                    >
                      🎉
                    </motion.div>
                    <div>
                      <h4 className="font-medium text-green-800">Success!</h4>
                      <p className="text-green-600 text-sm">Student portfolio created successfully.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                whileHover={!isSubmitting ? {
                  scale: 1.01,
                  boxShadow: "0 5px 20px rgba(99, 102, 241, 0.4)"
                } : {}}
                whileTap={!isSubmitting ? { scale: 0.99 } : {}}
              >
                {isSubmitting ? (
                  <motion.span
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex items-center justify-center gap-2"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Processing...
                  </motion.span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <FaStar className="text-yellow-300" />
                    Create Student Portfolio
                  </span>
                )}
              </motion.button>
            </motion.div>
          </div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

const Input = ({ icon, color = 'indigo', ...props }) => {
  const colorClasses = {
    indigo: {
      icon: 'text-indigo-600',
      border: 'border-indigo-200',
      focus: 'focus:ring-indigo-500 focus:border-transparent'
    },
    purple: {
      icon: 'text-purple-600',
      border: 'border-purple-200',
      focus: 'focus:ring-purple-500 focus:border-transparent'
    }
  };

  return (
    <motion.div
      className="relative"
      whileHover={{ y: -2 }}
      whileFocus={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className={`absolute inset-y-0 left-0 flex items-center pl-4 ${colorClasses[color].icon}`}>
        <motion.span whileHover={{ scale: 1.1 }}>{icon}</motion.span>
      </div>
      <input
        {...props}
        className={`pl-12 w-full p-3 rounded-lg border ${colorClasses[color].border} focus:outline-none focus:ring-2 ${colorClasses[color].focus} transition duration-200 bg-white`}
      />
    </motion.div>
  );
};

export default AddStudent;