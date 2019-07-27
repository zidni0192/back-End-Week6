const model = require('../models/pinjamModels')
const response = require('../helpers/responses')

module.exports = {
    getPinjams: (req, res) => {
        const id = req.body.id
        const role = req.body.role
        if (role === "Librarian") {
            model.getPinjams(null,role)
            .then((results) => {
                result = results
                response.ok(result, 200, res)
            })
            .catch((err) => {
                console.log(err)
            })
        } else {
            model.getPinjams(id)
                .then((results) => {
                    result = results
                    response.ok(result, 200, res)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    getPinjam: (req, res) => {
        model.getPinjam(req.params.idpinjam)
            .then((results) => {
                result = results
                response.ok(result, 200, res)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    postPinjam: (req, res) => {
        const data = {
            user_id: req.body.id_user,
            id_book: req.body.id_book,
            borrowed_at: new Date(),
            expired_at: new Date(new Date().setDate(new Date().getDate() + 7))
        }
        const dataBook = {
            status: true
        }
        const bookid = req.body.id_book
        model.postPinjam(data)
            .then((results) => {
                result = results
                response.ok({ ...data }, 200, res)
            })
            .catch((err) => {
                console.log(err)
            })
        model.patchBook(dataBook, bookid)
            .then((results) => {
            })
            .catch((err) => {
                console.log(err)
            })
    },
    patchPinjam: (req, res) => {
        const data = {
            penalty: req.body.denda,
            returned_at: req.body.returned_at || null
        }
        const idpinjam = req.params.idpinjam
        let status = req.body.status || false
        const dataBook = { status: status }
        const bookid = req.body.id_book || 0
        model.patchPinjam(data, idpinjam)
            .then((results) => {
                response.ok(returned_at, 200, res)
            })
            .catch((err) => {
                console.log(err)
            })
        model.patchBook(dataBook, bookid)
            .then((results) => {
            })
            .catch((err) => {
                console.log(err)
            })

    },
    patchBook: (req, res) => {
    },
}