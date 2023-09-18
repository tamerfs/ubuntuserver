CREATE DATABASE IF NOT EXISTS DATALAKE_SQL;
USE DATALAKE_SQL;

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'databasesql';
flush privileges;