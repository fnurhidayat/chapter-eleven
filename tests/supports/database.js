const path = require('path')
module.exports = {
  create: (model, count = 1) => beforeAll(() => {
    const fixture = require(
      path.resolve(__dirname, '..', 'fixtures', model.name.toLowerCase())
    )
    const data = []
    for (let i = 0; i <= count; i++)
      data.push(fixture.build())
    return model.bulkCreate(data)
  }),
  clean: model => afterAll(
    () => model.destroy({
      truncate: true,
      cascade: true,
      restartIdentity: true
    })
  )
}
