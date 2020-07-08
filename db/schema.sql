CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id INT AUTO_INCREMENT,
	burger_name VARCHAR(45) NULL,
	devoured BOOLEAN default false NOT NULL,
	CONSTRAINT burgers_pk
		PRIMARY KEY (id)
);