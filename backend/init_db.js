const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) return console.error(err.message);
    console.log('Connected to the SQLite database.');
});

//users
// db.run(`CREATE TABLE IF NOT EXISTS users (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     username TEXT UNIQUE,
//     password TEXT
// )`);

// //token
// db.run(`CREATE TABLE IF NOT EXISTS tokens (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     token TEXT UNIQUE
// )`);

// //device
// db.run(`CREATE TABLE IF NOT EXISTS devices (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT UNIQUE,
//     token_id INTEGER,
//     FOREIGN KEY(token_id) REFERENCES tokens(id)
// )`);

// //events
// db.run(`CREATE TABLE IF NOT EXISTS events (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT,
//     instructor TEXT,
//     device_id INTEGER,
//     FOREIGN KEY(device_id) REFERENCES devices(id)
// )`);

// //day
// db.run(`CREATE TABLE IF NOT EXISTS days (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     date DATE,
//     event_id INTEGER,
//     FOREIGN KEY(event_id) REFERENCES events(id)
// )`);

// //students
// db.run(`CREATE TABLE IF NOT EXISTS students (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     card_uid TEXT,
//     last_name TEXT,
//     middle_name TEXT,
//     first_name TEXT,
//     student_id TEXT
// )`);

// //attendances
// db.run(`CREATE TABLE IF NOT EXISTS attendances (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     day_id INTEGER,
//     event_id INTEGER,
//     student_id INTEGER,
//     date_attended TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     FOREIGN KEY(day_id) REFERENCES days(id),
//     FOREIGN KEY(event_id) REFERENCES events(id),
//     FOREIGN KEY(student_id) REFERENCES students(id)
// )`);


// const bcrypt = require('bcryptjs');

// function insertUser(username, password) {
//     bcrypt.hash(password, 10, (err, hash) => {
//         if (err) return console.error('Error hashing password:', err);

//         db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, hash], function(err) {
//             if (err) {
//                 return console.error('Error inserting user:', err.message);
//             }
//             console.log(`A new user was added with ID ${this.lastID}`);
//         });
//     });
// }

// insertUser('gabriel', 'gabriel');


db.close();