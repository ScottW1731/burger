CREATE DATATBASE burgerDB;

USE burgerDB;

CREATE TABLE burger (
    id INT AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    calories INT NOT NULL,
    price DECIMAL NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO burger (name, calories, price) VALUES ("Santa Fe, 1200, 10.00")
INSERT INTO burger (name, calories, price) VALUES ("Double Stack, 1700, 12.00")
INSERT INTO burger (name, calories, price) VALUES ("Juicy Lucy, 2000, 13.00")