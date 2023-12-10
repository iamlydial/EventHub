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

// isAuthenticated function (needed before we can use it)
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); 
  }
  res.status(401).json({ message: 'Unauthorized' });
};


// Get all EventHub available event types
router.get('/event-types', isAuthenticated, (req, res) => {
  const eventTypes = ['Bridal Shower', 'Birthday', 'Kids Birthday', 'Baby Shower'];
  res.json({ eventTypes });
});

// Select the type of event and create an event and add to database
router.post('/create-event', isAuthenticated, async (req, res) => {
  try {
    const userId = req.session.user.user_id;
    const eventData = req.body;

    // Call the createEventInDatabase method with the user ID
    const createdEvent = await createEventInDatabase(userId, eventData);

    res.status(201).json({ message: 'Event created successfully', event: createdEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


// Choose the location type (Grand Venue, Bar, Garden, Intimate Venue)
router.get('/choose-location', isAuthenticated, (req, res) => {
  const locationTypes = ['Grand Venue', 'Bar', 'Garden', 'Intimate Venue'];

  res.json({ locationTypes });
});

// Update the endpoint to handle the selected location
router.post('/choose-location', isAuthenticated, async (req, res) => {
  try {
    const userId = req.session.user.user_id;
    const selectedLocation = req.body.location_type;

    
    const updateQuery = 'UPDATE Events SET location = ? WHERE user_id = ?';
    await db.execute(updateQuery, [selectedLocation, userId]);

    res.status(200).json({ message: 'Location selected successfully' });
  } catch (error) {
    console.error('Error choosing location:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});




// DATE AND TIME
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

// Backend route for choosing date and time
router.post('/choose-date', isAuthenticated, async (req, res) => {
  try {
    const userId = req.session.user.user_id;
    const { date, time, duration } = req.body;

    
    const updateQuery = 'UPDATE Events SET event_date = ?, event_time = ?, event_duration = ? WHERE user_id = ? AND event_status = "PLANNING IN PROGRESS"';
    await db.execute(updateQuery, [date, time, duration, userId]);

    res.status(200).json({ message: 'Date and time selected successfully' });
  } catch (error) {
    console.error('Error choosing date and time:', error);
    res.status(500).json({ message: `Internal Server Error: ${error.message || "Unknown error"}` });
  }
});



// Choose the type of catering (Cold Food, Hot Food, Soft Drinks, Cakes, Alcohol and Mocktails, Sweets/Pastries)
router.get('/choose-catering', isAuthenticated, (req, res) => {
  const cateringTypes = ['Cold Food', 'Hot Food', 'Soft Drinks', 'Cakes', 'Alcohol and Mocktails', 'Sweets/Pastries'];

  res.json({ cateringTypes });
});


// Update the endpoint to handle the selected catering types
router.post('/choose-catering', isAuthenticated, async (req, res) => {
  try {
    const userId = req.session.user.user_id;
    const selectedCateringTypes = req.body.catering_types;

    if (!Array.isArray(selectedCateringTypes) || selectedCateringTypes.length !== 3) {
      return res.status(400).json({ message: 'Please provide an array of 3 catering types.' });
    }

    
    const updateQuery = 'UPDATE Events SET catering_type = ? WHERE user_id = ? AND event_status = "PLANNING IN PROGRESS"';
    await db.execute(updateQuery, [JSON.stringify(selectedCateringTypes), userId]);

    res.status(200).json({ message: 'Catering types selected successfully' });
  } catch (error) {
    console.error('Error choosing catering types:', error);
    res.status(500).json({ message: `Internal Server Error: ${error.message || "Unknown error"}` });
  }
});


// Get available theme options
router.get('/theme-options', async (req, res) => {
  try {
    
    const themeOptions = ['Elegant', 'Playful', 'Boho Chic', 'Casual'];

    res.status(200).json({ themeOptions });
  } catch (error) {
    console.error('Error getting theme options:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Update the event's chosen theme
router.post('/choose-theme', isAuthenticated, async (req, res) => {
  try {
    const userId = req.session.user.user_id;
    const selectedTheme = req.body.theme;

    
    const updateQuery = 'UPDATE Events SET event_theme = ? WHERE user_id = ?';
    await db.execute(updateQuery, [selectedTheme, userId]);

    res.status(200).json({ message: 'Theme selected successfully' });
  } catch (error) {
    console.error('Error choosing theme:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
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

// Fetch event details for the occasion confirmed page
router.get('/occasion-details', isAuthenticated, async (req, res) => {
  try {
    // Get the user ID from the session
    const userId = req.session.user.user_id;

    // Call the getEventDetailsFromDatabase method with the user ID
    const eventDetails = await getEventDetailsFromDatabase(userId);

    res.status(200).json({ eventDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



module.exports = router;