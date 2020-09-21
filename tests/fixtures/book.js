const faker = require('faker')
const { Book } = require('../../src/models')

module.exports = {
  build: (args = {}) => {
    const {
      title = faker.random.word(),
      synopsis = faker.lorem.paragraphs(),
      price = faker.commerce.price()
    } = args

    return { title, synopsis, price }
  },

  create: args => {
    const attributes = this.build(args)
    return Book.create(attributes)
  }
}
