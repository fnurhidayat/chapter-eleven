module.exports = {
  successResponse: (data, message = 'Success', meta = undefined) => ({
    status: true,
    message,
    meta,
    data
  }),

  errorResponse: message => ({
    status: false,
    message
  })
}
