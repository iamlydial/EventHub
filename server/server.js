//This is the main backend file

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const app = express();
const { pool } = require("./db");
const bcrypt = require("bcryptjs");

const userController = require("./controllers/userController");
const bookingController = require("./controllers/bookingController");
const authController = require("./controllers/authController");
const confirmationController = require("./controllers/confirmationController");
const homeController = require("./controllers/homeController");
const dashboardController = require("./controllers/dashboardController");

const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
const router = express.Router();

app.use(cors());

// Middleware configuration from the Express application. It allows us to parse incoming JSON payload.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use express-session middleware
app.use(
  session({
    secret: "123456789",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Controllers routes for all our controller/router files:
app.use("/users", userController);
app.use("/events", bookingController);
app.use("/auth", authController);
app.use("/confirmation", confirmationController);
app.use("/home", homeController);
app.use("/dashboard", dashboardController);

// Testing endpoint to check the database connection:
app.get("/testdbconnection", async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.query("SELECT 1");
    connection.release(); // Release the connection back to the pool

    res.json({ message: "Database connection successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database connection error" });
  }
});

// Route for retrieving users data from the database
app.get("/users", async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.query("SELECT * FROM users");
    res.json({ data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Route for retrieving events data from the database
app.get("/events", async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.query("SELECT * FROM events");
    res.json({ data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// User signup route
app.post("/auth/signup", async (req, res) => {
  try {
    const { name, email, telephone_number, events } = req.body;

    // Use the retrieved data to perform the INSERT operation
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      "INSERT INTO Users (name, email, telephone_number, events) VALUES (?, ?, ?, ?)",
      [name, email, telephone_number, events]
    );
    connection.release(); // Release the connection back to the pool

    res.json({ message: "User created successfully", userId: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// signup get

// User signup GET route to retrieve user information by ID
app.get("/auth/signup/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    // Fetch user data based on the provided ID from the request parameters
    const connection = await pool.getConnection();
    const [user] = await connection.query("SELECT * FROM Users WHERE id = ?", [
      userId,
    ]);
    connection.release(); // Release the connection back to the pool

    if (user.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User retrieved successfully", user: user[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// User login route
app.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const connection = await pool.getConnection();
    const [user] = await connection.query(
      "SELECT * FROM Users WHERE email = ?",
      [email]
    );
    connection.release();

    if (user.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const storedPassword = user[0].password; // Assuming the password field is stored in the 'password' column
    if (typeof password === "string" && typeof storedPassword === "string") {
      const isPasswordValid = await bcrypt.compare(password, storedPassword);
      if (isPasswordValid) {
        // Authentication successful
        res.json({ message: "Login successful" });
      } else {
        // Invalid credentials
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      // Invalid password format or storedPassword retrieval issue
      res.status(500).json({ message: "Internal Server Error" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// User logout route
app.post("/auth/logout", async (req, res) => {
  try {
    // optional logout checks

    res.json({ message: "Logout successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Route for creating events using the bookingController
app.post("/events/create", async (req, res) => {
  try {
    const jsonData = req.body;

    // Call the createEvent method from bookingController
    const createdEvent = await bookingController.createEvent(jsonData);

    res.status(201).json({
      message: "Your Event has been created successfully",
      event: createdEvent,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, this is the EventHub backend!');
});

// BookingController.js file endpoints: 

// Get all EventHub available event types
app.get('/event-types',  (req, res) => {
  const eventTypes = ['Bridal Shower', 'Birthday', 'Kids Birthday', 'Baby Shower'];
  res.json({ eventTypes });
});

// Select the type of event and create an event and add to database
app.post('/create-event',  async (req, res) => {
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
app.get('/choose-location',  (req, res) => {
  const locationTypes = ['Grand Venue', 'Bar', 'Garden', 'Intimate Venue'];

  res.json({ locationTypes });
});

// Update the endpoint to handle the selected location
app.post('/choose-location', async (req, res) => {
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

// Choose the date and time for the event
app.get('/choose-date-time',  (req, res) => {
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

app.post('/choose-catering', (req, res) => {
  try {
    // Extract data from the request body
    const { catering_types } = req.body;

    // Process the catering_types data as needed
    console.log('Catering types received:', catering_types);

    // Respond with success
    res.status(200).json({ message: 'Catering types received successfully' });
  } catch (error) {
    console.error('Error handling choose-catering request:', error);

    // Respond with an error
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add this route handler for GET requests to "/choose-catering"
app.get('/choose-catering', (req, res) => {
  
  res.status(200).json({ message: 'GET request to /choose-catering received successfully' });
});

// Get available theme options
app.get('/theme-options', async (req, res) => {
  try {
    const themeOptions = ['Elegant', 'Playful', 'Boho Chic', 'Casual'];
    res.status(200).json({ themeOptions });
  } catch (error) {
    console.error('Error getting theme options:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Update the event's chosen theme
app.post('/choose-theme', async (req, res) => {
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



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = router;
