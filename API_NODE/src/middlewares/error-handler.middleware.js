const { DatabaseError } = require('../models/errors/database.error.model')
const { ForbiddenError } = require('../models/errors/forbidden.error.model')
const { StatusCodes } = require('http-status-codes')

function errorHandler (error, req, res) {
  if (error instanceof DatabaseError) {
    res.sendStatus(StatusCodes.BAD_REQUEST)
  } else if (error instanceof ForbiddenError) {
    res.sendStatus(StatusCodes.FORBIDDEN)
  } else {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

exports.errorHandler = errorHandler
