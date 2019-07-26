const controller = require('../controllers/bookControllers')
const app = require('express')
const Route = app.Router()
const Auth = require('../helpers/auth')


    Route.all('/*',Auth.authInfo)
    .get('/',controller.getBooks)
    .get('/:bookid',controller.getBook)
    .post('/',controller.postBook)
    .patch('/:bookid',controller.patchBook)
    .delete('/:bookid',controller.deleteBook)

module.exports = Route