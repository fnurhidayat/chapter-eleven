const mock = require('../utils/request')
const index = require('../../src/controllers/indexController')

describe('indexController', () => {
  describe("['500']", () => {
    it('invoke res.json and res.status', done => {
      const req = mock.request()
      const res = mock.response()
      const err = new Error('Something is broken!')

      index['500'](err, req, res)

      expect(res.json).toBeCalledWith({
        status: false,
        message: 'Something is broken!'
      })

      expect(res.status).toBeCalledWith(500)
      done()
    })
  })
})
