// This is the file for Route handler for all dashboard related user interation:

const express = require('express');
const session = require('express-session');
const router = express.Router();
const db = require('../db'); 
const bcrypt = require("bcryptjs");


// Middleware to check if the user is authenticated/logged onto their account
function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}

// Function to get details of a specific event
async function getEventDetails(eventId) {
  try {
    const connection = await db.getConnection();
    const [eventDetailsResult] = await connection.query('SELECT * FROM Events WHERE user_id = ?', [eventId]);
    connection.release();
    return eventDetailsResult.length ? eventDetailsResult : null;
  } catch (error) {
    throw new Error(`Error getting event details: ${error.message}`);
  }
}

// View the details of a specific event
router.get('/event-details/:id', isAuthenticated, async (req, res) => {
  try {
    const eventId = req.params.id;
    const eventDetails = await getEventDetails(eventId);
    
    if (eventDetails) {
      res.json({ eventDetails });
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
module.exports = router;