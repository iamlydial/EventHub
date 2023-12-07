// This is the file for Route handler for event confirmation details:

const express = require('express');
const session = require('express-session');
const router = express.Router();
const db = require('../db'); 
const bcrypt = require("bcryptjs");

// Function to get confirmation details for a booked event
async function getConfirmationDetails(eventId) {
    try {
      const connection = await db.getConnection();
      const [confirmationResult] = await connection.execute('SELECT * FROM Events WHERE ID = ?', [eventId]);
      connection.release();
      return confirmationResult[0];
    } catch (error) {
      throw new Error(`Error getting confirmation details: ${error.message}`);
    }
  }
  
  // Display confirmation details for a booked event
  router.get('/confirmation/:eventId', async (req, res) => {
    try {
      const eventId = req.params.eventId;
      const confirmationDetails = await getConfirmationDetails(eventId);
      res.json({ confirmationDetails });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });




module.exports = router;