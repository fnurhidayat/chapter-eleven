const mock = require('../utils/request')
const index = require('../../src/controllers/indexController')

describe('indexController', () => {
  describe("['404']", () => {
    it('invoke res.json and res.status', done => {
      const req = mock.request()
      const res = mock.response()
      index['404'](req, res)

      expect(res.json).toBeCalledWith({
        status: false,
        message: 'Are you lost?'
      })

      expect(res.status).toBeCalledWith(404)
      done()
    })
  })
})
