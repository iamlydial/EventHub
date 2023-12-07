// This is the file for Route handler for all dashboard related user interation:

const express = require('express');
const session = require('express-session');
const router = express.Router();
const db = require('../db'); 
const bcrypt = require("bcryptjs");


// Function to get events for a user 
async function getEventsForUser(userId) {
    try {
      const connection = await db.getConnection();
      const [eventsResult] = await connection.execute('SELECT * FROM Events WHERE user_id = ?', [userId]);
      connection.release();
      return eventsResult;
    } catch (error) {
      throw new Error(`Error getting events for user: ${error.message}`);
    }
  }
  
 // View the events currently booked by the user
router.get('/your-events', async (req, res) => {
    try {
      const userId = req.body.user.id; 
      const events = await getEventsForUser(userId);
      res.json({ events });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  // View and manage the user's dashboard
router.get('/dashboard', async (req, res) => {
    try {
      const userId = req.body.user.id; 
      res.json({ message: 'User dashboard' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

module.exports = router;