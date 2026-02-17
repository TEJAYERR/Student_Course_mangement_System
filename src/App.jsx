import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Enroll from './Pages/Enroll'
import DeEnroll from './Pages/DeEnroll'

const App = () =>{

  const [courses, setCourses] = useState([]);
  
  return(
    <div >
      <div className='flex flex-col gap-10 items-center justify-center'>

        <h1 className='text-4xl font-bold'>Student Course Enrollment System SVCE CSC</h1>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/enroll' element = {<Enroll courses = {courses} />} />
          <Route path = '/deenroll' element = {<DeEnroll />} />
        </Routes>

      </div>
    </div>
  )
}

export default App
