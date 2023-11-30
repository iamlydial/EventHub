// This is the file for Route handler for the Event booking and use the EVENTS table in db:

const db = require('../db'); 
const express = require('express');
const session = require('express-session');
const router = express.Router();

// function to start events table creation in the database
async function createEventInDatabase(eventData) {
  try {
    const [result] = await db.execute('INSERT INTO events (ID, event_name, event_type, event_decor, date, location, catering_type, status, event_confirmed) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [eventData.ID, eventData.event_name, eventData.event_type, eventData.event_decor, eventData.date, eventData.location, eventData.catering_type, eventData.status, eventData.event_confirmed]);
    return {
      id: result.insertId,
      event_name: eventData.event_name,
      event_type: eventData.event_type,
      event_decor: eventData.event_decor,
      date: eventData.date,
      location: eventData.location,
      catering_type: eventData.catering_type,
      status: eventData.status,
      event_confirmed: eventData.event_confirmed,
    };
  } catch (error) {
    throw error;
  }
}


// Select the type of event
router.get('/choose-event', (req, res) => {
  const eventTypes = ['Bridal Shower', 'Birthday', 'Kids Birthday', 'Baby Shower'];

  res.json({ eventTypes });
});


//Choose Bridal Shower subtype (Bridal Day Party or Bridal Night Party)
router.get('/choose-event/bridal-shower', (req, res) => {
  const bridalShowerSubtypes = ['Bridal Day Party', 'Bridal Night Party'];

  res.json({ bridalShowerSubtypes });
});

// Choose Birthday subtype (Guys Night or Ladies Night)
router.get('/choose-event/birthday', (req, res) => {
  const birthdaySubtypes = ['Guys Night', 'Ladies Night'];

  res.json({ birthdaySubtypes });
});

// Choose Kids Birthday subtype (Girls Birthday Party, Boys Birthday Party, or No Gender Birthday Party)
router.get('/choose-event/kids-birthday', (req, res) => {
  const kidsBirthdaySubtypes = ['Girls Birthday Party', 'Boys Birthday Party', 'No Gender Birthday Party'];

  res.json({ kidsBirthdaySubtypes });
});

// Choose Baby Shower subtype (Boys Baby Shower, Girls Baby Shower, or No Gender Baby Shower)
router.get('/choose-event/baby-shower', (req, res) => {
  const babyShowerSubtypes = ['Boys Baby Shower', 'Girls Baby Shower', 'No Gender Baby Shower'];

  res.json({ babyShowerSubtypes });
});

// Choose the location type (Grand Venue, Bar, Garden, Intimate Venue)
router.get('/choose-location', (req, res) => {
  const locationTypes = ['Grand Venue', 'Bar', 'Garden', 'Intimate Venue'];

  res.json({ locationTypes });
});

// Choose the date and time for the event
router.get('/choose-date-time', (req, res) => {
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
router.get('/choose-catering', (req, res) => {
  const cateringTypes = ['Cold Food', 'Hot Food', 'Soft Drinks', 'Cakes', 'Alcohol and Mocktails', 'Sweets/Pastries'];

  res.json({ cateringTypes });
});


// Process the confirmed booking and display a thank you message
router.post('/confirm-booking', async (req, res) => {
  try {
    const eventData = req.body;

    // Call the createEventInDatabase method
    const createdEvent = await createEventInDatabase(eventData);

    res.status(201).json({ message: 'YAY! Thank you for booking! Your event has been confirmed.', event: createdEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



module.exports = router;