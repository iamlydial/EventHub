// This is the file for Route handler for Users authentication on the website:

const express = require("express");
const session = require("express-session");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");

//This is the registration router:

router.post("/register", async (req, res) => {
  try {
    const { username, password, email, phone } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Get a connection from the pool
    const connection = await db.getConnection();

    // Insert a new user with the hashed password
    const [result] = await connection.execute(
      "INSERT INTO users (username, password, email, phone_number) VALUES (?, ?, ?, ?)",
      [username, hashedPassword, email, phone]
    );

    // Release the connection back to the pool
    connection.release();

    res.json({
      message: "Your User registration has been completed successfully",
      userId: result.insertId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// This is the user login router:

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Get a connection from the pool
    const connection = await db.getConnection();

    // check if the user exists
    const [userResult] = await connection.execute(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    // Release the connection back to the pool
    connection.release();

    if (userResult.length > 0) {
      // Compare password with the provided user password
      const isPasswordValid = await bcrypt.compare(
        password,
        userResult[0].password
      );

      if (isPasswordValid) {
        res.json({ message: "Login successful", user: userResult[0] });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// This is the Log out a user router:

router.post("/logout", (req, res) => {
  // Clear the user session (if using express-session)
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error during logout" });
    } else {
      res.json({ message: "Logout successful" });
    }
  });
});



// All routers on this file will use the USERS tabel in our Event hub database.
// If credentials are invalid, it returns a 401 status with Invalid message for user.

module.exports = router;
