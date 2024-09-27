import React from 'react';
import WelcomeScreen from './Components/WelcomeScreen';

function App() {
  return (
    <div>
      <WelcomeScreen />
    </div>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import WelcomeScreen from './Components/WelcomeScreen';
// import StudentDashboard from './Components/StudentDashboard';
// import TeacherDashboard from './Components/TeacherDashboard';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={WelcomeScreen} />
//         <Route path="/student-dashboard" component={StudentDashboard} />
//         <Route path="/teacher-dashboard" component={TeacherDashboard} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import StudentDashboard from './StudentDashboard.jsx';
// import TeacherDashboard from './TeacherDashboard.jsx';
// import WelcomeScreen from './Components/WelcomeScreen.jsx';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<WelcomeScreen />} />
//         <Route path="/student-dashboard" element={<StudentDashboard />} />
//         <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

