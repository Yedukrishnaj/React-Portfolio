const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Your MySQL username
  password: '', // Your MySQL password
  database: 'contact_form', // Your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

// API endpoint to handle contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const query = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error saving the data' });
    } else {
      res.status(200).json({ message: 'Message sent successfully!' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
