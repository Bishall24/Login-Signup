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

