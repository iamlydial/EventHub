//This is the file for Route handler for user interation on homepage of Event Hub: 

const express = require('express');
const session = require('express-session');
const router = express.Router();
const db = require('../db'); 
const bcrypt = require("bcryptjs");

// Homepage showing previous events
router.get('/', async (req, res) => {
    try {
      // Fetch previous events from the database
      const connection = await db.getConnection();
      // Fetches events from dtes earlier than current date
      const [eventsResult] = await connection.execute('SELECT * FROM Events WHERE event_date < CURDATE()');
      connection.release();
  
      res.json({ message: 'Homepage showing previous events', events: eventsResult });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
// Homepage to create a new event
router.get('/create-event', (req, res) => {
    // Redirect the user to the choose-event route in bookingController
    res.redirect('/choose-event');
  });



module.exports = router;