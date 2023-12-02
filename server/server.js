//This is the main backend file 

const express = require("express");
const session = require('express-session');
const app = express();
const db = require('./db'); 
const userController = require('./controllers/userController');
const bookingController = require('./controllers/bookingController');
const authController = require('./controllers/authController');
const confirmationController = require('./controllers/confirmationController');
const helpController = require('./controllers/helpController');
const homeController = require('./controllers/homeController');
const dashboardController = require('./controllers/dashboardController');



const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const router = express.Router();

// Middleware configuration from the Express application. It allows us to parse incoming JSON payload.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use express-session middleware
  app.use(session({
  secret: '123456789',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, 
}));

// Controllers routes for all our controller/router files:
app.use('/users', userController);
app.use('/events', bookingController);
app.use('/auth', authController);
app.use('/confirmation', confirmationController);
app.use('/help', helpController);
app.use('/home', homeController);
app.use('/dashboard', dashboardController);


// Testing endpoint to check the database connection:
app.get('/testdbconnection', async (req, res) => {
  try {
    const [rows, fields] = await db.execute('SELECT 1');
    res.json({ message: 'Database connection successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Database connection error' });
  }
});


// Route for retrieving users data from the database
app.get('/users', async (req, res) => {
  try {
    const [rows, fields] = await db.execute('SELECT * FROM users');
    res.json({ data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route for creating events using the eventsController
app.post('/events/create', async (req, res) => {
  try {
    const jsonData = req.body;

    // Call the createEvent method from bookingController
    const createdEvent = await bookingController.createEvent(jsonData);

    res.status(201).json({ message: 'Your Event has been created successfully', event: createdEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = router;