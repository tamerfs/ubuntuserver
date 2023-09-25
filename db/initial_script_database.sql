CREATE DATABASE IF NOT EXISTS DATALAKE_SQL;
USE DATALAKE_SQL;

CREATE TABLE IF NOT EXISTS products (
    id INT(11) AUTO_INCREMENT,
    name VARCHAR(255),
    price DECIMAL(10, 2),
    PRIMARY KEY (id)
);