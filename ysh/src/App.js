// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import WelcomeScreen from './Components/WelcomeScreen';
// import TeacherDashboard from './TeacherDashboard';  // Import your TeacherDashboard component
// import StudentDashboard from './StudentDashboard';  // Import your StudentDashboard component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<WelcomeScreen />} />
//         <Route path="/TeacherDashboard" element={<TeacherDashboard />} />
//         <Route path="/StudentDashboard" element={<StudentDashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./Components/WelcomeScreen";
import TeacherDashboard from "./TeacherDashboard";
import StudentDashboard from "./StudentDashboard";
import QuizPage from "./QuizPage"; // Import your new QuizPage component

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Welcome Screen */}
        <Route path="/" element={<WelcomeScreen />} />
        
        {/* Teacher Dashboard */}
        <Route path="/TeacherDashboard" element={<TeacherDashboard />} />
        
        {/* Student Dashboard */}
        <Route path="/StudentDashboard" element={<StudentDashboard />} />
        
        {/* Quiz Page */}
        <Route path="/quiz" element={<QuizPage />} />
        
        {/* Catch-all Route (404 Page) */}
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
