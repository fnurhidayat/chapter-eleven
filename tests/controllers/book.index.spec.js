const mock = require('../utils/request')
const bookController = require('../../src/controllers/bookController')
const { Book } = require('../../src/models')
const book = require('../fixtures/book')
const database = require('../supports/database.js')

describe('bookController', () => {
  database.clean(Book)
  beforeAll(() => {
    books = []
    for (let i = 0; i <= 5; i++)
      books.push(book.build())

    return Book.bulkCreate(books)
  })

  describe("index", () => {
    it('invoke res.json and res.status', async done => {
      const req = mock.request()
      const res = mock.response()
      await bookController.index(req, res)

      expect(res.json).toBeCalledWith({
        status: true,
        message: 'Books retrieved!',
        data: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
            synopsis: expect.any(String),
            price: expect.any(Number),
            createdAt: expect.any(Date),
            updatedAt: expect.any(Date)
          })
        ])
      })

      expect(res.status).toBeCalledWith(200)
      done()
    })
  })
})
