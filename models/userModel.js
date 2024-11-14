// models/userModel.js
const db = require('../config/db');

const User = {
  // Create a new user
  create: (name, email, age, callback) => {
    const sql = 'INSERT INTO users (name, email, age) VALUES (?, ?, ?)';
    db.query(sql, [name, email, age], (err, result) => {
      if (err) return callback(err);
      callback(null, { id: result.insertId, name, email, age });
    });
  },

  // Get all users
  getAll: (callback) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, callback);
  },

  // Get a user by ID
  getById: (id, callback) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]); // `results[0]` because it's a single user
    });
  },

  // Update a user by ID
  update: (id, name, email, age, callback) => {
    const sql = 'UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?';
    db.query(sql, [name, email, age, id], callback);
  },

  // Delete a user by ID
  delete: (id, callback) => {
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], callback);
  }
};

module.exports = User;
