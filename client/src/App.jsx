import React from 'react'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Route, Routes } from 'react-router-dom'

import Explore from './pages/Explore'
import Students from './pages/Students'
import StudentDetail from './pages/StudentDetail' // Import the new component
import Login from './pages/Login'
import { Assignments } from './pages/Assignments'
import Resources from './pages/Resources'
import Footer from './components/Footer'
import About from './pages/About'
import Profile from './pages/Profile'

const App = () => {
  return (
    <div className='mx-10 my-5'>
      <ToastContainer />
      <Navbar />

      <div className='mt-7'>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/students' element={<Students />} />
          <Route path='/students/:enrollmentNo' element={<StudentDetail />} />
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='/assignments' element={<Assignments />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/profile' element={<Profile />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App