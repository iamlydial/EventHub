const express = require("express");
const mysql = require('mysql2');
const router = express.Router();


// Create a connection pool
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456789',
    database: 'eventhub',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});



// Export the pool to be used in other parts of the eventhub project
module.exports = pool.promise();
module.exports = router;