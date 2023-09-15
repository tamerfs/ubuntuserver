const mysql = require('mysql')

/*
configurações mysql
*/
// const ENV_HOST = '172.17.0.2'
const ENV_HOST = '192.168.0.100'
// const ENV_HOST = 'instance-mysql',

const connectionDb = mysql.createConnection({
// host: 'mysql-container-instance',
  host: ENV_HOST,
  user: 'root',
  password: 'databasesql',
  database: 'DATALAKE_SQL'
})

connectionDb.connect()

exports.connectionDb = connectionDb
exports.ENV_HOST = ENV_HOST
