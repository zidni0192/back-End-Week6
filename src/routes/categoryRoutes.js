const controller = require('../controllers/categoryControllers')
const app = require('express')
const Route = app.Router()
const Auth = require('../helpers/auth')

    Route.all('/*',Auth.authInfo)
    .get('/',controller.getCategories)

module.exports = Route