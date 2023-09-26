const express = require('express')
const { initRoute } = require('./routes/init.route')
const { statusRoute } = require('./routes/status.route')
const { productsRoute } = require('./routes/products.route')
const { usersRoute } = require('./routes/users.route')
// const { jwtAuthenticationMiddleware } = require('./middlewares/jwt-authenticationmiddleware')
// const { errorHanddler } = require('./middlewares/error-handler.middleware')
// const { authorizationRoute } = require('./routes/autorization.route')
// const { routeName } = require('./routeName')
// console.log(routeName.rootDir)

// configurações node API express == ORIGINAL
const app = express()
const PORT = 4040
const HOST = '0.0.0.0'

// configuração da aplicação
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// configuração das rotas.
app.use(initRoute) //  root '/'  padrão de entrada ao app
app.use(statusRoute) // root '/status'
app.use(productsRoute) // root '/status'
app.use(usersRoute) // root '/users' para os comandos em http sem o jwt token
// app.use(authorizationRoute); // root '/token'
// app.use(jwtAuthenticationMiddleware, usersRoute);// root '/users' para os comandos em http

// configração dos handdlers de erro
// app.use(errorHanddler);

app.listen(PORT, HOST, (err) => {
  if (err) throw err
  console.log(`Running on http://localhost:${PORT}`)
})
