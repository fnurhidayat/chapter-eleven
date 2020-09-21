const { successResponse, errorResponse } = require('../helpers/responseFormatter')

module.exports = {
  root: (req, res) => {
    res.status(200).json(
      successResponse(undefined, 'Hello world!')
    )
  },

  404: (req, res, next) => {
    res.status(404).json(
      errorResponse('Are you lost?')
    )
  },

  500: (err, req, res, next) => {
    res.status(500).json(
      errorResponse(err.message)
    )
  }
}
