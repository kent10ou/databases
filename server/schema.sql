/*CREATE DATABASE chat;*/

USE chat;

CREATE TABLE messages (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user id` int NOT NULL,
  `text` varchar(255) NOT NULL,
  `roomname` varchar(20),
  PRIMARY KEY (`id`)
);


CREATE TABLE users (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

