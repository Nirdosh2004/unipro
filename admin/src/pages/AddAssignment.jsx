import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { backendUrl } from '../App';
import { useNavigate } from 'react-router-dom';

const AddAssignment = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const [subjectName, setSubjectName] = useState('');
  const [topicName, setTopicName] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [paraOne, setParaOne] = useState('');
  const [paraTwo, setParaTwo] = useState('');
  const [paraThree, setParaThree] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [attachmentName, setAttachmentName] = useState('');
  const [attachmentUrl, setAttachmentUrl] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const response = await fetch(`${backendUrl}/api/assignment/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subjectName,
          topicName,
          teacherName,
          paragraphs: {
            paraOne,
            paraTwo,
            paraThree,
          },
          dueDate,
          attachments: [{ name: attachmentName, url: attachmentUrl }],
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to add assignment');
      }

      setSuccess('Assignment added successfully!');
      setSubjectName('');
      setTopicName('');
      setTeacherName('');
      setParaOne('');
      setParaTwo('');
      setParaThree('');
      setDueDate('');
      setAttachmentName('');
      setAttachmentUrl('');
      setTimeout(() => {
        navigate('/list-assignments');
      }, 1500);

    } catch (err) {
      console.error('Add assignment error:', err);
      setError(err.message || 'Failed to add assignment');
    } finally {
      setLoading(false);
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
        className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
          <h2 className="text-2xl font-bold">Add Assignment</h2>
          <p className="text-indigo-100">Create a new assignment</p>
        </div>

        <div className="p-6 md:p-8">
          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="subjectName" className="block text-sm font-medium text-gray-700">
                Subject Name
              </label>
              <input
                type="text"
                id="subjectName"
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="topicName" className="block text-sm font-medium text-gray-700">
                Topic Name
              </label>
              <input
                type="text"
                id="topicName"
                value={topicName}
                onChange={(e) => setTopicName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="teacherName" className="block text-sm font-medium text-gray-700">
                Teacher Name
              </label>
              <input
                type="text"
                id="teacherName"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="paraOne" className="block text-sm font-medium text-gray-700">
                Paragraph 1
              </label>
              <textarea
                id="paraOne"
                value={paraOne}
                onChange={(e) => setParaOne(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="paraTwo" className="block text-sm font-medium text-gray-700">
                Paragraph 2
              </label>
              <textarea
                id="paraTwo"
                value={paraTwo}
                onChange={(e) => setParaTwo(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="paraThree" className="block text-sm font-medium text-gray-700">
                Paragraph 3
              </label>
              <textarea
                id="paraThree"
                value={paraThree}
                onChange={(e) => setParaThree(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="attachmentName" className="block text-sm font-medium text-gray-700">
                Attachment Name
              </label>
              <input
                type="text"
                id="attachmentName"
                value={attachmentName}
                onChange={(e) => setAttachmentName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="attachmentUrl" className="block text-sm font-medium text-gray-700">
                Attachment URL
              </label>
              <input
                type="url"
                id="attachmentUrl"
                value={attachmentUrl}
                onChange={(e) => setAttachmentUrl(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full p-2 rounded-md ${loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}
            >
              {loading ? 'Adding...' : 'Add Assignment'}
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AddAssignment;