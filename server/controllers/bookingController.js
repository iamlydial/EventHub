// This is the file for Route handler for the Event booking and use the EVENTS table in db:

const db = require('../db');
const cors = require("cors");
const express = require('express');
const session = require('express-session');
const router = express.Router();
const bcrypt = require("bcryptjs");

// Function to start events table creation in the database
async function createEventInDatabase(userId, eventData) {
  try {
    // Insert event data into the database, including the user_id
    const connection = await db.getConnection();

    
    const [result] = await connection.query(
      'INSERT INTO Events (user_id, event_name, event_theme, event_date, event_time, event_duration, location, catering_type, event_confirmed) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [userId, eventData.event_name, eventData.event_theme, eventData.event_date, eventData.event_time, eventData.event_duration, eventData.location, eventData.catering_type, 'NOT CONFIRMED']
    );

    // Fetch the created event from the database
    const [createdEvent] = await connection.query('SELECT * FROM Events WHERE ID = ?', [result.insertId]);

    return {
      id: createdEvent[0].ID,
      user_id: createdEvent[0].user_id,
      event_name: createdEvent[0].event_name,
      event_theme: createdEvent[0].event_theme,
      event_date: createdEvent[0].event_date,
      event_time: createdEvent[0].event_time,
      event_duration: createdEvent[0].event_duration,
      location: createdEvent[0].location,
      catering_type: createdEvent[0].catering_type,
      event_confirmed: createdEvent[0].event_confirmed,
    };
  } catch (error) {
    throw error;
  }
}

// Middleware to check if the user is authenticated
function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}


// createevent.tsx routers
router.get('/event-types',  (req, res) => {
  const eventTypes = ['Bridal Shower', 'Birthday', 'Kids Birthday', 'Baby Shower'];
  res.json({ eventTypes });
});


router.post('/create-event',  async (req, res) => {
  try {
    const userId = req.session.user.user_id;
    const eventData = req.body;

    const createdEvent = await createEventInDatabase(userId, eventData);
    req.session.event_id = createdEvent.id;

    res.status(201).json({ message: 'Event created successfully', event_id: createdEvent.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Location.tsx routers:
router.get('/location-options', (req, res) => {
  const locationTypes = ['Grand Venue', 'Bar', 'Garden', 'Intimate Venue'];

  res.json({ locationTypes });
});


router.post('/choose-location',   async (req, res) => {
  try {
    const eventID = req.session.event_id;
    console.log(eventID);
    const selectedLocation = req.body.location_type;
    
    const updateQuery = 'UPDATE Events SET location = ? WHERE ID = ?';
    const connection = await db.getConnection();
    await connection.query(updateQuery, [selectedLocation, eventID]);

    res.status(200).json({ message: 'Location selected successfully' });
  } catch (error) {
    console.error('Error choosing location:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});




// date.tsx router:
router.get('/choose-date-time', isAuthenticated,  (req, res) => {
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


router.post('/choose-date', isAuthenticated,  async (req, res) => {
  try {
    const eventID = req.session.event_id;
    console.log(eventID);
    const { date, time, duration } = req.body;

    const connection = await db.getConnection();
    const updateQuery = 'UPDATE Events SET event_date = ?, event_time = ?, event_duration = ?, event_confirmed = ? WHERE ID = ?';
    await connection.query(updateQuery, [date, time, duration, "CONFIRMED", eventID]);

    res.status(200).json({ message: 'Date and time selected successfully' });
  } catch (error) {
    console.error('Error choosing date and time:', error);
    res.status(500).json({ message: `Internal Server Error: ${error.message || "Unknown error"}` });
  }
});



// Catering.tsx routers:
router.get('/catering-options', isAuthenticated,  (req, res) => {
  const cateringTypes = ['Cold Food', 'Hot Food', 'Soft Drinks', 'Cakes', 'Alcohol and Mocktails', 'Sweets/Pastries'];

  res.json({ cateringTypes });
});



router.post('/choose-catering', isAuthenticated,  async (req, res) => {
  try {
    const eventID = req.session.event_id;
    console.log(eventID);
    const selectedCateringTypes = req.body.catering_types;

    if (!Array.isArray(selectedCateringTypes) || selectedCateringTypes.length !== 3) {
      return res.status(400).json({ message: 'Please provide an array of 3 catering types.' });
    }

    const connection = await db.getConnection();
    const updateQuery = 'UPDATE Events SET catering_type = ? WHERE ID = ?';
    await connection.query(updateQuery, [selectedCateringTypes.join(", "), eventID]);

    res.status(200).json({ message: 'Catering types selected successfully' });
  } catch (error) {
    console.error('Error choosing catering types:', error);
    res.status(500).json({ message: `Internal Server Error: ${error.message || "Unknown error"}` });
  }
});


// theme.tsx routers:
router.get('/theme-options',isAuthenticated,  async (req, res) => {
  try {
    
    const themeOptions = ['Elegant', 'Playful', 'Boho Chic', 'Casual'];

    res.status(200).json({ themeOptions });
  } catch (error) {
    console.error('Error getting theme options:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


router.post('/choose-theme', isAuthenticated,  async (req, res) => {
  try {
    const eventID = req.session.event_id;
    console.log(eventID);
    const selectedTheme = req.body.theme;

    const connection = await db.getConnection();
    const updateQuery = 'UPDATE Events SET event_theme = ? WHERE ID = ?';
    await connection.query(updateQuery, [selectedTheme, eventID]);

    res.status(200).json({ message: 'Theme selected successfully' });
  } catch (error) {
    console.error('Error choosing theme:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;