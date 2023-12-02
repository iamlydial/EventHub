CREATE DATABASE IF NOT EXISTS eventhub;
USE eventhub;

-- create events table

CREATE TABLE IF NOT EXISTS Events (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(255) NOT NULL,
    event_theme ENUM('Birthday for Her', 'Birthday for Him', 'Birthday for Little Her', 'Birthday for Little Him', 'Baby Shower', 'Bridal Party'),
    event_date DATE,
    event_time TIME,
    location VARCHAR(255),
    catering_type ENUM('Cold Food', 'Hot Food', 'Soft Drinks', 'Alcohol & Mocktails', 'Cakes', 'Sweet/Pastries'),
    decoration_style ENUM('Elegant', 'Playful',' Boho Chic', 'Casual'),
    event_status ENUM('PLANNING IN PROGRESS', 'PLANNING COMPLETED'),
    event_confirmed ENUM('CONFIRMED', 'NOT CONFIRMED')
    -- Other necessary columns for Events table
); 

ALTER TABLE Events
ADD COLUMN location_new ENUM('Grand Venue', 'Bar', 'Garden', 'Intimate Venue');


DELIMITER //

CREATE TRIGGER before_insert_event
BEFORE INSERT ON Events
FOR EACH ROW
BEGIN
    IF NEW.event_date <= CURDATE() THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Event date should be in the future';
    ELSEIF NEW.event_date <= (CURDATE() + INTERVAL 1 MONTH) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Event date should be at least one month after today';
    END IF;
END//

DELIMITER ;

ALTER TABLE Events MODIFY COLUMN decoration_style ENUM('Elegant', 'Playful', 'Boho Chic', 'Casual');


SELECT * from EVENTS;



CREATE TABLE IF NOT EXISTS Users (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telephone_number VARCHAR(20),
    -- Define other necessary columns...
    events INT,
    FOREIGN KEY (events) REFERENCES Events(ID) ON DELETE SET NULL -- Change this to match the Events table primary key and define appropriate ON DELETE behavior
);


INSERT INTO Users (name, email, telephone_number, events)
VALUES
    ('John Doe', 'john@example.com', '1234567890', NULL),
    ('Jane Smith', 'jane@example.com', '9876543210', NULL),
    ('Michael Johnson', 'michael@example.com', '5551234567', NULL),
    ('Emily Davis', 'emily@example.com', '3339876543', NULL),
    ('Daniel Brown', 'daniel@example.com', '7772345678', NULL),
    ('Olivia Wilson', 'olivia@example.com', '1118765432', NULL),
    ('Sophia Taylor', 'sophia@example.com', '9993456789', NULL),
    ('Matthew Anderson', 'matthew@example.com', '4445678901', NULL),
    ('Emma Martinez', 'emma@example.com', '2227890123', NULL),
    ('William Garcia', 'william@example.com', '6664567890', NULL);

ALTER TABLE users ADD COLUMN password VARCHAR(255);


SELECT * from Users;