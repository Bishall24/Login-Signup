// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./QuizPage.css"; // Add styles for the QuizPage
// import { questions } from "./data/questions"; // Import your questions

// function QuizPage() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { userName, profilePic } = location.state || {}; // Get the user's name from state
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);

//   const handleAnswer = (selectedOption) => {
//     const currentQuestion = questions[currentQuestionIndex];
//     if (selectedOption === currentQuestion.correctAnswer) {
//       setScore(score + 1);
//     }

//     if (currentQuestionIndex + 1 < questions.length) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       setShowResult(true);
//     }
//   };

//   const handleRetry = () => {
//     setCurrentQuestionIndex(0);
//     setScore(0);
//     setShowResult(false);
//   };

//   const goBackToDashboard = () => {
//     navigate("/StudentDashboard", { state: { userName, profilePic  } });
//   };

//   return (
//     <div className="quiz-page">
//       {!showResult ? (
//         <div className="quiz-container">
//           <h1>{`Hello ${userName}, Test Yourself!`}</h1>
//           <h2>Question {currentQuestionIndex + 1}/{questions.length}</h2>
//           <p className="quiz-question">{questions[currentQuestionIndex].question}</p>
//           <div className="quiz-options">
//             {questions[currentQuestionIndex].options.map((option, index) => (
//               <button
//                 key={index}
//                 className="quiz-option"
//                 onClick={() => handleAnswer(option)}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div className="quiz-result">
//           <h2>Quiz Completed!</h2>
//           <p>Your Score: {score}/{questions.length}</p>
//           <div className="result-actions">
//             <button className="retry-button" onClick={handleRetry}>Retry</button>
//             <button className="dashboard-button" onClick={goBackToDashboard}>
//               Back to Dashboard
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default QuizPage;


import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./QuizPage.css";
import { subjectQuestions } from "./data/questions";

function QuizPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userName, profilePic } = location.state || {}; // Get the user's name from state

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  const handleAnswer = (selectedOption) => {
    const currentQuestion = subjectQuestions[selectedSubject][currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < subjectQuestions[selectedSubject].length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  const goBackToDashboard = () => {
    navigate("/StudentDashboard", { state: { userName, profilePic } });
  };

  return (
    <div className="quiz-page">
      {!selectedSubject ? (
        <div className="subject-selection">
          <h1>{`Hello ${userName}, Choose a Subject!`}</h1>
          <div className="subject-buttons">
            {Object.keys(subjectQuestions).map((subject) => (
              <button
                key={subject}
                className="subject-button"
                onClick={() => handleSubjectSelect(subject)}
              >
                {subject}
              </button>
            ))}
          </div>
        </div>
      ) : !showResult ? (
        <div className="quiz-container">
          <h1>{`Subject: ${selectedSubject}`}</h1>
          <h2>Question {currentQuestionIndex + 1}/{subjectQuestions[selectedSubject].length}</h2>
          <p className="quiz-question">{subjectQuestions[selectedSubject][currentQuestionIndex].question}</p>
          <div className="quiz-options">
            {subjectQuestions[selectedSubject][currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className="quiz-option"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="quiz-result">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score}/{subjectQuestions[selectedSubject].length}</p>
          <div className="result-actions">
            <button className="retry-button" onClick={handleRetry}>Retry</button>
            <button className="dashboard-button" onClick={goBackToDashboard}>
              Back to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizPage;

