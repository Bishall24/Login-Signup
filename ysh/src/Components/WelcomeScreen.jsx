import React, { useState } from 'react';
import '../App.css';
import '../WelcomeScreen.css';
import logo1 from '../logo1.png';

function WelcomeScreen() {
  const [formType, setFormType] = useState("");

  

  // Define the handleBack function
  const handleBack = () => {
    setFormType(""); // Reset formType to show the welcome screen
  };

  // Handle Teacher sign-up form submission
  const handleTeacherSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Gather form data
    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      dob: e.target.dob.value,
      cv: e.target.cv.value,
      address: e.target.address.value
    };

    // Send data to backend API
    fetch('http://localhost:3001/api/register/teacher', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then((response) => response.text())  // Parse response as plain text
    .then((data) => {
      alert(data);  // Show success message or error message from backend
      console.log('Response from backend:', data);
    })
    .catch((error) => {
      alert('Error registering teacher:', error);
      console.error('Error:', error);
    });
  };

  // Handle Student sign-up form submission
  const handleStudentSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Gather form data
    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      school: e.target.school.value,
      weakSubjects: e.target.weakSubjects.value,
      address: e.target.address.value
    };

    // Send data to backend API
    fetch('http://localhost:3001/api/register/student', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then((response) => response.text())  // Parse response as plain text
    .then((data) => {
      alert(data);  // Show success message or error message from backend
      console.log('Response from backend:', data);
    })
    .catch((error) => {
      alert('Error registering student:', error);
      console.error('Error:', error);
    });
  };

  // Handle Login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Gather login form data
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    // Send data to backend API for login validation
    fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === 'Login successful!') {
        alert('Welcome!');  // Redirect or display welcome message
      } else {
        alert(data.message);  // Show error message (e.g., 'Incorrect password')
      }
      console.log('Response from backend:', data);
    })
    .catch((error) => {
      alert('Error logging in:', error);
      console.error('Error:', error);
    });
  };

  return (
    <div className="welcome-container">
      {formType && <button className="back-button" onClick={handleBack}>Back</button>}
      {formType === "" ? (
        <>
          <img src={logo1} alt="logo" className="logo" />
          <h1>Welcome to Your <span style={{ color: '#007bff' }}> Second</span> Home</h1>
          <div className="button-container">
            <button className="signup-button teacher" onClick={() => setFormType("teacher")}>Sign up as a Teacher</button>
            <button className="signup-button student" onClick={() => setFormType("student")}>Sign up as a Student</button>
            <button className="login-button" onClick={() => setFormType("login")}>Login</button>
          </div>
        </>
      ) : formType === "teacher" ? (
        <form className="teacher-signup-form" onSubmit={handleTeacherSubmit}>
          <h2>Teacher Sign-up</h2>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="cv">Upload CV</label>
            <input type="file" id="cv" name="cv" accept=".pdf, .doc, .docx" required />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" required />
          </div>


          <button type="submit" className="signup-button">Submit</button>
        </form>
      ) : formType === "student" ? (
        <form className="student-signup-form" onSubmit={handleStudentSubmit}>
          <h2>Student Sign-up</h2>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="school">Current School/College</label>
            <input type="text" id="school" name="school" required />
          </div>
          <div className="form-group">
            <label htmlFor="weakSubjects">Weak Subjects</label>
            <input type="text" id="weakSubjects" name="weakSubjects" placeholder="e.g., Math, Science" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" required />
          </div>


          <button type="submit" className="signup-button">Submit</button>
        </form>
      ) : formType === "login" && (
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="signup-button">Login</button>
        </form>
      )}
    </div>
  );
}

export default WelcomeScreen;
