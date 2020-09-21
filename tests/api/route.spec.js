const app = require('../../src')
const routes = app
  ._router
  .stack
  .find(i => i.name === 'router')
  .handle
  .stack
const endpoints = routes.filter(route => route.name === 'bound dispatch')

describe('Routes', () => {
  it('contains 404 and 500 handler', () => {
    expect(routes.map(route => route.name)).toEqual(
      expect.arrayContaining(['404', '500'])
    )
  })
})

describe('Endpoints', () => {
  it('contains expected endpoints', () => {
    expectedEndpoints = [
      { handlers: ['root'], method: 'get', path: '/' },
      { handlers: ['index'], method: 'get', path: '/books' },
      { handlers: ['create'], method: 'post', path: '/books' }
    ]

    endpointList = endpoints.map(endpoint => {
      return ({
        handlers: endpoint.route.stack.map(i => i.name),
        method: Object.keys(endpoint.route.methods)[0],
        path: endpoint.route.path
      })
    })
    expect(endpointList).toEqual(
      expect.arrayContaining(expectedEndpoints)
    )
  })
})
