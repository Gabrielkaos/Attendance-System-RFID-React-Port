// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize SQLite database
const db = new sqlite3.Database('./users.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) return console.error(err.message);
    console.log('Connected to the SQLite database.');
});

// Endpoint to authenticate user
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, user) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (!user) return res.status(401).json({ message: 'Invalid username or password' });

        // Compare passwords
        bcrypt.compare(password, user.password, (err, match) => {
            if (err) return res.status(500).json({ error: 'Error comparing passwords' });
            if (!match) return res.status(401).json({ message: 'Invalid username or password' });
            res.json({ message: 'Login successful' });
        });
    });
});

// Endpoint to register a new user
app.post('/api/register', (req, res) => {
    const { username, password , confirm_password} = req.body;

    // Check if both fields are provided
    if (!username || !password || !confirm_password) {
        return res.status(400).json({ message: 'Please fill all of the fields' });
    }
    if (!(password==confirm_password)) {
        return res.status(400).json({ message: 'Wrong password confirmation' });
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).json({ error: 'Error hashing password' });

        // Insert the user into the database
        db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, hash], function(err) {
            if (err) {
                if (err.message.includes("UNIQUE constraint failed")) {
                    return res.status(409).json({ message: 'Username already exists' });
                }
                return res.status(500).json({ error: 'Database error' });
            }
            res.status(201).json({ message: 'User registered successfully' });
        });
    });
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
