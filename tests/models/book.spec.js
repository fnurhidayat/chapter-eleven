const { Book } = require('../../src/models')

describe('Book', () => {
  describe('schema', () => {
    it('match with schema defined in this test', () => {
      modelAttributes = Object.keys(Book.rawAttributes)
      expectedAttributes = [ 
        'id',
        'title',
        'synopsis',
        'price',
        'createdAt',
        'updatedAt'
      ]
      expect(modelAttributes).toEqual(
        expect.arrayContaining(expectedAttributes)
      )
    })
  })
})
