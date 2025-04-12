import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { backendUrl } from '../App';
import { useNavigate } from 'react-router-dom';

const AddResource = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const [subjectName, setSubjectName] = useState('');
  const [topicName, setTopicName] = useState('');
  const [chapterName, setChapterName] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [aboutTopic, setAboutTopic] = useState('');
  const [accessLink, setAccessLink] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [resourceType, setResourceType] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const resourceTypes = [
    'Lecture Notes',
    'Video',
    'Book',
    'Article',
    'Slides',
    'Practice Problems',
    'Other',
  ];

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = () => {
    if (tagInput.trim() && tags.length < 10) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const response = await fetch(`${backendUrl}/api/resource/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subjectName,
          topicName,
          chapterName,
          teacherName,
          aboutTopic,
          accessLink,
          publishedDate,
          resourceType,
          tags,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to add resource');
      }

      setSuccess('Resource added successfully!');
      setSubjectName('');
      setTopicName('');
      setChapterName('');
      setTeacherName('');
      setAboutTopic('');
      setAccessLink('');
      setPublishedDate('');
      setResourceType('');
      setTags([]);
      setTimeout(() => {
        navigate('/list-resources');
      }, 1500);

    } catch (err) {
      console.error('Add resource error:', err);
      setError(err.message || 'Failed to add resource');
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
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
          <h2 className="text-2xl font-bold">Add Resource</h2>
          <p className="text-indigo-100">Add a new learning resource</p>
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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
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

            <div>
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

            <div>
              <label htmlFor="chapterName" className="block text-sm font-medium text-gray-700">
                Chapter Name
              </label>
              <input
                type="text"
                id="chapterName"
                value={chapterName}
                onChange={(e) => setChapterName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div>
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

            <div>
              <label htmlFor="aboutTopic" className="block text-sm font-medium text-gray-700">
                About Topic
              </label>
              <textarea
                id="aboutTopic"
                value={aboutTopic}
                onChange={(e) => setAboutTopic(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="accessLink" className="block text-sm font-medium text-gray-700">
                Access Link
              </label>
              <input
                type="url"
                id="accessLink"
                value={accessLink}
                onChange={(e) => setAccessLink(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="publishedDate" className="block text-sm font-medium text-gray-700">
                Published Date
              </label>
              <input
                type="date"
                id="publishedDate"
                value={publishedDate}
                onChange={(e) => setPublishedDate(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="resourceType" className="block text-sm font-medium text-gray-700">
                Resource Type
              </label>
              <select
                id="resourceType"
                value={resourceType}
                onChange={(e) => setResourceType(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              >
                <option value="">Select Resource Type</option>
                {resourceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tags
              </label>
              <div className="flex flex-wrap gap-2 mt-1">
                {tags.map((tag, index) => (
                  <div key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(index)}
                      className="ml-1 text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
                    >
                      <svg className="h-4 w-4" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={handleTagInputChange}
                    placeholder="Add tag"
                    className="p-1 border rounded-md text-sm"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddTag();
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={handleAddTag}
                    className="bg-indigo-500 hover:bg-indigo-700 text-white rounded-md px-2 py-1 text-sm"
                    disabled={tags.length >= 10}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full p-2 rounded-md ${loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}
            >
              {loading ? 'Adding...' : 'Add Resource'}
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AddResource;
