const model = require('../models/bookModels2')
const response = require('../helpers/responses')

module.exports = {
    getBooks: (req, res) => {
        let keyword = req.query.search || ""
        model.getBooks(keyword)
            .then((results) => {
                result = results
                response.ok(result, 200, res,keyword)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    getBook: (req, res) => {
        const bookid = req.params.bookid
        model.detailBook(bookid)
            .then((results) => {
                result = results[0]
                response.ok(result, 200, res)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    postBook: (req, res) => {
        const data = {
            writer: req.body.writer,
            created_at: new Date(),
            updated_at: new Date(),
            description: req.body.description,
            title: req.body.title,
            image_url: req.body.image_url,
            location: req.body.location,
            status:false,
            category_id: req.body.category_id
        }
        model.postBook(data)
            .then((results) => {
                console.log(results)
                res.json({ ...data, bookid: results.insertId })
            })
            .catch((err) => {
                console.log(err)
            })
    },
    patchBook: (req, res) => {
        const data = {
            writer: req.body.writer,
            updated_at: new Date(),
            description: req.body.description,
            title: req.body.title,
            image_url: req.body.image_url,
            location: req.body.location,
            category_id: req.body.category_id
        }
        const bookid = req.params.bookid
        model.patchBook(data, bookid)
            .then((results) => {
                response.ok({ ...data, bookid, category: req.body.category }, 200, res)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteBook: (req, res) => {
        const bookid = req.params.bookid
        model.deleteBook(bookid)
            .then((results) => {
                response.ok(results, 200, res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}