//This is the file responsible for handling user registration on website:

const express = require('express');
const router = express.Router();
const mysql = require('mysql'); 

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Get a connection from the pool
    const connection = await db.getConnection();

    // This is the query to insert a new user
    const [result] = await connection.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);

    // Release the connection back to the pool
    connection.release();

    res.json({ message: 'Your User registration has been completed successfully', userId: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;