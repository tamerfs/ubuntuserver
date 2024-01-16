const mysql = require('mysql')

// configurações mysql

const ENV_HOST = ['instance-mysql', '192.168.1.100', '172.17.0.2']

const connectionDb = mysql.createConnection({
  host: ENV_HOST[1],
  user: 'root',
  password: 'databasesql',
  database: 'DATALAKE_SQL'
})

connectionDb.connect((err) => {
  if (err) throw err
  console.log(`Conected to MySQl instance on ${connectionDb.config.host}`)
})

// exports.ENV_HOST = ENV_HOST
exports.connectionDb = connectionDb
