import React from 'react';

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

function TeacherRegistration({ handleTeacherSubmit }) { // Removed "places" from props
  return (
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
  );
}

export default TeacherRegistration;
