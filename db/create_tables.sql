USE DATALAKE_SQL;

CREATE TABLE IF NOT EXISTS RAW_products (
    id INT(11) AUTO_INCREMENT,
    name VARCHAR(255),
    price DECIMAL(10, 2),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS application_user(
    id BINARY(16) PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_last_name VARCHAR(255),
    user_first_name VARCHAR(255),
    cpf_cnpj VARCHAR(255),
    email VARCHAR(255),
    data_nascimento DATE
);
