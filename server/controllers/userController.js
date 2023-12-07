//
const express = require('express');
const session = require('express-session');
const router = express.Router();
const db = require('../db'); 
const bcrypt = require("bcryptjs");

// Function to retrieve users' data from the database
async function getUsersData(req, res) {
  try {
    const connection = await db.getConnection();
    const [rows, fields] = await connection.execute('SELECT * FROM Users');
    connection.release();
    res.json({ data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

// Function to get user profile settings
async function getUserProfile(userId) {
  try {
    const connection = await db.getConnection();
    const [userProfileResult] = await connection.execute('SELECT * FROM Users WHERE user_id = ?', [userId]);
    connection.release();
    return userProfileResult[0];
  } catch (error) {
    throw new Error(`Error getting user profile: ${error.message}`);
  }
}

// Function to update user profile settings
async function updateUserProfile(userId, updatedProfile) {
  try {
    const connection = await db.getConnection();
    await connection.execute('UPDATE Users SET name = ?, email = ?, telephone_number = ? WHERE user_id = ?', [
      updatedProfile.name,
      updatedProfile.email,
      updatedProfile.telephone_number,
      userId,
    ]);
    connection.release();
  } catch (error) {
    throw new Error(`Error updating user profile: ${error.message}`);
  }
}

// View and update user profile settings
router.get('/profile-settings', async (req, res) => {
  try {
    const userId = req.body.user.id; 
    const userProfile = await getUserProfile(userId);
    res.json({ userProfile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Update user profile settings
router.post('/profile-settings', async (req, res) => {
  try {
    const userId = req.body.user.id; 
    const updatedProfile = req.body.updatedProfile; 
    await updateUserProfile(userId, updatedProfile);
    res.json({ message: 'User profile updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router;
