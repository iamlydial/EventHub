//This is the main backend file

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const app = express();
const { pool } = require("./db");
const bcrypt = require("bcryptjs");

const bookingController = require("./controllers/bookingController");
const authController = require("./controllers/authController");
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
  })
);

// isAuthenticated middleware
function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  } else {
    res.redirect("/login");
  }
}

// Controllers routes for all our controller/router files:

app.use("/", bookingController);
app.use("/auth", authController);
app.use("/dashboard", dashboardController);

// Testing endpoint to check the database connection:
app.get("/testdbconnection", async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.query("SELECT 1");
    connection.release();

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

app.get("/occasion-details", isAuthenticated, async (req, res) => {
  try {
    const userId = req.session.user.user_id;

    const eventDetails = await getEventDetailsFromDatabase(userId);

    res.status(200).json({ eventDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// User signup route
app.post("/auth/signup", async (req, res) => {
  try {
    const { name, email, telephone_number, events } = req.body;

    const connection = await pool.getConnection();
    const [result] = await connection.query(
      "INSERT INTO Users (name, email, telephone_number, events) VALUES (?, ?, ?, ?)",
      [name, email, telephone_number, events]
    );
    connection.release();

    res.json({ message: "User created successfully", userId: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// User signup GET route to retrieve user information by ID
app.get("/auth/signup/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const connection = await pool.getConnection();
    const [user] = await connection.query("SELECT * FROM Users WHERE id = ?", [
      userId,
    ]);
    connection.release();

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

    const storedPassword = user[0].password;
    if (typeof password === "string" && typeof storedPassword === "string") {
      const isPasswordValid = await bcrypt.compare(password, storedPassword);
      if (isPasswordValid) {
        res.json({ message: "Login successful" });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// User logout route
router.post("/auth/logout", (req, res) => {
  try {
    if (req.session) {
      // Destroy the session
      req.session.destroy((err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: "Error during logout" });
        } else {
          res.clearCookie("session-id"); // Optionally clear the session cookie
          res.json({ message: "Logout successful" });
        }
      });
    } else {
      res.json({ message: "No session found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// the root path
app.get("/", (req, res) => {
  res.send("Hello, this is the EventHub backend!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = router;
