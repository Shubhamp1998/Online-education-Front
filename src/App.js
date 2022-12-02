import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import AddCourseComponent from './component/AddCourseComponent';
import AddStaffComponent from './component/AddStaffComponent';
import AddStudentComponent from './component/AddStudentComponent';
import AdminBoard from './component/AdminBoard';
import BoardAdmin from './component/AdminComponent';
import Login from './component/Login';
import Register from './component/Register';
import StaffComponent from './component/StaffComponent';
import Courses from './component/StudentComponent';
import CourseComponent from './component/CourseComponent';
import Logout from './component/Logout';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Register/>}></Route>
          <Route path="/admin" element={<BoardAdmin/>}></Route>
          <Route path="/student" element={<Courses/>}></Route>
          <Route path="/add-student" element={<AddStudentComponent/>}></Route>
          <Route path="/edit-student/:id" element={<AddStudentComponent/>}></Route>
          <Route path="/board" element={<AdminBoard/>}></Route>
          <Route path="/staff" element={<StaffComponent/>}></Route>
          <Route path="/edit-staff/:id" element={<AddStaffComponent/>}></Route>
          <Route path="/add-staff" element={<AddStaffComponent/>}></Route>
          <Route path="/course" element={<CourseComponent/>}></Route>
          <Route path="/edit-course/:id" element={<AddCourseComponent/>}></Route>
          <Route path="/add-course" element={<AddCourseComponent/>}></Route>

          <Route path="/logout" element={<Logout/>}></Route>






        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
