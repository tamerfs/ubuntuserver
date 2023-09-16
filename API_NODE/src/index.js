const { connectionDb } = require('./db_conection')
const express = require('express')

// configurações node API express

const app = express()
const PORT = process.env.PORT || 4040
const HOST = '0.0.0.0'
const INIT_DIR = '/products'
const USER_DIR = '/users'

app.listen(PORT, HOST, (err) => {
  if (err) throw err
  console.log(`Running on http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
  res.send(`
  <h1> Node server API running on Docker <h1/> <br>
  <h2> Tal link acessado é por meio de um tunnel via NGROK<h2/> <br>
  <h3> Aplicação rodando em um container cp, node-16<h3/> <br>
  <h3> Interligado via conexão e direcionamento de porta com uma isntancia MySQL<h3/> <br>
  <h4> Acesse ao request Products<a target="_blank" href="${INIT_DIR}">LINK<a/><h4/>
  <h4> Acesse ao request Users<a target="_blank" href="${USER_DIR}">LINK<a/><h4/>
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

app.get(USER_DIR, (req, res) => {
  connectionDb.query(
    'SELECT username , BIN_TO_UUID(id) as id FROM application_user ',
    (error, results) => {
      if (error) {
        console.log('erro na arrow function - Erro ao carregar a query')
        res.send('<h1>Erro ao carregar a query<h1/>')
        throw error
      };
      res.send(
        results.map(
          item => ({
            id: item.id,
            username: item.username
          })
        )
      )
    }
  )
})
