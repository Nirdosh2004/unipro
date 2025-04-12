import React, { useState, useEffect } from 'react';
import { FaTrash, FaSpinner, FaExclamationTriangle, FaFile } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { backendUrl } from '../App';

const ListResource = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [resourceToDelete, setResourceToDelete] = useState(null);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${backendUrl}/api/resource/list`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to fetch resources');
      }
      setResources(result.data || []);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message || 'Failed to load resources');
      setResources([]);
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = (id) => {
    setResourceToDelete(id);
    setShowDeleteConfirm(true);
  };

  const handleDelete = async () => {
    if (!resourceToDelete) return;

    try {
      setDeletingId(resourceToDelete);
      const response = await fetch(`${backendUrl}/api/resource/${resourceToDelete}`, {
        method: 'DELETE',
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || 'Failed to delete resource');
      }

      setResources((prevResources) =>
        prevResources.filter((resource) => resource._id !== resourceToDelete)
      );
    } catch (err) {
      console.error('Delete error:', err);
      setError(err.message || 'Delete failed');
    } finally {
      setDeletingId(null);
      setResourceToDelete(null);
      setShowDeleteConfirm(false);
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
        {/* Delete Confirmation Modal */}
        <AnimatePresence>
          {showDeleteConfirm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-white rounded-lg p-6 max-w-md w-full"
              >
                <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
                <p className="mb-6">
                  Are you sure you want to delete this resource record? This
                  action cannot be undone.
                </p>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDelete}
                    disabled={deletingId}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50"
                  >
                    {deletingId ? (
                      <span className="flex items-center gap-2">
                        <FaSpinner className="animate-spin" />
                        Deleting...
                      </span>
                    ) : (
                      'Delete'
                    )}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div className="flex items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <FaFile className="text-4xl text-indigo-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Resource List
            </h1>
          </div>
          <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
            Total: {resources.length}
          </div>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
            <h2 className="text-2xl font-bold">Manage Resources</h2>
            <p className="text-indigo-100">View and manage learning resources</p>
          </div>

          <div className="p-6 md:p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <FaExclamationTriangle className="text-red-500" />
                <span className="text-red-700">{error}</span>
              </div>
            )}

            {loading ? (
              <div className="flex justify-center items-center py-12">
                <FaSpinner className="text-2xl text-indigo-600 animate-spin" />
              </div>
            ) : (
              <div className="overflow-x-auto">
                {resources.length > 0 ? (
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          #
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Resource Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Subject Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Teacher Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {resources.map((resource, index) => (
                        <tr key={resource._id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {resource.topicName || 'N/A'}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                              {resource.subjectName || 'N/A'}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                              {resource.teacherName || 'N/A'}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => confirmDelete(resource._id)}
                              disabled={deletingId === resource._id}
                              className="text-red-600 hover:text-red-900 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {deletingId === resource._id ? (
                                <FaSpinner className="animate-spin" />
                              ) : (
                                <FaTrash />
                              )}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    No resources found in the database.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ListResource;
