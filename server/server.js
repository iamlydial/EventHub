//This is our main Backend file.

const express = require("express");
const app = express();
const mysql = require('mysql')
const userController = require('./controllers/userController');
const eventsController = require('./controllers/eventsController'); 
const authController = require('./controllers/authController');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

// This is middleware configuration from the Express application. It allows us to parse incoming JSON payload.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Here are the controllers routes: 
app.use('/users', userController);
app.use('/events', eventsController);
app.use('/auth', authController);

// Here is a route for the userController file and inserts users data into users table in database: 
app.get('/users', async (req, res) => {
  try {
    const [rows, fields] = await db.execute('SELECT * FROM users');
    res.json({ data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Here is the route for the eventController file:
app.post('/events/create', (req, res) => {
 
  const jsonData = req.body;

  const formData = req.body;

  // This uses the method createEvent in the eventController file:
  eventsController.createEvent(jsonData)
    .then((createdEvent) => {
      res.status(201).json({ message: 'Your Event has been created successfully', event: createdEvent });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


