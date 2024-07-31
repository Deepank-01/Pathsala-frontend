import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Homepage from './Pages/Homepage'
// import css from "./"

import "./App.css";
import Navbar from './Components/Common/Navbar';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ForgetPassword from './Components/Cors/Auth/ForgetPassword';
import ResetPassword from './Components/Cors/Auth/ResetPassword';
import Verifyemail from './Pages/Verifyemail';
import About from './Pages/About';
import Dashboard from './Pages/Dashboard';
import Profile from './Components/Cors/Dashboardpage/Profile';
import Add_course from './Components/Cors/Dashboardpage/AddCourse/Add_course';
import Error from './Components/Cors/Dashboardpage/Error';
import Settings from "./Components/Cors/Dashboardpage/Settings"
import { useSelector } from 'react-redux';
import MyCourse from './Components/Cors/Dashboardpage/Mycourse/MyCourse';
import Category_Detail from './Components/Cors/CategoriesDetail/Category_Detail';
import CourseDetails from './Pages/CourseDetails';
import EnrolledCourse from './Pages/EnrolledCourse';
import ViewCourse from './Pages/ViewCourse';
import VideoPlayer from './Components/Cors/ViewCourse/VideoPlayer';

function App() {
  
const {user}=useSelector(state=>state.profile)

  return (
    <div className=' w-screen min-h-screen bg-richblack-900   flex flex-col font-inter  '>
   
    <Navbar/>
    
 
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        {/* <Route path='/login' element={<Homepage/>}/> */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='forgot-password'  element={<ForgetPassword/>}/>
        <Route  path='/update-password/:id' element=<ResetPassword/>/>
        <Route path='/verify-email' element={<Verifyemail/>}/>
        <Route  path='/about' element={<About/>}/>

        {/* nested route for the daskboard */}
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='my-profile' element={<Profile/>}/>

          {user && user.accountType=="instructor" ?( <Route path='add-course' element={<Add_course/>}/>):(<Route path="add-course" element={<Error/>}/>) }
          {user && user.accountType=="instructor" ?( <Route path='my-courses' element ={<MyCourse/>}/>):(<Route path="add-course" element={<Error/>}/>) }
         
          <Route path='enrolled-courses' element={<EnrolledCourse/>}/>
          <Route path='purchase-history'/>
          <Route path='instructor'/>
          <Route path='settings' element={<Settings/>}/>
        </Route>

         {/* nested routes for the video player */}
         <Route path='/view-course/:courseId' element={<ViewCourse/>}>
         <Route path="section/:sectionId" element={<VideoPlayer/>}/>

         </Route>

        <Route path='categories/:categoryName' element={<Category_Detail/>}/>
        <Route path='courses/:courseId' element={<CourseDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
