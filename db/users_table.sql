CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS application_user(
    uuid uuid DEFAULT uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (uuid)
)

SELECT * from application_user

INSERT INTO application_user (username, password) VALUES ('tamer', crypt('tamer1914','my_salt_first'));
INSERT INTO application_user (username, password) VALUES ('admin', crypt('admin1918','my_salt'));
INSERT INTO application_user (username, password) VALUES ('samuel', crypt('samuel1995','my_salt'));