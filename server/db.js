// This db.js handles the database connection set up:
const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'test',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Export the pool to be used in other parts of the eventhub project
module.exports = pool.promise();
