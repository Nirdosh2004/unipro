import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiUsers, FiBook, FiFileText, FiUpload,
  FiList, FiHome, FiBookOpen, FiBarChart2,
  FiClock, FiAlertCircle, FiCheckCircle
} from 'react-icons/fi';
import { toast } from 'react-toastify';

// Custom components
const PulseDot = ({ color = 'bg-indigo-500' }) => (
  <span className={`absolute h-2 w-2 ${color} rounded-full -top-0.5 -right-0.5`}>
    <span className={`absolute h-full w-full ${color} rounded-full animate-ping opacity-75`}></span>
  </span>
);

const Explore = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState(null);
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data fetch - replace with actual API calls
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));

        setStats({
          totalStudents: 1248,
          activeAssignments: 42,
          availableResources: 156,
          pendingTasks: 7,
          studentGrowth: 12,
          resourceGrowth: 8,
          assignmentGrowth: 3,
          taskReduction: 2
        });

        setRecentActivity([
          {
            id: 1,
            action: 'New student registered',
            time: '15 mins ago',
            icon: <FiUsers />,
            type: 'student',
            read: false
          },
          {
            id: 2,
            action: 'Assignment "Math Quiz" created',
            time: '2 hours ago',
            icon: <FiFileText />,
            type: 'assignment',
            read: false
          },
          {
            id: 3,
            action: '3 new resources uploaded',
            time: '5 hours ago',
            icon: <FiBook />,
            type: 'resource',
            read: true
          },
          {
            id: 4,
            action: 'System maintenance completed',
            time: 'Yesterday',
            icon: <FiHome />,
            type: 'system',
            read: true
          }
        ]);
      } catch (error) {
        toast.error('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      y: -5,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
    }
  };

  const statCardVariants = {
    hover: {
      y: -3,
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  // Dashboard sections
  const dashboardSections = [
    {
      id: 'students',
      title: 'Students',
      icon: <FiUsers className="text-xl" />,
      color: 'indigo',
      routes: [
        { name: 'Add Student', path: '/add-student', icon: <FiUpload /> },
        { name: 'List Students', path: '/list-students', icon: <FiList /> }
      ],
      stats: [
        { label: 'Total', value: stats?.totalStudents || '--', change: stats?.studentGrowth },
        { label: 'Active', value: '1,102', change: '+5%' }
      ]
    },
    {
      id: 'assignments',
      title: 'Assignments',
      icon: <FiFileText className="text-xl" />,
      color: 'blue',
      routes: [
        { name: 'Add Assignment', path: '/add-assignment', icon: <FiUpload /> },
        { name: 'List Assignments', path: '/list-assignments', icon: <FiList /> }
      ],
      stats: [
        { label: 'Active', value: stats?.activeAssignments || '--', change: stats?.assignmentGrowth },
        { label: 'Submitted', value: '892', change: '+12%' }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      icon: <FiBookOpen className="text-xl" />,
      color: 'emerald',
      routes: [
        { name: 'Add Resource', path: '/add-resource', icon: <FiUpload /> },
        { name: 'List Resources', path: '/list-resources', icon: <FiList /> }
      ],
      stats: [
        { label: 'Available', value: stats?.availableResources || '--', change: stats?.resourceGrowth },
        { label: 'Downloads', value: '2,456', change: '+18%' }
      ]
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const markAsRead = (id) => {
    setRecentActivity(prev =>
      prev.map(item =>
        item.id === id ? { ...item, read: true } : item
      )
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with animated tabs */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">UniPro Admin Portal</h1>
              <p className="text-gray-600">Manage your institution's digital resources</p>
            </div>
            <div className="flex space-x-1 bg-gray-200 p-1 rounded-lg">
              {['dashboard', 'analytics', 'reports'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium rounded-md relative ${activeTab === tab
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {tab === 'reports' && <PulseDot color="bg-red-500" />}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200 shadow-xs"
            >
              {activeTab === 'dashboard' && (
                <p className="text-gray-700">Overview of your institution's data and quick actions</p>
              )}
              {activeTab === 'analytics' && (
                <p className="text-gray-700">Detailed analytics and performance metrics</p>
              )}
              {activeTab === 'reports' && (
                <p className="text-gray-700">Generate and view system reports</p>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Stats Overview with shimmer loading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8"
        >
          {[
            {
              title: 'Total Students',
              value: stats?.totalStudents || '--',
              change: stats?.studentGrowth,
              icon: <FiUsers className="text-2xl" />,
              color: 'indigo'
            },
            {
              title: 'Active Assignments',
              value: stats?.activeAssignments || '--',
              change: stats?.assignmentGrowth,
              icon: <FiFileText className="text-2xl" />,
              color: 'blue'
            },
            {
              title: 'Available Resources',
              value: stats?.availableResources || '--',
              change: stats?.resourceGrowth,
              icon: <FiBookOpen className="text-2xl" />,
              color: 'emerald'
            },
            {
              title: 'Pending Tasks',
              value: stats?.pendingTasks || '--',
              change: stats?.taskReduction,
              icon: <FiAlertCircle className="text-2xl" />,
              color: 'amber'
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={statCardVariants}
              whileHover="hover"
              className={`bg-white p-5 rounded-xl border border-gray-200 shadow-xs relative overflow-hidden group ${loading ? 'animate-pulse' : ''
                }`}
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <p className="text-3xl font-semibold mt-1 text-gray-900">
                    {stat.value}
                  </p>
                  <p className={`text-sm mt-1 ${typeof stat.change === 'number' ?
                    (stat.change >= 0 ? 'text-green-500' : 'text-red-500') :
                    'text-gray-500'
                    }`}>
                    {typeof stat.change === 'number' ?
                      `${stat.change >= 0 ? '+' : ''}${stat.change}%` :
                      '--'}
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-${stat.color}-100 text-${stat.color}-600`}>
                  {stat.icon}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  className={`h-full bg-${stat.color}-500`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Management Sections */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 space-y-6"
          >
            {dashboardSections.map((section) => (
              <motion.div
                key={section.id}
                variants={cardVariants}
                className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden"
              >
                <div className={`p-4 bg-${section.color}-50 border-b border-${section.color}-100 flex items-center`}>
                  <div className={`p-2 rounded-lg bg-${section.color}-100 text-${section.color}-600 mr-3`}>
                    {section.icon}
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">{section.title} Management</h2>
                </div>

                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Stats */}
                  <div className="space-y-4">
                    {section.stats.map((stat, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-500">{stat.label}</span>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{stat.value}</p>
                          <p className={`text-xs ${stat.change?.toString().startsWith('+') || (typeof stat.change === 'number' && stat.change >= 0) ?
                            'text-green-500' : 'text-red-500'
                            }`}>
                            {typeof stat.change === 'number' ?
                              `${stat.change >= 0 ? '+' : ''}${stat.change}%` :
                              stat.change}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    {section.routes.map((route) => (
                      <motion.button
                        key={route.path}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleNavigation(route.path)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg bg-${section.color}-50 text-${section.color}-700 hover:bg-${section.color}-100 transition-colors`}
                      >
                        <div className="flex items-center">
                          <span className={`mr-3 bg-${section.color}-100 p-1.5 rounded-md text-${section.color}-600`}>
                            {route.icon}
                          </span>
                          <span className="font-medium">{route.name}</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Recent Activity and Quick Actions */}
          <div className="space-y-6">
            {/* Quick Actions Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden"
            >
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
              </div>
              <div className="p-5 space-y-3">
                {[
                  {
                    label: 'Create New Assignment',
                    icon: <FiFileText className="text-indigo-600" />,
                    action: () => handleNavigation('/add-assignment'),
                    color: 'indigo'
                  },
                  {
                    label: 'Upload Resource Bundle',
                    icon: <FiBook className="text-blue-600" />,
                    action: () => handleNavigation('/add-resource'),
                    color: 'blue'
                  },
                  {
                    label: 'Batch Import Students',
                    icon: <FiUsers className="text-emerald-600" />,
                    action: () => toast.info('Batch import coming soon!'),
                    color: 'emerald'
                  }
                ].map((item, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={item.action}
                    className={`w-full flex items-center p-3 rounded-lg bg-${item.color}-50 text-${item.color}-700 hover:bg-${item.color}-100 transition-colors`}
                  >
                    <span className={`mr-3 bg-white p-1.5 rounded-md shadow-xs`}>
                      {item.icon}
                    </span>
                    <span className="font-medium text-left flex-1">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden"
            >
              <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                  View All
                </button>
              </div>
              <div className="divide-y divide-gray-200">
                <AnimatePresence>
                  {recentActivity.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => markAsRead(item.id)}
                      className={`p-4 cursor-pointer transition-colors ${!item.read ? 'bg-blue-50/50' : 'hover:bg-gray-50'}`}
                    >
                      <div className="flex items-start">
                        <div className={`p-2 rounded-full mr-3 ${item.type === 'student' ? 'bg-indigo-100 text-indigo-600' :
                          item.type === 'assignment' ? 'bg-blue-100 text-blue-600' :
                            item.type === 'resource' ? 'bg-emerald-100 text-emerald-600' :
                              'bg-gray-100 text-gray-600'
                          }`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <p className={`font-medium ${!item.read ? 'text-gray-900' : 'text-gray-700'}`}>
                              {item.action}
                            </p>
                            {!item.read && <PulseDot />}
                          </div>
                          <div className="flex items-center mt-1">
                            <FiClock className="text-gray-400 mr-1" size={14} />
                            <span className="text-xs text-gray-500">{item.time}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* System Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden"
            >
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">System Status</h2>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <FiCheckCircle className="text-green-500 mr-2" />
                    <span className="font-medium">All systems operational</span>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Live</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">API Response</span>
                    <span className="font-medium">42ms</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Database</span>
                    <span className="font-medium">Healthy</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Storage</span>
                    <span className="font-medium">24% used</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="w-full text-center text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                    View Detailed Status
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;