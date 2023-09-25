USE DATALAKE_SQL;

INSERT INTO application_user (id, username, password) 
    VALUES 
        (UUID_TO_BIN(UUID()),'tamer', MD5('tamer1914')),
        (UUID_TO_BIN(UUID()),'admin', MD5('admin1918')),
        (UUID_TO_BIN(UUID()),'samuel', MD5('samuel1995')),
        (UUID_TO_BIN(UUID()),'isabela', MD5('samuel1995'));

