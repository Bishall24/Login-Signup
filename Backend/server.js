// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 3001;
// console.log({port})


// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Create MySQL connection
// const db = mysql.createConnection({
//   host: 'localhost',   // Your database host
//   user: 'root',        // Your database user
//   password: '',        // Your database password
//   database: 'YSH' // Your database name
// });

// // Connect to MySQL
// db.connect((err) => {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }
//   console.log('Connected to database.');
// });



// // // Start the server
// app.listen(port, () => {
//  console.log("Server is running on http://localhost:${port}");
//  });
// // API route to handle teacher registration
// // app.post('/api/register/teacher', (req, res) => {
// //     const { firstName, lastName, dob, email, password, cv } = req.body;
// //     const query = 'INSERT INTO teachers (firstName, lastName, dob, email, password, cv) VALUES (?, ?, ?, ?, ?, ?)';
  
// //     db.query(query, [firstName, lastName, dob, email, password, cv], (err, result) => {
// //       if (err) {
// //         return res.status(500).json({ error: err.message });  // Send JSON with error message
// //       }
// //       res.status(200).json('Teacher registered successfully!');  // Send JSON with success message
// //     });
// //   });

// // API route to handle teacher registration

// app.post('/api/register/teacher', (req, res) => {
//   const { firstName, lastName, dob, email, password, cv, address } = req.body;
//   const query = 'INSERT INTO teachers (firstName, lastName, dob, email, password, cv, address) VALUES (?, ?, ?, ?, ?, ?, ?)';
  
//   db.query(query, [firstName, lastName, dob, email, password, cv, address], (err, result) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     res.status(200).json('Teacher registered successfully!');
//   });
// });
  
//   // API route to handle student registration
//   // app.post('/api/register/student', (req, res) => {
//   //   const { firstName, lastName, email, password, school, weakSubjects } = req.body;
//   //   const query = 'INSERT INTO students (firstName, lastName, email, password, school, weakSubjects) VALUES (?, ?, ?, ?, ?, ?)';
  
//   //   db.query(query, [firstName, lastName, email, password, school, weakSubjects], (err, result) => {
//   //     if (err) {
//   //       return res.status(500).json({ error: err.message });  // Send JSON with error message
//   //     }
//   //     res.status(200).json('Student registered successfully!');  // Send JSON with success message
//   //   });
//   // });

//   app.post('/api/register/student', (req, res) => {
//     const { firstName, lastName, email, password, school, weakSubjects, address } = req.body;
//     const query = 'INSERT INTO students (firstName, lastName, email, password, school, weakSubjects, address) VALUES (?, ?, ?, ?, ?, ?, ?)';
    
//     db.query(query, [firstName, lastName, email, password, school, weakSubjects, address], (err, result) => {
//       if (err) {
//         return res.status(500).json({ error: err.message });
//       }
//       res.status(200).json('Student registered successfully!');
//     });
//   });

//   // API route to handle login
// app.post('/api/login', (req, res) => {
//   const { email, password } = req.body;

//   // First check in the teachers table
//   const teacherQuery = 'SELECT * FROM teachers WHERE email = ?';
  
//   db.query(teacherQuery, [email], (err, teacherResult) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
    
//     if (teacherResult.length > 0) {
//       const teacher = teacherResult[0];
//       if (teacher.password === password) {
//         return res.status(200).json({ message: 'Login successful!', role: 'teacher' });
//       } else {
//         return res.status(401).json({ message: 'Incorrect password' });
//       }
//     }

//     // If no teacher found, check in the students table
//     const studentQuery = 'SELECT * FROM students WHERE email = ?';
    
//     db.query(studentQuery, [email], (err, studentResult) => {
//       if (err) {
//         return res.status(500).json({ error: err.message });
//       }

//       if (studentResult.length > 0) {
//         const student = studentResult[0];
//         if (student.password === password) {
//           return res.status(200).json({ message: 'Login successful!', role: 'student' });
//         } else {
//           return res.status(401).json({ message: 'Incorrect password' });
//         } 
//       }

//       // If no user found in both tables
//       return res.status(404).json({ message: 'User not found' });
//     });
//   });
// });

// Upper one is old 

// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const multer = require('multer'); // For handling file uploads
// const path = require('path');

// const app = express();
// const port = process.env.PORT || 3001;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
//   },
// });
// const upload = multer({ storage });

// // MySQL Database Configuration
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'YSH',
// });

// // Connect to MySQL
// db.connect((err) => {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }
//   console.log('Connected to database.');
// });

// // Teacher Registration with Photo Upload
// app.post('/api/register/teacher', upload.single('photo'), (req, res) => {
//   const { firstName, lastName, dob, email, password, cv, address } = req.body;
//   const photo = req.file ? `/uploads/${req.file.filename}` : null;

//   const query = `
//     INSERT INTO teachers (firstName, lastName, dob, email, password, cv, address, photo) 
//     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

//   db.query(query, [firstName, lastName, dob, email, password, cv, address, photo], (err) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     res.status(200).json({ message: 'Teacher registered successfully!' });
//   });
// });

// // Student Registration with Photo Upload
// app.post('/api/register/student', upload.single('photo'), (req, res) => {
//   const { firstName, lastName, email, password, school, weakSubjects, address } = req.body;
//   const photo = req.file ? `/uploads/${req.file.filename}` : null;

//   const query = `
//     INSERT INTO students (firstName, lastName, email, password, school, weakSubjects, address, photo) 
//     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

//   db.query(query, [firstName, lastName, email, password, school, weakSubjects, address, photo], (err) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     res.status(200).json({ message: 'Student registered successfully!' });
//   });
// });

// // Login Route
// app.post('/api/login', (req, res) => {
//   const { email, password } = req.body;

//   // Check in teachers table
//   const teacherQuery = 'SELECT * FROM teachers WHERE email = ?';
//   db.query(teacherQuery, [email], (err, teacherResult) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }

//     if (teacherResult.length > 0) {
//       const teacher = teacherResult[0];
//       if (teacher.password === password) {
//         return res.status(200).json({ message: 'Login successful!', role: 'teacher', photo: teacher.photo });
//       } else {
//         return res.status(401).json({ message: 'Incorrect password' });
//       }
//     }

//     // Check in students table if not found in teachers
//     const studentQuery = 'SELECT * FROM students WHERE email = ?';
//     db.query(studentQuery, [email], (err, studentResult) => {
//       if (err) {
//         return res.status(500).json({ error: err.message });
//       }

//       if (studentResult.length > 0) {
//         const student = studentResult[0];
//         if (student.password === password) {
//           return res.status(200).json({ message: 'Login successful!', role: 'student', photo: student.photo });
//         } else {
//           return res.status(401).json({ message: 'Incorrect password' });
//         }
//       }

//       // User not found in both tables
//       res.status(404).json({ message: 'User not found' });
//     });
//   });
// });

// // Start the Server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


// Down is for photo

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer'); // For handling file uploads
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
  },
});
const upload = multer({ storage });

// MySQL Database Configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'YSH', // Make sure your database is named 'YSH' or update accordingly
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

// Teacher Registration with Photo Upload
app.post('/api/register/teacher', upload.single('photo'), (req, res) => {
  const { firstName, lastName, dob, email, password, cv, address } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  const query = `
    INSERT INTO teachers (firstName, lastName, dob, email, password, cv, address, photo) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(query, [firstName, lastName, dob, email, password, cv, address, photo], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Teacher registered successfully!' });
  });
});

// Student Registration with Photo Upload
app.post('/api/register/student', upload.single('photo'), (req, res) => {
  const { firstName, lastName, email, password, school, weakSubjects, address } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  const query = `
    INSERT INTO students (firstName, lastName, email, password, school, weakSubjects, address, photo) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(query, [firstName, lastName, email, password, school, weakSubjects, address, photo], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Student registered successfully!' });
  });
});



// Login Route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Check in teachers table
  const teacherQuery = 'SELECT * FROM teachers WHERE email = ?';
  db.query(teacherQuery, [email], (err, teacherResult) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (teacherResult.length > 0) {
      const teacher = teacherResult[0];
      if (teacher.password === password) {
        // Send the photo URL with the response
        const photoUrl = teacher.photo ? `http://localhost:${port}${teacher.photo}` : null;
        return res.status(200).json({
          message: 'Login successful!',
          role: 'teacher',
          photo: photoUrl, // Include the teacher's photo URL
        });
      } else {
        return res.status(401).json({ message: 'Incorrect password' });
      }
    }

    // Check in students table if not found in teachers
    const studentQuery = 'SELECT * FROM students WHERE email = ?';
    db.query(studentQuery, [email], (err, studentResult) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      if (studentResult.length > 0) {
        const student = studentResult[0];
        if (student.password === password) {
          // Send the photo URL with the response
          const photoUrl = student.photo ? `http://localhost:${port}${student.photo}` : null;
          return res.status(200).json({
            message: 'Login successful!',
            role: 'student',
            photo: photoUrl, // Include the student's photo URL
            firstName: student.firstName
          });
        } else {
          return res.status(401).json({ message: 'Incorrect password' });
        }
      }

      // User not found in both tables
      res.status(404).json({ message: 'User not found' });
    });
  });
});

// Start the Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
