require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.SERVER_PORT
const bodyParser = require('body-parser')
const bookRouter = require('./src/routes/bookRoutes')
const categoryRouter = require('./src/routes/categoryRoutes')
const pinjamRouter = require('./src/routes/pinjamRoutes')
const userRouter = require('./src/routes/userRoutes')
const cors = require('cors')
const xss = require('x-xss-protection')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const whitelist = "http://127.0.0.1,http://192.168.6.121"
const corsOption = (req, callback) => {
  
  console.log(req.header('Origin'));
  
  if (whitelist.split(',').indexOf(req.header('Origin')) !== -1) {
    console.log('Success')
    return callback(null, {
      origin: true
    })
  } else {
    console.log('Failed')
    return callback('Not Allowed', {
      origin: false
    })
  }
}
app.use(xss())
app.use(cors())
app.options('*',cors(corsOption))
app.listen(port,()=>{
    console.log(`We are running on port ${port}`)
})
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods' , '*')
//     res.setHeader('Access-Control-Allow-Headers' , '*')
//     next();
//   });
app.use(express.static('./src/uploads'))
app.use('/books',bookRouter)
app.use('/user',userRouter)
app.use('/category',categoryRouter)
app.use('/pinjam',pinjamRouter)