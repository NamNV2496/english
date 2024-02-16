const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000; // or any other port you prefer

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to handle adding flashcards
app.post('/add_flashcard', (req, res) => {
    const quizData = req.body.quizData;
    // Here you can append the data to your Excel file
    // For simplicity, I'm just logging the data to the console
    console.log('Received flashcard data:', quizData);

    // Send response indicating success
    res.sendStatus(200);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
