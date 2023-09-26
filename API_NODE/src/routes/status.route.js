const { Router } = require('express')
const { connectionDb } = require('../db_conection')
const { routeName } = require('../routeName')
const { StatusCodes } = require('http-status-codes')
// const { errorHandler } = require('../middlewares/error-handler.middleware')

const statusRoute = Router()

let tryIncomplete = true

statusRoute.get(routeName.statusDir, async (req, res) => {
  console.log('get do status route', routeName.statusDir)
  try {
    const query = 'SELECT * FROM RAW_products LIMIT 1'
    const statusQuery = await connectionDb.query(query)

    if (statusQuery.rowCount !== 0) {
      res.status(StatusCodes.OK).send(`<h3>API conectada ao db SQL  => vá ao <a target="_blank" href="${routeName.rootDir}">LINK<a/><h3/>`)
      tryIncomplete = false
    }
  } catch (error) {
    if (tryIncomplete === true) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`<h3>db SQL - sem conexão!!  Contate ao ADMIN => vá ao <a href="${routeName.userDir}">LINK<a/><h3/>`)
    }
    console.log('entrou no catch erro no request, statusRoute.get(STATUS_DIR)')
    // throw errorHandler
    throw error
  }
})

exports.statusRoute = statusRoute
