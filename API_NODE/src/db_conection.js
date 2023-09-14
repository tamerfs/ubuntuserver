const mysql = require('mysql')

/*
configurações mysql
*/

const connectionDb = mysql.createConnection({
// host: 'mysql-container-instance',
  host: '172.17.0.2',
  user: 'root',
  password: 'databasesql',
  database: 'DATALAKE_SQL'
})

connectionDb.connect()

exports.connectionDb = connectionDb
