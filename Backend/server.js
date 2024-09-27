const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;
console.log({port})


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',   // Your database host
  user: 'root',        // Your database user
  password: '',        // Your database password
  database: 'YSH' // Your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});



// // Start the server
app.listen(port, () => {
 console.log("Server is running on http://localhost:${port}");
 });
// API route to handle teacher registration
// app.post('/api/register/teacher', (req, res) => {
//     const { firstName, lastName, dob, email, password, cv } = req.body;
//     const query = 'INSERT INTO teachers (firstName, lastName, dob, email, password, cv) VALUES (?, ?, ?, ?, ?, ?)';
  
//     db.query(query, [firstName, lastName, dob, email, password, cv], (err, result) => {
//       if (err) {
//         return res.status(500).json({ error: err.message });  // Send JSON with error message
//       }
//       res.status(200).json('Teacher registered successfully!');  // Send JSON with success message
//     });
//   });

app.post('/api/register/teacher', (req, res) => {
  const { firstName, lastName, dob, email, password, cv, address } = req.body;
  const query = 'INSERT INTO teachers (firstName, lastName, dob, email, password, cv, address) VALUES (?, ?, ?, ?, ?, ?, ?)';
  
  db.query(query, [firstName, lastName, dob, email, password, cv, address], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json('Teacher registered successfully!');
  });
});
  
  // API route to handle student registration
  // app.post('/api/register/student', (req, res) => {
  //   const { firstName, lastName, email, password, school, weakSubjects } = req.body;
  //   const query = 'INSERT INTO students (firstName, lastName, email, password, school, weakSubjects) VALUES (?, ?, ?, ?, ?, ?)';
  
  //   db.query(query, [firstName, lastName, email, password, school, weakSubjects], (err, result) => {
  //     if (err) {
  //       return res.status(500).json({ error: err.message });  // Send JSON with error message
  //     }
  //     res.status(200).json('Student registered successfully!');  // Send JSON with success message
  //   });
  // });

  app.post('/api/register/student', (req, res) => {
    const { firstName, lastName, email, password, school, weakSubjects, address } = req.body;
    const query = 'INSERT INTO students (firstName, lastName, email, password, school, weakSubjects, address) VALUES (?, ?, ?, ?, ?, ?, ?)';
    
    db.query(query, [firstName, lastName, email, password, school, weakSubjects, address], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json('Student registered successfully!');
    });
  });

  // API route to handle login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM students WHERE email = ?';  // Assuming 'users' is the table for teachers and students
  
  db.query(query, [email], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    if (result.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = result[0];

    if (user.password === password) {
      return res.status(200).json({ message: 'Login successful!' });
    } else {
      return res.status(401).json({ message: 'Incorrect password' });
    }
  });
});