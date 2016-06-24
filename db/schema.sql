CREATE DATABASE boozr;
USE boozr;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	email varchar(128) NOT NULL,
	password varchar(128) NOT NULL,
  date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);
