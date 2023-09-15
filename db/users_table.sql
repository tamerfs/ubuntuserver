USE DATALAKE_SQL;

CREATE TABLE IF NOT EXISTS application_user(
    id BINARY(16) PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_last_name VARCHAR(255),
    user_first_name VARCHAR(255),
    cpf_cnpj VARCHAR(255),
    email VARCHAR(255),
    data_nascimento DATE
)

INSERT INTO application_user (id, username, password) 
    VALUES 
        (UUID_TO_BIN(UUID()),'tamer', MD5('tamer1914')),
        (UUID_TO_BIN(UUID()),'admin', MD5('admin1918')),
        (UUID_TO_BIN(UUID()),'samuel', MD5('samuel1995')),
        (UUID_TO_BIN(UUID()),'isabela', MD5('samuel1995'));

