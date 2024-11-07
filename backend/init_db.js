const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./users.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) return console.error(err.message);
    console.log('Connected to the SQLite database.');
});

db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
)`);

const bcrypt = require('bcryptjs');

function insertUser(username, password) {
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return console.error('Error hashing password:', err);

        db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, hash], function(err) {
            if (err) {
                return console.error('Error inserting user:', err.message);
            }
            console.log(`A new user was added with ID ${this.lastID}`);
        });
    });
}

insertUser('gabriel', 'gabriel');


db.close();