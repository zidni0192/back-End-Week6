const controller = require('../controllers/bookControllers')
const app = require('express')
const Route = app.Router()
const Auth = require('../helpers/auth')
const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./src/uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,`${new Date().getTime()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

    Route.all('/*')
    .post('/donate',upload.single('image'),controller.postDonate)
    .get('/',controller.getBooks)
    .get('/:bookid',controller.getBook)
    .post('/',upload.single('image') ,controller.postBook)
    .patch('/:bookid',controller.patchBook)
    .delete('/:bookid',controller.deleteBook)

module.exports = Route