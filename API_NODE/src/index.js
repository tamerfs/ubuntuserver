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
  res.send(`
  <h1>Node server running on Docker<h1/> <br>
  <h4> Acesse ao <a target="_blank" href="${INIT_DIR}">LINK<a/><h4/>
  <h4> Acesse ao <a target="_blank" href="${PORT}${INIT_DIR}">LINK<a/><h4/>
  <h4> Acesse ao <a target="_blank" href="http://${HOST}:${PORT}${INIT_DIR}">LINK<a/><h4/>
   `)
})

app.get(INIT_DIR, (req, res) => {
  connectionDb.query(
    'SELECT * FROM products',
    (error, results) => {
      if (error) {
        console.log('erro na arrow function - Erro ao carregar a query')
        res.send('<h1>Erro ao carregar a query<h1/>')
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
