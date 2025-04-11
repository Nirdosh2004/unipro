import React from 'react'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Route, Routes } from 'react-router-dom'

import Explore from './pages/Explore'
import Students from './pages/Students'
import Login from './pages/Login'




const App = () => {
  return (
    <div className='mx-10 my-5'>
      <ToastContainer />
      <Navbar />

      <div className='mt-7'>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/students' element={<Students />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>

    </div>
  )
}

export default App