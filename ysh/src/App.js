import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './Components/WelcomeScreen';
import TeacherDashboard from './TeacherDashboard';  // Import your TeacherDashboard component
import StudentDashboard from './StudentDashboard';  // Import your StudentDashboard component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/TeacherDashboard" element={<TeacherDashboard />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;