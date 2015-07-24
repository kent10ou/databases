/*CREATE DATABASE chat;*/

USE chat;

CREATE TABLE messages (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` int(11) unsigned NOT NULL,
  `message` varchar(255) NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

