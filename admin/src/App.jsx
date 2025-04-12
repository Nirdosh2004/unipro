import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Explore from './pages/Explore';
import AddStudent from './pages/AddStudent';
import ListStudent from './pages/ListStudent';
import AddAssignment from './pages/AddAssignment';
import ListAssignment from './pages/ListAssignment';
import AddResource from './pages/AddResource';
import ListResource from './pages/ListResource';
import Login from './components/Login';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

// Admin credentials
const ADMIN_CREDENTIALS = {
  email: "nirdoshkushwaha@adminuinpro.com",
  password: "nirdoshkushwahaunipro17112004"
};

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check authentication status on initial load
  useEffect(() => {
    const authStatus = localStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogin = (email, password) => {
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuthenticated', 'true');
      navigate('/');
      toast.success('Login successful!');
    } else {
      toast.error('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
    navigate('/login');
    toast.info('Logged out successfully');
  };

  // Protected Route component
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <div className='mx-10 my-5 font-medium'>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        <Route path="/" element={
          <ProtectedRoute>
            <>
              <Navbar onLogout={handleLogout} />
              <Explore />
            </>
          </ProtectedRoute>
        } />

        <Route path="/add-student" element={
          <ProtectedRoute>
            <>
              <Navbar onLogout={handleLogout} />
              <AddStudent />
            </>
          </ProtectedRoute>
        } />

        <Route path="/list-students" element={
          <ProtectedRoute>
            <>
              <Navbar onLogout={handleLogout} />
              <ListStudent />
            </>
          </ProtectedRoute>
        } />

        <Route path="/add-assignment" element={
          <ProtectedRoute>
            <>
              <Navbar onLogout={handleLogout} />
              <AddAssignment />
            </>
          </ProtectedRoute>
        } />

        <Route path="/list-assignments" element={
          <ProtectedRoute>
            <>
              <Navbar onLogout={handleLogout} />
              <ListAssignment />
            </>
          </ProtectedRoute>
        } />

        <Route path="/add-resource" element={
          <ProtectedRoute>
            <>
              <Navbar onLogout={handleLogout} />
              <AddResource />
            </>
          </ProtectedRoute>
        } />

        <Route path="/list-resources" element={
          <ProtectedRoute>
            <>
              <Navbar onLogout={handleLogout} />
              <ListResource />
            </>
          </ProtectedRoute>
        } />

        {/* Catch-all route for unauthorized access */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
};

export default App;