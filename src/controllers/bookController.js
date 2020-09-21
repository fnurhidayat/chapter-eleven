const { successResponse, errorResponse } = require('../helpers/responseFormatter')
const { Book } = require('../models')

module.exports = {
  index: async(req, res) => {
    const books = await Book.findAll()
    res.status(200).json(
      successResponse(books, 'Books retrieved!')
    )
  },

  create: async (req, res) => {
    try {
      const book = await Book.create(req.body)
      res.status(201).json(
        successResponse(book, 'Book created!')
      )
    }

    catch(err) {
      res.status(422).json(
        errorResponse(err.message)
      )
    }
  }
}
