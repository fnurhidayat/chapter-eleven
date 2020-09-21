const mock = require('../utils/request')
const bookController = require('../../src/controllers/bookController')
const { Book } = require('../../src/models')
const book = require('../fixtures/book')
const database = require('../supports/database.js')

describe('bookController', () => {
  database.clean(Book)
  database.create(Book, 5)

  describe("create", () => {
    describe('with correct attributes', () => {
      it('invoke res.json and res.status with 201', async done => {
        const req = mock.request({ body: book.build() })
        const res = mock.response()
        await bookController.create(req, res)
        
        expect(res.json).toBeCalledWith({
          status: true,
          message: 'Book created!',
          data: expect.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
            synopsis: expect.any(String),
            price: expect.any(Number),
            createdAt: expect.any(Date),
            updatedAt: expect.any(Date)
          })
        })

        expect(res.status).toBeCalledWith(201)
        done()
      })
    })

    describe('with incorrect attributes', () => {
      it('invoke res.json and res.status with 422', async done => {
        const req = mock.request()
        const res = mock.response()
        await bookController.create(req, res)
        
        expect(res.json).toBeCalledWith({
          status: false,
          message: expect.any(String)
        })

        expect(res.status).toBeCalledWith(422)
        done()
      })
    })
  })
})
