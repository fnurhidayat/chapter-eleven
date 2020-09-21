const router = require('express').Router()

/*
 * Controllers
 * */
const index = require('./controllers/indexController')
const book = require('./controllers/bookController')


/*
 * Router
 * */
router.get('/', index.root)
router.use(index['404'])
router.use(index['500'])

router.get('/books', book.index)
router.post('/books', book.create)

module.exports = router
