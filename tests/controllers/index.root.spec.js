const mock = require('../utils/request')
const { root } = require('../../src/controllers/indexController')

describe('indexController', () => {
  describe('.root', () => {
    it('invoke res.json and res.status', done => {
      const req = mock.request()
      const res = mock.response()
      root(req, res)

      expect(res.json).toBeCalledWith({
        status: true,
        message: 'Hello world!'
      })

      expect(res.status).toBeCalledWith(200)
      done()
    })
  })
})
