
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

