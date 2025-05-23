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


SELECT * FROM bands;

DROP DATABASE record_company;

# 
# Exercises from https://github.com/WebDevSimplified/Learn-SQL?tab=readme-ov-file

CREATE DATABASE record_company;

USE record_company;

USE record_company;

CREATE TABLE bands (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE albums (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  release_year INT,
  band_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (band_id) REFERENCES bands(id)
);

# Practice 1. Create a Songs Table
CREATE TABLE songs (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name TEXT NOT NULL,
    length REAL NOT NULL,
    album_id INTEGER NOT NULL,
    FOREIGN KEY (album_id) REFERENCES albums(id)
);

INSERT INTO bands(id,name) VALUES (1,'Seventh Wonder');
INSERT INTO bands(id,name) VALUES (2,'Metallica');
INSERT INTO bands(id,name) VALUES (3,'The Ocean');
INSERT INTO bands(id,name) VALUES (4,'Within Temptation');
INSERT INTO bands(id,name) VALUES (5,'Death');
INSERT INTO bands(id,name) VALUES (6,'Van Canto');
INSERT INTO bands(id,name) VALUES (7,'Dream Theater');

INSERT INTO albums(id,name,release_year,band_id) VALUES (1,'Tiara',2018,1);
INSERT INTO albums(id,name,release_year,band_id) VALUES (2,'The Great Escape',2010,1);
INSERT INTO albums(id,name,release_year,band_id) VALUES (3,'Mercy Falls',2008,1);
INSERT INTO albums(id,name,release_year,band_id) VALUES (4,'Master of Puppets',NULL,2);
INSERT INTO albums(id,name,release_year,band_id) VALUES (5,'...And Justice for All',1988,2);
INSERT INTO albums(id,name,release_year,band_id) VALUES (6,'Death Magnetic',2008,2);
INSERT INTO albums(id,name,release_year,band_id) VALUES (7,'Heliocentric',2010,3);
INSERT INTO albums(id,name,release_year,band_id) VALUES (8,'Pelagial',2013,3);
INSERT INTO albums(id,name,release_year,band_id) VALUES (9,'Anthropocentric',2010,3);
INSERT INTO albums(id,name,release_year,band_id) VALUES (10,'Resist',2018,4);
INSERT INTO albums(id,name,release_year,band_id) VALUES (11,'The Unforgiving',2011,4);
INSERT INTO albums(id,name,release_year,band_id) VALUES (12,'Enter',1997,4);
INSERT INTO albums(id,name,release_year,band_id) VALUES (13,'The Sound of Perseverance',1998,5);
INSERT INTO albums(id,name,release_year,band_id) VALUES (14,'Individual Thought Patterns',1993,5);
INSERT INTO albums(id,name,release_year,band_id) VALUES (15,'Human',1991,5);
INSERT INTO albums(id,name,release_year,band_id) VALUES (16,'A Storm to Come',2006,6);
INSERT INTO albums(id,name,release_year,band_id) VALUES (17,'Break the Silence',2011,6);
INSERT INTO albums(id,name,release_year,band_id) VALUES (18,'Tribe of Force',2010,6);

INSERT INTO songs(id,name,length,album_id) VALUES (1,'Arrival',1+(30/60),1);
INSERT INTO songs(id,name,length,album_id) VALUES (2,'The Everones',6+(13/60),1);
INSERT INTO songs(id,name,length,album_id) VALUES (3,'Dream Machines',5+(38/60),1);
INSERT INTO songs(id,name,length,album_id) VALUES (4,'Against the Grain',6+(58/60),1);
INSERT INTO songs(id,name,length,album_id) VALUES (5,'Victorious',4+(55/60),1);
INSERT INTO songs(id,name,length,album_id) VALUES (6,'Tiara''s Song (Farewell Pt. 1)',7+(16/60),1);
INSERT INTO songs(id,name,length,album_id) VALUES (7,'Goodnight (Farewell Pt. 2)',7+(10/60),1);
INSERT INTO songs(id,name,length,album_id) VALUES (8,'Beyond Today (Farewell Pt. 3)',5+(06/60),1);
INSERT INTO songs(id,name,length,album_id) VALUES (9,'The Truth',4+(17/60),1);
INSERT INTO songs(id,name,length,album_id) VALUES (10,'By the Light of the Funeral Pyres',3+(54/60),1);
INSERT INTO songs(id,name,length,album_id) VALUES (11,'Damnation Below',6+(44/60),1);
INSERT INTO songs(id,name,length,album_id) VALUES (12,'Procession',0+(45/60),1);
INSERT INTO songs(id,name,length,album_id) VALUES (13,'Exhale',9+(30/60),1);
INSERT INTO songs(id,name,length,album_id) VALUES (14,'Wiseman',5+(42/60),2);
INSERT INTO songs(id,name,length,album_id) VALUES (15,'Alley Cat',6+(06/60),2);
INSERT INTO songs(id,name,length,album_id) VALUES (16,'The Angelmaker',8+(29/60),2);
INSERT INTO songs(id,name,length,album_id) VALUES (17,'King of Whitewater',7+(20/60),2);
INSERT INTO songs(id,name,length,album_id) VALUES (18,'Long Way Home',4+(26/60),2);
INSERT INTO songs(id,name,length,album_id) VALUES (19,'Move on Through',5+(04/60),2);
INSERT INTO songs(id,name,length,album_id) VALUES (20,'The Great Escape',30+(14/60),2);
INSERT INTO songs(id,name,length,album_id) VALUES (21,'A New Beginning',3+(05/60),3);
INSERT INTO songs(id,name,length,album_id) VALUES (22,'There and Back',3+(02/60),3);
INSERT INTO songs(id,name,length,album_id) VALUES (23,'Welcome to Mercy Falls',5+(11/60),3);
INSERT INTO songs(id,name,length,album_id) VALUES (24,'Unbreakable',7+(19/60),3);
INSERT INTO songs(id,name,length,album_id) VALUES (25,'Tears for a Father',1+(58/60),3);
INSERT INTO songs(id,name,length,album_id) VALUES (26,'A Day Away',3+(43/60),3);
INSERT INTO songs(id,name,length,album_id) VALUES (27,'Tears for a Son',1+(42/60),3);
INSERT INTO songs(id,name,length,album_id) VALUES (28,'Paradise',5+(46/60),3);
INSERT INTO songs(id,name,length,album_id) VALUES (29,'Fall in Line',6+(09/60),3);
INSERT INTO songs(id,name,length,album_id) VALUES (30,'Break the Silence',9+(29/60),3);
INSERT INTO songs(id,name,length,album_id) VALUES (31,'Hide and Seek',7+(46/60),3);
INSERT INTO songs(id,name,length,album_id) VALUES (32,'Destiny Calls',6+(18/60),3);
INSERT INTO songs(id,name,length,album_id) VALUES (33,'One Last Goodbye',4+(21/60),3);
INSERT INTO songs(id,name,length,album_id) VALUES (34,'Back in Time',1+(14/60),3);
INSERT INTO songs(id,name,length,album_id) VALUES (35,'The Black Parade',6+(57/60),3);
INSERT INTO songs(id,name,length,album_id) VALUES (36,'Battery',5+(13/60),4);
INSERT INTO songs(id,name,length,album_id) VALUES (37,'Master of Puppets',8+(35/60),4);
INSERT INTO songs(id,name,length,album_id) VALUES (38,'The Thing That Should Not Be',6+(36/60),4);
INSERT INTO songs(id,name,length,album_id) VALUES (39,'Welcome Home (Sanitarium)',6+(27/60),4);
INSERT INTO songs(id,name,length,album_id) VALUES (40,'Disposable Heroes',8+(17/60),4);
INSERT INTO songs(id,name,length,album_id) VALUES (41,'Leper Messiah',5+(40/60),4);
INSERT INTO songs(id,name,length,album_id) VALUES (42,'Orion',8+(27/60),4);
INSERT INTO songs(id,name,length,album_id) VALUES (43,'Damage Inc.',5+(32/60),4);
INSERT INTO songs(id,name,length,album_id) VALUES (44,'Blackened',6+(41/60),5);
INSERT INTO songs(id,name,length,album_id) VALUES (45,'...And Justice for All',9+(47/60),5);
INSERT INTO songs(id,name,length,album_id) VALUES (46,'Eye of the Beholder',6+(30/60),5);
INSERT INTO songs(id,name,length,album_id) VALUES (47,'One',7+(27/60),5);
INSERT INTO songs(id,name,length,album_id) VALUES (48,'The Shortest Straw',6+(36/60),5);
INSERT INTO songs(id,name,length,album_id) VALUES (49,'Harvester of Sorrow',5+(46/60),5);
INSERT INTO songs(id,name,length,album_id) VALUES (50,'The Frayed Ends of Sanity',7+(44/60),5);
INSERT INTO songs(id,name,length,album_id) VALUES (51,'To Live Is to Die',9+(49/60),5);
INSERT INTO songs(id,name,length,album_id) VALUES (52,'Dyers Eve',5+(13/60),5);
INSERT INTO songs(id,name,length,album_id) VALUES (53,'That Was Just Your Life',7+(08/60),6);
INSERT INTO songs(id,name,length,album_id) VALUES (54,'The End of the Line',7+(52/60),6);
INSERT INTO songs(id,name,length,album_id) VALUES (55,'Broken Beat & Scarred',6+(25/60),6);
INSERT INTO songs(id,name,length,album_id) VALUES (56,'The Day That Never Comes',7+(56/60),6);
INSERT INTO songs(id,name,length,album_id) VALUES (57,'All Nightmare Long',7+(58/60),6);
INSERT INTO songs(id,name,length,album_id) VALUES (58,'Cyanide',6+(40/60),6);
INSERT INTO songs(id,name,length,album_id) VALUES (59,'The Unforgiven III',7+(47/60),6);
INSERT INTO songs(id,name,length,album_id) VALUES (60,'The Judas Kiss',8+(01/60),6);
INSERT INTO songs(id,name,length,album_id) VALUES (61,'Suicide & Redemption',9+(58/60),6);
INSERT INTO songs(id,name,length,album_id) VALUES (62,'My Apocalypse',5+(01/60),6);
INSERT INTO songs(id,name,length,album_id) VALUES (63,'Shamayim',1+(53/60),7);
INSERT INTO songs(id,name,length,album_id) VALUES (64,'Firmament',7+(29/60),7);
INSERT INTO songs(id,name,length,album_id) VALUES (65,'The First Commandment of the Luminaries',6+(47/60),7);
INSERT INTO songs(id,name,length,album_id) VALUES (66,'Ptolemy Was Wrong',6+(28/60),7);
INSERT INTO songs(id,name,length,album_id) VALUES (67,'Metaphysics of the Hangman',5+(41/60),7);
INSERT INTO songs(id,name,length,album_id) VALUES (68,'Catharsis of a Heretic',2+(08/60),7);
INSERT INTO songs(id,name,length,album_id) VALUES (69,'Swallowed by the Earth',4+(59/60),7);
INSERT INTO songs(id,name,length,album_id) VALUES (70,'Epiphany',3+(37/60),7);
INSERT INTO songs(id,name,length,album_id) VALUES (71,'The Origin of Species',7+(23/60),7);
INSERT INTO songs(id,name,length,album_id) VALUES (72,'The Origin of God',4+(33/60),7);
INSERT INTO songs(id,name,length,album_id) VALUES (73,'Epipelagic',1+(12/60),8);
INSERT INTO songs(id,name,length,album_id) VALUES (74,'Mesopelagic: Into the Uncanny',5+(56/60),8);
INSERT INTO songs(id,name,length,album_id) VALUES (75,'Bathyalpelagic I: Impasses',4+(24/60),8);
INSERT INTO songs(id,name,length,album_id) VALUES (76,'Bathyalpelagic II: The Wish in Dreams',3+(18/60),8);
INSERT INTO songs(id,name,length,album_id) VALUES (77,'Bathyalpelagic III: Disequilibrated',4+(27/60),8);
INSERT INTO songs(id,name,length,album_id) VALUES (78,'Abyssopelagic I: Boundless Vasts',3+(27/60),8);
INSERT INTO songs(id,name,length,album_id) VALUES (79,'Abyssopelagic II: Signals of Anxiety',5+(05/60),8);
INSERT INTO songs(id,name,length,album_id) VALUES (80,'Hadopelagic I: Omen of the Deep',1+(07/60),8);
INSERT INTO songs(id,name,length,album_id) VALUES (81,'Hadopelagic II: Let Them Believe',9+(17/60),8);
INSERT INTO songs(id,name,length,album_id) VALUES (82,'Demersal: Cognitive Dissonance',9+(05/60),8);
INSERT INTO songs(id,name,length,album_id) VALUES (83,'Benthic: The Origin of Our Wishes',5+(55/60),8);
INSERT INTO songs(id,name,length,album_id) VALUES (84,'Anthropocentric',9+(24/60),9);
INSERT INTO songs(id,name,length,album_id) VALUES (85,'The Grand Inquisitor I: Karamazov Baseness',5+(02/60),9);
INSERT INTO songs(id,name,length,album_id) VALUES (86,'She Was the Universe',5+(39/60),9);
INSERT INTO songs(id,name,length,album_id) VALUES (87,'For He That Wavereth...',2+(07/60),9);
INSERT INTO songs(id,name,length,album_id) VALUES (88,'The Grand Inquisitor II: Roots & Locusts',6+(33/60),9);
INSERT INTO songs(id,name,length,album_id) VALUES (89,'The Grand Inquisitor III: A Tiny Grain of Faith',1+(56/60),9);
INSERT INTO songs(id,name,length,album_id) VALUES (90,'Sewers of the Soul',3+(44/60),9);
INSERT INTO songs(id,name,length,album_id) VALUES (91,'Wille zum Untergang',6+(03/60),9);
INSERT INTO songs(id,name,length,album_id) VALUES (92,'Heaven TV',5+(04/60),9);
INSERT INTO songs(id,name,length,album_id) VALUES (93,'The Almightiness Contradiction',4+(34/60),9);
INSERT INTO songs(id,name,length,album_id) VALUES (94,'The Reckoning',4+(11/60),10);
INSERT INTO songs(id,name,length,album_id) VALUES (95,'Endless War',4+(09/60),10);
INSERT INTO songs(id,name,length,album_id) VALUES (96,'Raise Your Banner',5+(34/60),10);
INSERT INTO songs(id,name,length,album_id) VALUES (97,'Supernova',5+(34/60),10);
INSERT INTO songs(id,name,length,album_id) VALUES (98,'Holy Ground',4+(10/60),10);
INSERT INTO songs(id,name,length,album_id) VALUES (99,'In Vain',4+(25/60),10);
INSERT INTO songs(id,name,length,album_id) VALUES (100,'Firelight',4+(46/60),10);
INSERT INTO songs(id,name,length,album_id) VALUES (101,'Mad World',4+(57/60),10);
INSERT INTO songs(id,name,length,album_id) VALUES (102,'Mercy Mirror',3+(49/60),10);
INSERT INTO songs(id,name,length,album_id) VALUES (103,'Trophy Hunter',5+(51/60),10);
INSERT INTO songs(id,name,length,album_id) VALUES (104,'Why Not Me',0+(34/60),11);
INSERT INTO songs(id,name,length,album_id) VALUES (105,'Shot in the Dark',5+(02/60),11);
INSERT INTO songs(id,name,length,album_id) VALUES (106,'In the Middle of the Night',5+(11/60),11);
INSERT INTO songs(id,name,length,album_id) VALUES (107,'Faster',4+(23/60),11);
INSERT INTO songs(id,name,length,album_id) VALUES (108,'Fire and Ice',3+(57/60),11);
INSERT INTO songs(id,name,length,album_id) VALUES (109,'Iron',5+(40/60),11);
INSERT INTO songs(id,name,length,album_id) VALUES (110,'Where Is the Edge',3+(59/60),11);
INSERT INTO songs(id,name,length,album_id) VALUES (111,'Sinéad',4+(23/60),11);
INSERT INTO songs(id,name,length,album_id) VALUES (112,'Lost',5+(14/60),11);
INSERT INTO songs(id,name,length,album_id) VALUES (113,'Murder',4+(16/60),11);
INSERT INTO songs(id,name,length,album_id) VALUES (114,'A Demon''s Fate',5+(30/60),11);
INSERT INTO songs(id,name,length,album_id) VALUES (115,'Stairway to the Skies',5+(32/60),11);
INSERT INTO songs(id,name,length,album_id) VALUES (116,'Restless',6+(08/60),12);
INSERT INTO songs(id,name,length,album_id) VALUES (117,'Enter',7+(15/60),12);
INSERT INTO songs(id,name,length,album_id) VALUES (118,'Pearls of Light',5+(15/60),12);
INSERT INTO songs(id,name,length,album_id) VALUES (119,'Deep Within',4+(30/60),12);
INSERT INTO songs(id,name,length,album_id) VALUES (120,'Gatekeeper',6+(43/60),12);
INSERT INTO songs(id,name,length,album_id) VALUES (121,'Grace',5+(10/60),12);
INSERT INTO songs(id,name,length,album_id) VALUES (122,'Blooded',3+(38/60),12);
INSERT INTO songs(id,name,length,album_id) VALUES (123,'Candles',7+(07/60),12);
INSERT INTO songs(id,name,length,album_id) VALUES (124,'Scavenger of Human Sorrow',6+(56/60),13);
INSERT INTO songs(id,name,length,album_id) VALUES (125,'Bite the Pain',4+(29/60),13);
INSERT INTO songs(id,name,length,album_id) VALUES (126,'Spirit Crusher',6+(47/60),13);
INSERT INTO songs(id,name,length,album_id) VALUES (127,'Story to Tell',6+(34/60),13);
INSERT INTO songs(id,name,length,album_id) VALUES (128,'Flesh and the Power It Holds',8+(26/60),13);
INSERT INTO songs(id,name,length,album_id) VALUES (129,'Voice of the Soul',3+(43/60),13);
INSERT INTO songs(id,name,length,album_id) VALUES (130,'To Forgive Is to Suffer',5+(55/60),13);
INSERT INTO songs(id,name,length,album_id) VALUES (131,'A Moment of Clarity',7+(25/60),13);
INSERT INTO songs(id,name,length,album_id) VALUES (132,'Painkiller',6+(02/60),13);
INSERT INTO songs(id,name,length,album_id) VALUES (133,'Overactive Imagination',3+(30/60),14);
INSERT INTO songs(id,name,length,album_id) VALUES (134,'In Human Form',3+(57/60),14);
INSERT INTO songs(id,name,length,album_id) VALUES (135,'Jealousy',3+(41/60),14);
INSERT INTO songs(id,name,length,album_id) VALUES (136,'Trapped in a Corner',4+(14/60),14);
INSERT INTO songs(id,name,length,album_id) VALUES (137,'Nothing Is Everything',3+(19/60),14);
INSERT INTO songs(id,name,length,album_id) VALUES (138,'Mentally Blind',4+(49/60),14);
INSERT INTO songs(id,name,length,album_id) VALUES (139,'Individual Thought Patterns',4+(01/60),14);
INSERT INTO songs(id,name,length,album_id) VALUES (140,'Destiny',4+(06/60),14);
INSERT INTO songs(id,name,length,album_id) VALUES (141,'Out of Touch',4+(22/60),14);
INSERT INTO songs(id,name,length,album_id) VALUES (142,'The Philosopher',4+(13/60),14);
INSERT INTO songs(id,name,length,album_id) VALUES (143,'Flattening of Emotions',4+(28/60),15);
INSERT INTO songs(id,name,length,album_id) VALUES (144,'Suicide Machine',4+(23/60),15);
INSERT INTO songs(id,name,length,album_id) VALUES (145,'Together as One',4+(10/60),15);
INSERT INTO songs(id,name,length,album_id) VALUES (146,'Secret Face',4+(39/60),15);
INSERT INTO songs(id,name,length,album_id) VALUES (147,'Lack of Comprehension',3+(43/60),15);
INSERT INTO songs(id,name,length,album_id) VALUES (148,'See Through Dreams',4+(39/60),15);
INSERT INTO songs(id,name,length,album_id) VALUES (149,'Cosmic Sea',4+(27/60),15);
INSERT INTO songs(id,name,length,album_id) VALUES (150,'Vacant Planets',3+(52/60),15);
INSERT INTO songs(id,name,length,album_id) VALUES (151,'Stora Rövardansen',1+(33/60),16);
INSERT INTO songs(id,name,length,album_id) VALUES (152,'King',3+(44/60),16);
INSERT INTO songs(id,name,length,album_id) VALUES (153,'The Mission',4+(18/60),16);
INSERT INTO songs(id,name,length,album_id) VALUES (154,'Lifetime',4+(49/60),16);
INSERT INTO songs(id,name,length,album_id) VALUES (155,'Rain',4+(03/60),16);
INSERT INTO songs(id,name,length,album_id) VALUES (156,'She''s Alive',4+(12/60),16);
INSERT INTO songs(id,name,length,album_id) VALUES (157,'I Stand Alone',4+(44/60),16);
INSERT INTO songs(id,name,length,album_id) VALUES (158,'Starlight',4+(40/60),16);
INSERT INTO songs(id,name,length,album_id) VALUES (159,'Battery',5+(13/60),16);
INSERT INTO songs(id,name,length,album_id) VALUES (160,'If I Die in Battle',4+(46/60),17);
INSERT INTO songs(id,name,length,album_id) VALUES (161,'The Seller of Souls',3+(24/60),17);
INSERT INTO songs(id,name,length,album_id) VALUES (162,'Primo Victoria',3+(44/60),17);
INSERT INTO songs(id,name,length,album_id) VALUES (163,'Dangers in My Head',4+(05/60),17);
INSERT INTO songs(id,name,length,album_id) VALUES (164,'Black Wings of Hate',4+(41/60),17);
INSERT INTO songs(id,name,length,album_id) VALUES (165,'Bed of Nails',3+(37/60),17);
INSERT INTO songs(id,name,length,album_id) VALUES (166,'Spelled in Waters',4+(26/60),17);
INSERT INTO songs(id,name,length,album_id) VALUES (167,'Neuer Wind',3+(21/60),17);
INSERT INTO songs(id,name,length,album_id) VALUES (168,'The Higher Flight',5+(00/60),17);
INSERT INTO songs(id,name,length,album_id) VALUES (169,'Master of the Wind',6+(09/60),17);
INSERT INTO songs(id,name,length,album_id) VALUES (170,'Lost Forever',4+(44/60),18);
INSERT INTO songs(id,name,length,album_id) VALUES (171,'To Sing a Metal Song',3+(24/60),18);
INSERT INTO songs(id,name,length,album_id) VALUES (172,'One to Ten',4+(06/60),18);
INSERT INTO songs(id,name,length,album_id) VALUES (173,'I Am Human',3+(56/60),18);
INSERT INTO songs(id,name,length,album_id) VALUES (174,'My Voice',5+(30/60),18);
INSERT INTO songs(id,name,length,album_id) VALUES (175,'Rebellion',4+(05/60),18);
INSERT INTO songs(id,name,length,album_id) VALUES (176,'Last Night of the Kings',3+(52/60),18);
INSERT INTO songs(id,name,length,album_id) VALUES (177,'Tribe of Force',3+(17/60),18);
INSERT INTO songs(id,name,length,album_id) VALUES (178,'Water Fire Heaven Earth',3+(32/60),18);
INSERT INTO songs(id,name,length,album_id) VALUES (179,'Master of Puppets',8+(23/60),18);
INSERT INTO songs(id,name,length,album_id) VALUES (180,'Magic Taborea',3+(22/60),18);
INSERT INTO songs(id,name,length,album_id) VALUES (181,'Hearted',4+(00/60),18);
INSERT INTO songs(id,name,length,album_id) VALUES (182,'Frodo''s Dream',3+(06/60),18);


SELECT * FROM record_company.songs;

# Practice 2. Select only the Names of all the Bands
# Change the name of the column the data returns to Band Name

SELECT name AS "Band Name"
FROM bands;

# Practice 3. Select the Oldest Album 
# Make sure to only return one result from this query, and that you are not returning any albums that do not have a release year.

SELECT *
FROM albums
WHERE release_year IS NOT NULL
ORDER BY release_year ASC
LIMIT 1;

# Practice 4. Get all Bands that have Albums
# Return the band name as Band Name

SELECT bands.name AS "Band Name"
FROM bands
JOIN albums ON bands.id = albums.band_id;

# I got the whole band names, but then multiple times, as I have ignored some bands can have multiple albumms.
# So have to use DISTINCT so each band name shows up only once, EVEN IF there are multiple albums.

SELECT DISTINCT bands.name AS 'Band Name'
FROM bands
JOIN albums ON bands.id = albums.band_id;

# 5. Get all Bands that have No Albums
# Return the band name as Band Name.

SELECT bands.name AS 'Band Name'
FROM bands
LEFT JOIN albums ON bands.id = albums.band_id
WHERE albums.id IS NULL;

# 6. Get the Longest Album
# Return the album name as Name
# the album release year as Release Year 
# and the album length as Duration.

SELECT 
albums.name AS 'Name',
albums.release_year AS 'Release Year',
SUM(songs.length) AS 'Duration'
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY albums.id
ORDER BY Duration DESC
LIMIT 1;

# 7. Update the Release Year of the Album with no Release Year
# Set the release year to 1986.

#Here I need to first find which album has no release year:
SELECT * FROM albums WHERE release_year IS NULL;

# Then I update that album using the id I just got from the earlier query 
UPDATE albums
SET release_year = 1986
WHERE id = 4;
# As required with the release year of 1986

# 8. Insert a record for your favorite Band and one of their Albums
INSERT INTO bands (name)
VALUES ('Taleal Bedru Aleyna');

# Now getting the id of the band I just inserted, which is 8.
SELECT id FROM bands
ORDER BY id DESC LIMIT 1;

INSERT INTO albums (name, release_year, band_id)
VALUES ('Taleal Bedru Aleyna', 622, 8);

  SELECT id FROM albums
  ORDER BY id DESC LIMIT 1;

# Just looking at the albums table and asking for just the id of each album. Got it ... there are 19 currently!
  SELECT id FROM albums;

  # So I can see that the id of the album I just inserted is 19.
  SELECT id FROM albums
  ORDER BY id DESC LIMIT 1; 
  # LIMIT 1 only shows the first row after sorting — which is the last album I added.
  # This is the highest ID number, 19, (aka. most recently added)

# 9. Delete the Band and Album you added in #8
DELETE FROM albums
WHERE id = 19;

# Deleting the album before the band is the correct order, because albums have a “foreign key” to bands which means that the album is dependent on the band.
# So if I delete the band first, it will not be able to delete the album because it is dependent on the band.
  
SELECT id FROM bands
ORDER BY id DESC LIMIT 1;

DELETE FROM bands
WHERE id = 8;
# Deleting the band I just added, which is the last one in the list.

SELECT * FROM songs;

# 10. Get the Average Length of all Songs
SELECT AVG(length) As 'Avarage Song Length'
FROM songs;

# 11. Select the longest Song of each Album
SELECT
albums.name AS Album,
albums.release_year AS 'Release Year',
MAX(songs.length) AS Duration
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY albums.id;
# Just learning that Group results by album means that I can get the longest song per album, not just overall.

# 12. Get the number of Songs for each Band
SELECT
bands.name AS Band,
COUNT(songs.id) AS 'Number of Songs'
FROM bands
JOIN albums ON bands.id = albums.band_id
JOIN songs ON albums.id = songs.album_id
GROUP BY bands.id;

# To see each band name, and then count how many songs are linked to that band is the goal.
# I use the band_id to JOIN albums table to bands. So I get which albums belong to which band.
# Then I use album_id to JOIN songs to albums. So I get all songs that belong to each album.
# Then I group ALL THE SONGS by band id (each band), so I can count how many songs belong to each band.