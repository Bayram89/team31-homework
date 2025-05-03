
## Practices from the HackerRank SQL Tutorial
## https://www.hackerrank.com/domains/sql
USE world;
SELECT *
FROM CITY
WHERE COUNTRYCODE = 'USA'
AND POPULATION > 100000;
SELECT *
FROM CITY;
SELECT *
FROM CITY
WHERE ID = '1661';

SELECT *
FROM CITY
WHERE COUNTRYCODE = 'JPN';

SELECT NAME
FROM CITY
WHERE COUNTRYCODE = 'JPN';

SELECT NAME, POPULATION
FROM CITY
WHERE COUNTRYCODE = 'USA';

SELECT NAME, POPULATION
FROM CITY
WHERE COUNTRYCODE = 'JPN'
AND POPULATION > 900000;

SELECT COUNTRYCODE, LANGUAGE, ISOFFICIAL, PERCENTAGE
FROM COUNTRYLANGUAGE
WHERE ISOFFICIAL = 'T';

SELECT COUNTRYCODE, LANGUAGE, PERCENTAGE
FROM COUNTRYLANGUAGE
WHERE PERCENTAGE > 50;

SELECT LANGUAGE, COUNT(*)
FROM COUNTRYLANGUAGE
GROUP BY LANGUAGE
HAVING COUNT(*) > 1;

SELECT COUNTRYCODE, LANGUAGE
FROM COUNTRYLANGUAGE
WHERE LANGUAGE = 'English';

SELECT COUNTRYCODE, LANGUAGE, PERCENTAGE
FROM COUNTRYLANGUAGE
WHERE COUNTRYCODE = 'USA';


# Part 1: Working with tasks
# from https://github.com/HackYourFuture-CPH/databases/tree/main/lesson2
USE test_db;

SELECT * FROM task;

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Task Title', 'Task Description', '2025-05-02', '2025-05-02', '2025-05-10', 1, 1);

UPDATE task
SET title = 'New Task Title'
WHERE id = 1;

USE test_db;
SELECT * FROM task;

SELECT title, description, created, updated, due_date, status_id, user_id
FROM task;

UPDATE task
SET due_date = '2025-05-15'
WHERE id = 1;

SELECT due_date
FROM task;

UPDATE task
SET status_id = 2
WHERE id = 1;

SELECT title, description, created, updated, due_date, status_id, user_id
FROM task;

UPDATE task
SET status_id = 3
WHERE id = 1;

DELETE FROM task
WHERE id = 9;

SELECT title, description, created, updated, due_date, status_id, user_id
FROM task;

# Part 2: School Database
CREATE DATABASE SchoolDB;

USE SchoolDB;

CREATE TABLE Class (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    begins DATE,
    ends DATE
);

USE SchoolDB;

CREATE TABLE Student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(20),
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES Class(id)
);
USE SchoolDB;

USE test_db;

USE SchoolDB;
SELECT * FROM student;
SELECT * FROM class;

CREATE INDEX idx_name ON student(name);

ALTER TABLE class
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished');


insert into user_task (user_id, task_id) values(10, 16);
insert into user_task (user_id, task_id) values(10, 1);
insert into user_task (user_id, task_id) values(11, 26);
insert into user_task (user_id, task_id) values(11, 27);
insert into user_task (user_id, task_id) values(11, 17);
insert into user_task (user_id, task_id) values(11, 2);
insert into user_task (user_id, task_id) values(1, 3);
insert into user_task (user_id, task_id) values(2, 6);
insert into user_task (user_id, task_id) values(3, 8);
insert into user_task (user_id, task_id) values(4, 9);
insert into user_task (user_id, task_id) values(5, 12);
insert into user_task (user_id, task_id) values(6, 14);
insert into user_task (user_id, task_id) values(7, 21);
insert into user_task (user_id, task_id) values(8, 25);
insert into user_task (user_id, task_id) values(9, 28);
insert into user_task (user_id, task_id) values(10, 31);
insert into user_task (user_id, task_id) values(11, 32);

CREATE TABLE user (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO user (id, name) VALUES (1, 'User 1');
INSERT INTO user (id, name) VALUES (2, 'User 2');
INSERT INTO user (id, name) VALUES (3, 'User 3');
INSERT INTO user (id, name) VALUES (4, 'User 4');
INSERT INTO user (id, name) VALUES (5, 'User 5');
INSERT INTO user (id, name) VALUES (6, 'User 6');
INSERT INTO user (id, name) VALUES (7, 'User 7');
INSERT INTO user (id, name) VALUES (8, 'User 8');
INSERT INTO user (id, name) VALUES (9, 'User 9');
INSERT INTO user (id, name) VALUES (10, 'User 10');
INSERT INTO user (id, name) VALUES (11, 'User 11');

CREATE TABLE user_task (
    user_id INT,
    task_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (task_id) REFERENCES task(id) ON DELETE CASCADE ON UPDATE CASCADE
);

USE hyf_week2;
USE schooldb;