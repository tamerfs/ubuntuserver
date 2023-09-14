const { connectionDb, ENV_HOST } = require('./db_conection')
const express = require('express')
/*
configurações node API express
*/

const app = express()
const PORT = 9001
const HOST = '0.0.0.0'
const INIT_DIR = '/products'

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`)
})

app.get('/', (req, res) => {
  res.send(`hello world <br> Acesse ao <a href="${ENV_HOST}:${PORT}${INIT_DIR}">LINK<a/>`)
})

app.get(INIT_DIR, (req, res) => {
  connectionDb.query(
    'SELECT * FROM products',
    (error, results) => {
      if (error) {
        console.log('erro na arrow function - Erro ao carregar a query')
        res.send('Erro ao carregar a query')
        throw error
      };
      res.send(
        results.map(
          item => ({
            name: item.name,
            price: item.price
          })
        )
      )
    }
  )
})
