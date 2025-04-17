USE record_company;
INSERT INTO record_company.bands (name)
VALUES ('Iron Maiden');

SELECT * FROM record_company.bands;


USE record_company;

SELECT * FROM albums;

SELECT name FROM albums;

SELECT DISTINCT name FROM albums;

UPDATE albums
SET release_year = 1982
WHERE id = 1;

SELECT * FROM albums
WHERE release_year < 2000;

SELECT * FROM albums
WHERE name LIKE '%er%';

SELECT * FROM albums
WHERE name LIKE '%er%' OR band_id = 2;

SELECT * FROM record_company.albums
WHERE release_year = 1984 AND band_id = 1;

SELECT * FROM record_company.albums
WHERE release_year BETWEEN 2000 AND 2018;

SELECT * FROM record_company.albums
WHERE release_year IS NULL;

DELETE FROM  record_company.albums
WHERE id = 5;

SELECT * FROM record_company.albums;

SELECT * FROM record_company.bands
JOIN record_company.albums ON bands.id = albums.band_id;

SELECT * FROM record_company.bands
LEFT JOIN record_company.albums ON bands.id = albums.band_id;

SELECT * FROM record_company.albums
RIGHT JOIN record_company.bands ON bands.id = albums.band_id;

USE record_company;

SELECT AVG(release_year) FROM record_company.albums;
SELECT SUM(release_year) FROM record_company.albums;

SELECT record_company.band_id, COUNT(band_id) FROM record_company.albums
GROUP BY band_id;

SELECT * FROM record_company.band_id;

SELECT b.name AS band_name, COUNT(a.id) AS num_albums
FROM bands AS b
LEFT JOIN albums AS a ON b.id = a.band_id
GROUP BY b.id;


SELECT * FROM record_company.tables;