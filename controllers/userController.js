const User = require('../models/userModel');

exports.createUser = (req, res) => {
  const { name, email, age } = req.body;
  User.create(name, email, age, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(result);
  });
};

exports.getAllUsers = (req, res) => {
  User.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Get a single user by ID
exports.getUserById = (req, res) => {
    const { id } = req.params;
    User.getById(id, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!result) return res.status(404).json({ message: 'User not found' });
      res.json(result);
    });
  };
  
  // Update a user by ID
  exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    User.update(id, name, email, age, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
      res.json({ message: 'User updated successfully' });
    });
  };
  
  // Delete a user by ID
  exports.deleteUser = (req, res) => {
    const { id } = req.params;
    User.delete(id, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
      res.json({ message: 'User deleted successfully' });
    });
  };
