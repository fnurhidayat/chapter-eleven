module.exports = {
  request: (args = {}) => { 
    const { body = {}, headers = {}, query = {} } = args
    return {
      body,
      headers,
      query
    }
  },

  response: () => {
    res = {}
    res.json = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)
    return res
  }
}
