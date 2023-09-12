CREATE DATABASE IF NOT EXISTS DATALAKE_SQL;
USE DATABASE_SQL;

CREATE TABLE IF NOT EXISTS products (
    id INT(11) AUTO_INCREMENT,
    name VARCHAR(255),
    price DECIMAL(10, 2),
    PRIMARY KEY (id)
);

INSERT INTO products VALUE(0, 'produto_1', 2500);
INSERT INTO products VALUE(0, 'produto_2', 5500);
INSERT INTO products VALUE(0, 'produto_3', 1700);