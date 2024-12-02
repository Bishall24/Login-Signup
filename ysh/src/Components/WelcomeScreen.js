
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import '../WelcomeScreen.css';
import logo1 from '../logo1.png';
import Login from './login';
import StudentRegistration from './StudentRegistration';
import TeacherRegistration from './TeacherRegistration';
import { handleTeacherSubmit, handleStudentSubmit, handleLoginSubmit } from '../api/apiHandlers';


function WelcomeScreen() {
  const navigate = useNavigate();
  const [formType, setFormType] = useState('');
  const places = [ /* Array of locations */ ];

  const handleBack = () => setFormType('');

  return (
    <div className="welcome-container">
      {formType && <button className="back-button" onClick={handleBack}>Back</button>}
      {formType === '' ? (
        <>
          <img src={logo1} alt="logo" className="logo" />
          <h1>Welcome to Your <span style={{ color: '#007bff' }}>Second</span> Home</h1>
          <div className="button-container">
            <button className="signup-button teacher" onClick={() => setFormType('teacher')}>Sign up as a Teacher</button>
            <button className="signup-button student" onClick={() => setFormType('student')}>Sign up as a Student</button>
            <button className="login-button" onClick={() => setFormType('login')}>Login</button>
          </div>
        </>
      ) : formType === 'teacher' ? (
        <TeacherRegistration handleTeacherSubmit={(e) => handleTeacherSubmit(e, setFormType)} places={places} />
      ) : formType === 'student' ? (
        <StudentRegistration handleStudentSubmit={(e) => handleStudentSubmit(e, setFormType)} places={places} />
      ) : (
        <Login handleLoginSubmit={(e) => handleLoginSubmit(e, navigate)} />
      )}
    </div>
  );
}

export default WelcomeScreen;
