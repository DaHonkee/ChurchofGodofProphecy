// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();
const port = 3000; // Specify the port number you want to use

// Define a route to serve an HTML page
app.get('/', (req, res) => {
    // Send the HTML page located in the "views" directory
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
