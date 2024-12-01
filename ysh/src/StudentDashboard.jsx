
// // export default StudentDashboard;


// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './StudentDashboard.css'; // External CSS file for styling

// function StudentDashboard() {
//   const location = useLocation();
//   const userName = location.state?.firstName || "Student"; // Default to "Student" if name is not provided

//   return (
//     <div className="dashboard-layout">
//   {/* Search section */}
//   <div className="search-section">
//     <input 
//       type="text" 
//       className="search-bar" 
//       placeholder="Search for precise location to find teacher" 
//     />
//     <button className="search-button">Search</button> {/* Search Button */}
//   </div>

//   {/* User profile section */}
//   <div className="user-profile-container">
//     <div className="user-profile-section">
//       <div className="profile-pic-placeholder"></div>
//       <h3 className="user-name">{userName}</h3> {/* Placeholder name */}
//       <p className="user-role">Student</p> {/* Role */}
//       <button className="test-button">Test Yourself</button>
//     </div>
//   </div>
// </div>


//   );
// }

// export default StudentDashboard;


// below is the second one


// import React from "react";
// import { useLocation } from "react-router-dom";
// import "./StudentDashboard.css"; // External CSS file for styling

// function StudentDashboard() {
//   const location = useLocation();
//   const userName = location.state?.firstName || "Student"; // Default to "Student" if name is not provided

//   return (
//     <div className="dashboard-layout">
//       {/* Header */}
//       <header className="dashboard-header">
//         <h1>Welcome to Your Dashboard</h1>
//         <p>Find the best teachers around you!</p>
//       </header>

//       {/* Main Content */}
//       <div className="dashboard-content">
//         {/* Search Section */}
//         <div className="search-section">
//           <input
//             type="text"
//             className="search-bar"
//             placeholder="Search for a precise location to find teachers..."
//           />
//           <button className="search-button">Search</button>
//         </div>

//         {/* User Profile Section */}
//         <div className="user-profile-container">
//           <div className="user-profile-section">
//             <img
//               src="https://via.placeholder.com/100" // Placeholder image
//               alt="Profile"
//               className="profile-pic"
//             />
//             <h3 className="user-name">{userName}</h3>
//             <p className="user-role">Student</p>
//             <button className="test-button">Test Yourself</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StudentDashboard;

// Below is the third one

// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./StudentDashboard.css"; // External CSS file for styling

// function StudentDashboard() {
//   const location = useLocation();
//   const userName = location.state?.firstName || "Student"; // Default to "Student" if name is not provided
//   const [profilePic, setProfilePic] = useState(""); // State for profile picture

//   useEffect(() => {
//     // Here, fetch the user data from the backend (image URL, etc.)
//     // Replace this URL with your backend API that provides the user data
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch("/api/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email: "user@example.com", password: "password" }), // Replace with actual login data
//         });
  
//         const data = await response.json();
//         if (data.photo) {
//           setProfilePic(data.photo); // Assuming the backend sends the image URL
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };
  
//     fetchUserData();
//   }, []);

//   return (
//     <div className="dashboard-layout">
//       {/* Header */}
//       <header className="dashboard-header">
//         <h1>Welcome to Your Dashboard</h1>
//         <p>Find the best teachers around you!</p>
//       </header>

//       {/* Main Content */}
//       <div className="dashboard-content">
//         {/* Search Section */}
//         <div className="search-section">
//           <input
//             type="text"
//             className="search-bar"
//             placeholder="Search for a precise location to find teachers..."
//           />
//           <button className="search-button">Search</button>
//         </div>

//         {/* User Profile Section */}
//         <div className="user-profile-container">
//           <div className="user-profile-section">
//             <img
//               src={profilePic || "photoUrl"} // Use the fetched image URL or fallback to placeholder
//               alt="Profile"
//               className="profile-pic"
//             />
//             <h3 className="user-name">{userName}</h3>
//             <p className="user-role">Student</p>
//             <button className="test-button">Test Yourself</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StudentDashboard;



// Down is i am trying


// import React from "react";
// import { useLocation } from "react-router-dom";
// import "./StudentDashboard.css";

// function StudentDashboard() {
//   const location = useLocation();
//   const { userName, profilePic } = location.state || {}; // Get userName and profilePic from state, defaulting to empty if not available

//   return (
//     <div className="dashboard-layout">
//       {/* <header className="dashboard-header">
//         <h1>Welcome to Your Dashboard</h1>
//         <p>Find the best teachers around you!</p>
//       </header> */}
//       <header className="dashboard-header">
//         {/* Display the username dynamically */}
//         <h1>Welcome to Your Dashboard {userName && `, ${userName}`}</h1>

//         <p>Find the best teachers around you!</p>
//       </header>

//       <div className="dashboard-content">
//         <div className="search-section">
//           <input
//             type="text"
//             className="search-bar"
//             placeholder="Search for a precise location to find teachers..."
//           />
//           <button className="search-button">Search</button>
//         </div>

//         <div className="user-profile-container">
//           <div className="user-profile-section">
//             <img
//               src={profilePic || "defaultImageUrl.jpg"} // Fallback to a default image if no profilePic
//               alt="Profile"
//               className="profile-pic"
//             />
//             <h3 className="user-name">{userName || "Student"}</h3>
//             <p className="user-role">Student</p>
//             <button className="test-button">Test Yourself</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StudentDashboard;

// This is my main down one



// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./StudentDashboard.css"; // Make sure the CSS file path is correct

// function StudentDashboard() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Extract user data from the location state passed via React Router
//   const { userName, profilePic } = location.state || {}; // Default to empty object if no state is passed

//   return (
//     <div className="dashboard-layout">
//       <header className="dashboard-header">
//         {/* Display the username dynamically */}
//         <h1>Welcome to Your Dashboard {userName && `, ${userName}`}</h1>
//         <p>Find the best teachers around you!</p>
//       </header>

//       <div className="dashboard-content">
//         {/* Search Section */}
//         <div className="search-section">
//           <input
//             type="text"
//             className="search-bar"
//             placeholder="Search for a precise location to find teachers..."
//           />
//           <button className="search-button">Search</button>
//         </div>

//         {/* User Profile Section */}
//         <div className="user-profile-container">
//           <div className="user-profile-section">
//             <img
//               src={profilePic || "defaultImageUrl.jpg"} // Fallback to a default image if no profilePic
//               alt="Profile"
//               className="profile-pic"
//             />
//             <h3 className="user-name">{userName || "Student"}</h3>
//             <p className="user-role">Student</p>

//             {/* Button for navigating to the Quiz Page */}
//             <button
//               className="test-button"
//               onClick={() => navigate("/QuizPage")}  // Navigates to the quiz page
//             >
//               Test Yourself
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StudentDashboard;

//down is second-running one

// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./StudentDashboard.css";
// import { questions } from "./data/questions"; // Import your questions

// function StudentDashboard() {
//   const location = useLocation();
//   const { userName, profilePic } = location.state || {}; // Get userName and profilePic from state
//   const [quizStarted, setQuizStarted] = useState(false);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);

//   const startQuiz = () => {
//     setQuizStarted(true);
//     setCurrentQuestionIndex(0);
//     setScore(0);
//     setShowResult(false);
//   };

//   const handleAnswer = (selectedOption) => {
//     const currentQuestion = questions[currentQuestionIndex];
//     if (selectedOption === currentQuestion.correctAnswer) {
//       setScore(score + 1);
//     }

//     if (currentQuestionIndex + 1 < questions.length) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       setShowResult(true);
//       setQuizStarted(false);
//     }
//   };

//   return (
//     <div className="dashboard-layout">
//       <header className="dashboard-header">
//         <h1>Welcome to Your Dashboard {userName && `, ${userName}`}</h1>
//         <p>Find the best teachers around you!</p>
//       </header>

//       <div className="dashboard-content">
//         <div className="search-section">
//           <input
//             type="text"
//             className="search-bar"
//             placeholder="Search for a precise location to find teachers..."
//           />
//           <button className="search-button">Search</button>
//         </div> 
        

//         <div className="user-profile-container">
//           <div className="user-profile-section">
//             <img
//               src={profilePic || "defaultImageUrl.jpg"}
//               alt="Profile"
//               className="profile-pic"
//             />
//             <h3 className="user-name">{userName || "Student"}</h3>
//             <p className="user-role">Student</p>
//             {!quizStarted && !showResult && (
//               <button className="test-button" onClick={startQuiz}>
//                 Test Yourself
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Quiz Section */}
//         {quizStarted && (
//           <div className="quiz-section">
//             <h2>
//               Question {currentQuestionIndex + 1}/{questions.length}
//             </h2>
//             <p>{questions[currentQuestionIndex].question}</p>
//             <div>
//               {questions[currentQuestionIndex].options.map((option, index) => (
//                 <button
//                   key={index}
//                   className="quiz-option"
//                   onClick={() => handleAnswer(option)}
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {showResult && (
//           <div className="quiz-result">
//             <h2>Quiz Completed!</h2>
//             <p>
//               Your Score: {score}/{questions.length}
//             </p>
//             <button className="retry-button" onClick={startQuiz}>
//               Retry
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default StudentDashboard;

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./StudentDashboard.css";

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

function StudentDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userName, profilePic } = location.state || {}; // Get userName and profilePic from state

  const [selectedPlace, setSelectedPlace] = useState("");
  const [customPlace, setCustomPlace] = useState(""); // For manually entered place

  const startQuiz = () => {
    navigate("/quiz", { state: { userName, profilePic } }); // Redirect to QuizPage with userName
  };

  const handleSearch = () => {
    const placeToSearch = customPlace || selectedPlace; // Use customPlace if entered, otherwise selectedPlace
    if (!placeToSearch) {
      alert("Please select or enter a location to search.");
      return;
    }
    console.log("Searching for:", placeToSearch); // Replace with actual search logic
    // Add search functionality here
  };

  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <h1>Welcome to Your Dashboard{userName && `, ${userName}`}</h1>
        <p>Find the best teachers around you!</p>
      </header>

      <div className="dashboard-content">
        {/* Search Section */}
        <div className="search-section">
          <select
            className="place-dropdown"
            value={selectedPlace}
            onChange={(e) => setSelectedPlace(e.target.value)}
          >
            <option value="">Select a location</option>
            {places.map((place, index) => (
              <option key={index} value={place}>
                {place}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="search-bar"
            placeholder="Or type a location or a nearest landmark"
            value={customPlace}
            onChange={(e) => setCustomPlace(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>

        {/* User Profile Section */}
        <div className="user-profile-container">
          <div className="user-profile-section">
            <img
              src={profilePic || "defaultImageUrl.jpg"}
              alt="Profile"
              className="profile-pic"
            />
            <h3 className="user-name">{userName || "Student"}</h3>
            <p className="user-role">Student</p>
            <button className="test-button" onClick={startQuiz}>
              Test Yourself
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;




