const sqlite3 = require('sqlite3').verbose();

// Initialize SQLite database
const db = new sqlite3.Database('./users.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) return console.error(err.message);
    console.log('Connected to the SQLite database.');
});

// Create a users table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
)`);

const bcrypt = require('bcryptjs');

// Function to insert a user with a hardcoded username and password
function insertUser(username, password) {
    // Hash the password before storing
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return console.error('Error hashing password:', err);

        // Insert the user into the database
        db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, hash], function(err) {
            if (err) {
                // Handle error (e.g., if username is not unique)
                return console.error('Error inserting user:', err.message);
            }
            console.log(`A new user was added with ID ${this.lastID}`);
        });
    });
}

// Call the function to insert a hardcoded user
insertUser('gabriel', 'gabriel');


db.close();