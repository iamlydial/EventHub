// This is the file for Route handler for the Event booking and use the EVENTS table in db:

const db = require('../db'); 
const express = require('express');
const session = require('express-session');
const router = express.Router();
const bcrypt = require("bcryptjs");

// Function to start events table creation in the database
async function createEventInDatabase(userId, eventData) {
  try {
    // Insert event data into the database, including the user_id
    const [result] = await db.execute(
      'INSERT INTO Events (user_id, event_name, event_theme, event_date, event_time, location, catering_type, decoration_style, event_status, event_confirmed, location_new) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [userId, eventData.event_name, eventData.event_theme, eventData.event_date, eventData.event_time, eventData.location, eventData.catering_type, eventData.decoration_style, 'PLANNING IN PROGRESS', 'NOT CONFIRMED', eventData.location_new]
    );

    // Fetch the created event from the database
    const [createdEvent] = await db.execute('SELECT * FROM Events WHERE ID = ?', [result.insertId]);

    return {
      id: createdEvent[0].ID,
      user_id: createdEvent[0].user_id,
      event_name: createdEvent[0].event_name,
      event_theme: createdEvent[0].event_theme,
      event_date: createdEvent[0].event_date,
      event_time: createdEvent[0].event_time,
      location: createdEvent[0].location,
      catering_type: createdEvent[0].catering_type,
      decoration_style: createdEvent[0].decoration_style,
      event_status: createdEvent[0].event_status,
      event_confirmed: createdEvent[0].event_confirmed,
      location_new: createdEvent[0].location_new,
    };
  } catch (error) {
    throw error;
  }
}


// Select the type of event
router.get('/choose-event', isAuthenticated, (req, res) => {
  const eventTypes = ['Bridal Shower', 'Birthday', 'Kids Birthday', 'Baby Shower'];

  res.json({ eventTypes });
});


// Choose the location type (Grand Venue, Bar, Garden, Intimate Venue)
router.get('/choose-location', isAuthenticated, (req, res) => {
  const locationTypes = ['Grand Venue', 'Bar', 'Garden', 'Intimate Venue'];

  res.json({ locationTypes });
});


// Choose the date and time for the event
router.get('/choose-date-time', isAuthenticated, (req, res) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();


  // Generate date options for the entire year
  const dateOptions = [];
  for (let month = 0; month < 12; month++) {
    for (let day = 1; day <= new Date(currentYear, month + 1, 0).getDate(); day++) {
      const formattedDate = `${currentYear}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      dateOptions.push(formattedDate);
    }
  }

  // Generate time options for each hour in a 24-hour format
  const timeOptions = Array.from({ length: 24 }, (_, index) => `${index.toString().padStart(2, '0')}:00`);

  res.json({ dateOptions, timeOptions });
});


// Choose the type of catering (Cold Food, Hot Food, Soft Drinks, Cakes, Alcohol and Mocktails, Sweets/Pastries)
router.get('/choose-catering', isAuthenticated, (req, res) => {
  const cateringTypes = ['Cold Food', 'Hot Food', 'Soft Drinks', 'Cakes', 'Alcohol and Mocktails', 'Sweets/Pastries'];

  res.json({ cateringTypes });
});


// Process the confirmed booking and display a thank you message
router.post('/confirm-booking', isAuthenticated, async (req, res) => {
  try {
    const eventData = req.body;
    // Get the user ID from the session
    const userId = req.session.user.user_id;

    // Call the createEventInDatabase method with the user ID
    const createdEvent = await createEventInDatabase(userId, eventData);

    res.status(201).json({ message: 'YAY! Thank you for booking! Your event has been confirmed.', event: createdEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});




module.exports = router;