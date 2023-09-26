const { Router } = require('express')
const { connectionDb } = require('../db_conection')
const { routeName } = require('../routeName')
const { StatusCodes } = require('http-status-codes')
// const { errorHandler } = require('../middlewares/error-handler.middleware')

const productsRoute = Router()

let tryIncomplete = true

productsRoute.get(routeName.prodDir, (req, res) => {
  console.log(routeName.prodDir)
  try {
    connectionDb.query('SELECT * FROM RAW_products',
      (error, results) => {
        if (error) throw error
        if (results.rowCount !== 0) {
          tryIncomplete = false
          res.status(StatusCodes.OK).send({
            string:
            results.map(
              item => ({
                name: item.name,
                price: item.price
              })
            )
          })
        }
      }
    )
  } catch (error) {
    if (error) {
      console.log('erro na arrow function - Erro ao carregar a query')
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('<h1>Erro ao carregar a query<h1/>')
      console.log('entrou no catch if error no request, productsRoute.get(PROD_DIR)')
      // throw errorHandler
      throw error
    }
    if (tryIncomplete === true) {
      console.log('query retornou sem rows - Erro ao carregar a query')
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('<h1>Erro ao carregar a query<h1/>')
      console.log('entrou no catch if tryIncomplete no request, productsRoute.get(PROD_DIR)')
      // throw errorHandler
      throw error
    }
  }
})

exports.productsRoute = productsRoute

// productsRoute.get('/status', async (req, res) => {
//   try {
//     const query = 'SELECT * FROM RAW_products LIMIT 100'
//     const statusQuery = await connectionDb.query(query)

//     if (statusQuery.rowCount !== 0) {
//       res.status(StatusCodes.OK).send({ string: `API conectada ao db SQL  => vá ao ${PROD_DIR}` })
//       tryIncomplete = false
//     }
//   } catch (error) {
//     if (tryIncomplete === true) {
//       res.status(StatusCodes.OK).send({ string: `db SQL - sem conexão!!  Contate ao ADMIN => vá ao ${USER_DIR}` })
//     }
//     throw errorHandler
//   }
// })
