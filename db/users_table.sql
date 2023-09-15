CREATE TABLE IF NOT EXISTS application_user(
    -- uuid uuid DEFAULT uuid_generate_v4(),
    id BINARY(16) PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    -- user_last_name VARCHAR(255) NOT NULL,
    -- user_first_name VARCHAR(255) NOT NULL,
    -- cpf/cnpj VARCHAR(255) NOT NULL,
    -- email VARCHAR(255),
    -- data_nascimento DATE,
    password VARCHAR(255) NOT NULL
)

SELECT UUID() AS userid;

SELECT * from application_user

INSERT INTO application_user (id, username, password) VALUES (UUID_TO_BIN(UUID()),'tamer', PASSWORD('tamer1914','my_salt'));
INSERT INTO application_user (id, username, password) VALUES (UUID_TO_BIN(UUID()),'admin', PASSWORD('admin1918','my_salt'));
INSERT INTO application_user (id, username, password) VALUES (UUID_TO_BIN(UUID()),'samuel', PASSWORD('samuel1995','my_salt'));
