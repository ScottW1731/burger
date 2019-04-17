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

INSERT INTO burger (name, calories, price, eaten) VALUES ("Santa Fe", 1200, 10.00, FALSE);
INSERT INTO burger (name, calories, price, eaten) VALUES ("Double Stack", 1700, 12.00, FALSE);
INSERT INTO burger (name, calories, price, eaten) VALUES ("Juicy Lucy", 2000, 13.00, FALSE);