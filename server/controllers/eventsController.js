// This is the Route handler for Users creating events on the website: 

const mysql = require('mysql'); 

async function createEvent(eventData) {
  try {
    // Insert data into Events table:
    const [result] = await db.execute('INSERT INTO events (ID, event name, event theme, date, to do list, location, catering type, dress code, status, event confirmed) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [eventData.ID, eventData.eventtheme,  eventData.name, eventData.date, eventData.todolist, eventData.location, eventData.cateringtype, eventData.dresscode, eventData.status, eventData.eventconfirmed]);

    // The result object will have a 'insertId' property with the ID of the newly created event if database operation is successful
    const createdEvent = {
      id: result.insertId,
      name: eventData.name,
      date: eventData.date,
      location: eventData.location,
    };

    return createdEvent;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createEvent,
};

// We are assuming if there is a successful insertion into eventhub database, a JavaScript object is created with details about the new event.
