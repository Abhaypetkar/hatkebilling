// Import necessary modules
const express = require('express');
const errorHandler = require('./utils/errorHandler');
const app = express();
const PORT = process.env.PORT || 5000; // Choose your desired port

// Sample user data (for demonstration purposes)
const users = [
  { id: 1, username: 'hatkevada', password: 'Abhay@123' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the '
public' directory
app.use(express.static('public'));

// Error handling middleware
app.use(errorHandler);

// Define a route handler for the login page (GET request)
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// Define a route handler for handling login form submission (POST request)
// Define a route handler for handling login form submission (POST request)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the submitted username and password match any user in the database
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    // If authentication succeeds, redirect to the menu page
    res.redirect('/menu');
  } else {
    // If authentication fails, redirect back to the login page with an error message
    res.redirect('/login?error=invalid');
  }
});


// Define a route handler for the menu page
app.get('/menu', (req, res) => {
  res.sendFile(__dirname + '/public/menu.html');
});

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the billing software!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
