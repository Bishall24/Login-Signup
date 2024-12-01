
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import '../WelcomeScreen.css';
import logo1 from '../logo1.png';
import StudentDashboard from '../StudentDashboard'; // Import the StudentDashboard

function WelcomeScreen() {
  const navigate = useNavigate();
  const [formType, setFormType] = useState("");
  // const [userName, setUserName] = useState(""); // State to store user's name
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  const handleBack = () => {
    setFormType("");
  };


  // // lets see I am trying to handle photo


  const handleTeacherSubmit = (e) => {  
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstName', e.target.firstName.value);
    formData.append('lastName', e.target.lastName.value);
    formData.append('email', e.target.email.value);
    formData.append('password', e.target.password.value);
    formData.append('dob', e.target.dob.value);
    formData.append('cv', e.target.cv.value);
    formData.append('address', e.target.address.value);
    // formData.append('photo', e.target.photo.files[0]);
  
    fetch('http://localhost:3001/api/register/teacher', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        console.log('Response from backend:', data);
      })
      .catch((error) => {
        alert('Error registering teacher:', error);
        console.error('Error:', error);
      });
  };

  const places = [
    "Thamel", "Basantapur", "New Road", "Ason", "Baneshwor", "Boudha", "Lazimpat",
    "Gongabu", "Kalanki", "Koteshwor", "Swayambhu", "Budhanilkantha Temple area", 
    "Chapali", "Kapan", "Tokha Saraswati", "Mahankal", "Hattigauda", "Bansbari", 
    "Thankot", "Matatirtha", "Purano Naikap", "Dahachok", "Satungal", "Machhegaun", 
    "Tribhuvan Park area", "Dakshinkali Municipality", "Dakshinkali Temple area", 
    "Pharping", "Lele", "Chhampi", "Gokarna", "Jorpati", "Nayapati", "Sundarijal", 
    "Baluwa", "Gagal Phedi", "Mulpani", "Gothatar", "Bhadrabas", "Danchhi", 
    "Kageshwori", "Manohara area", "Kirtipur Bazaar", "Panga", "Nagaun", 
    "Bagh Bhairab", "Chobhar", "Tyanglaphat", "Sitapaila", "Ichangu Narayan", 
    "Bhimdhunga", "Balaju", "Syuchatar", "Sankhu (Salinadi area)", "Bajrayogini", 
    "Jarsing Pauwa", "Indrayani", "Pukhulachhi", "Goldhunga", "Futung", "Manamaiju", 
    "Dharmasthali", "Kavresthali", "Tokha Saraswati", "Dhapasi", "Jhor", "Danchhi", 
    "Gongabu", "Sukedhara", "Chabahil", "Bauddha area"
  ];
  
  const handleStudentSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstName', e.target.firstName.value);
    formData.append('lastName', e.target.lastName.value);
    formData.append('email', e.target.email.value);
    formData.append('password', e.target.password.value);
    formData.append('school', e.target.school.value);
    formData.append('weakSubjects', e.target.weakSubjects.value);
    formData.append('address', e.target.address.value);
    formData.append('photo', e.target.photo.files[0]);
  
    fetch('http://localhost:3001/api/register/student', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        console.log('Response from backend:', data);    
      })
      .catch((error) => {
        alert('Error registering student:', error);
        console.error('Error:', error);
      });
  };
  

  // const handleTeacherSubmit = (e) => {  
  //   e.preventDefault();
  //   const formData = {
  //     firstName: e.target.firstName.value,
  //     lastName: e.target.lastName.value,
  //     email: e.target.email.value,
  //     password: e.target.password.value,
  //     dob: e.target.dob.value,
  //     cv: e.target.cv.value,
  //     address: e.target.address.value
  //   };

  //   fetch('http://localhost:3001/api/register/teacher', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(formData),
  //   })
  //   .then((response) => response.text())
  //   .then((data) => {
  //     alert(data);
  //     console.log('Response from backend:', data);
  //   })
  //   .catch((error) => {
  //     alert('Error registering teacher:', error);
  //     console.error('Error:', error);
  //   });
  // };

  

  // const handleStudentSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = {
  //     firstName: e.target.firstName.value,
  //     lastName: e.target.lastName.value,
  //     email: e.target.email.value,
  //     password: e.target.password.value,
  //     school: e.target.school.value,
  //     weakSubjects: e.target.weakSubjects.value,
  //     address: e.target.address.value
  //   };

  //   fetch('http://localhost:3001/api/register/student', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(formData),
  //   })
  //   .then((response) => response.text())
  //   .then((data) => {
  //     alert(data);
  //     console.log('Response from backend:', data);    
  //   })
  //   .catch((error) => {
  //     alert('Error registering student:', error);
  //     console.error('Error:', error);
  //   });
  // };

  // const handleLoginSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = {
  //     email: e.target.email.value,
  //     password: e.target.password.value,
  //   };

  //   fetch('http://localhost:3001/api/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(formData),
  //   })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     if (data.message === 'Login successful!') {
  //       // alert('Welcome!');
  //       setIsLoggedIn(true);
  //       // setUserName(data.firstName); // Set the user's name from the response
  //       setUserRole(data.role);
        

  //       if (data.role === 'student') {
  //         navigate('/StudentDashboard', { state: { userName: data.firstName } });  // Redirect to student dashboard and pass name
  //       } else if (data.role === 'teacher') {
  //         navigate('/TeacherDashboard');
  //       }
  //     } else {
  //       alert(data.message);
  //     }
  //   })
  //   .catch((error) => {
  //     alert('Error logging in:', error);
  //     console.error('Error:', error);
  //   });
  // };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === 'Login successful!') {
        setIsLoggedIn(true);
        setUserRole(data.role);  // Store the user role

        // Pass user data (like firstName) to the dashboard via the state
        if (data.role === 'student') {
          navigate('/StudentDashboard', { state: { userName: data.firstName, profilePic: data.photo } });  // Pass userName and profilePic to StudentDashboard
        } else if (data.role === 'teacher') {
          navigate('/TeacherDashboard', { state: { userName: data.firstName } });
        }
      } else {
        alert(data.message);
      }
    })
    .catch((error) => {
      alert('Error logging in:', error);
      console.error('Error:', error);
    });
};

  return (
    <div className="welcome-container">
      {formType && <button className="back-button" onClick={handleBack}>Back</button>}
      {isLoggedIn && userRole === 'student' ? (
        <StudentDashboard />
      ) : formType === "" ? (
        <>
          <img src={logo1} alt="logo" className="logo" />
          <h1>Welcome to Your <span style={{ color: '#007bff' }}> Second</span> Home</h1>
          <div className="description">
          <p>
          Our system helps students connect with <span style={{ color: '#007bff' }}>skilled teachers</span> in a user-friendly environment.
          Teachers can sign up to share their expertise, while students can find the guidance they need to excel. 
          Our platform offers a seamless learning experience with personalized learning paths, real-time communication 
          tools, and flexible scheduling options. Students can easily track their progress and receive feedback from teachers,
           while teachers can upload resources and assignments to support learning. With  <span style={{ color: '#007bff' }}>secure login and encrypted communication</span> , 
           we ensure a safe and private environment for both students and teachers. Whether you’re using a computer, tablet, or phone,
           our platform is fully optimized for all devices, so you can learn and teach from anywhere, anytime. Join us to create a 
            collaborative and productive learning space where everyone can thrive.


          </p>
          </div>
          
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
          {/* <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" required />
          </div> */}
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <select id="address" name="address" required>
              {places.map((place, index) => (
                <option key={index} value={place}>
                  {place}
                </option>
              ))}
            </select>
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
            <label htmlFor="school">School</label>
            <input type="text" id="school" name="school" required />
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
            <label htmlFor="weakSubjects">Weak Subjects</label>
            <input type="text" id="weakSubjects" name="weakSubjects" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" required />
          </div>

          <div className="form-group">
            <label htmlFor="photo">Upload Photo</label>
            <input type="file" id="photo" name="photo" accept="image/*" required />
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








