# Meals Table
CREATE TABLE Meal (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    `when` DATETIME NOT NULL,
    max_reservations INT,
    price DECIMAL(10, 2),
    created_date DATE
);

# Create Reservation table
CREATE TABLE Reservation (
    id INT PRIMARY KEY AUTO_INCREMENT,
    number_of_guests INT,
    meal_id INT,
    created_date DATE,
    contact_phonenumber VARCHAR(20),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255),
    FOREIGN KEY (meal_id) REFERENCES Meal(id)
);

# Create Review table
CREATE TABLE Review (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    description TEXT,
    meal_id INT,
    stars INT,
    created_date DATE,
    FOREIGN KEY (meal_id) REFERENCES Meal(id)
);

# Queries about Meal table

SELECT * FROM Meal;
INSERT INTO Meal (id, title, description, location, `when`, max_reservations, price, created_date)
VALUES (1, 'Pasta Night', 'Enjoy a variety of pasta dishes.', 'Rome', '2023-12-01 18:00:00', 20, 25.99, '2023-11-01');

SELECT * FROM Meal WHERE id = 1;

UPDATE Meal
SET title = 'Italian Pasta Night', price = 29.99
WHERE id = 1;

DELETE FROM Meal WHERE id = 1;

# Queries about Reservation table
SELECT * FROM Reservation;
INSERT INTO Reservation (id, number_of_guests, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (1, 4, '2023-11-02', '1234567890', 'John Doe', 'john.doe@example.com');

SELECT * FROM Reservation WHERE id = 1;

UPDATE Reservation
SET number_of_guests = 5, contact_phonenumber = '0987654321'
WHERE id = 1;
