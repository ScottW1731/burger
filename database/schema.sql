CREATE DATABASE IF NOT EXISTS burgerDB;

USE burgerDB;

CREATE TABLE burger (
    id INT AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    calories INT NOT NULL,
    price DECIMAL NOT NULL,
    eaten BOOL DEFAULT false,
    PRIMARY KEY(id)
);

