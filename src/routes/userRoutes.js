const express = require('express')
const Route = express.Router()
const controller = require('../controllers/userControllers')
const Auth = require('../helpers/auth')
Route.all('/*',Auth.authInfo)
.get('/',controller.getUsers)
.post('/register',controller.postUser)
.post('/login',controller.getByEmail)
.post('/getToken',Auth.authInfo,Auth.accessToken)

module.exports = Route