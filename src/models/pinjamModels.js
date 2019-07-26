const con = require('../configs/db')

module.exports = {
    getPinjams: (idUser) => {
        return new Promise((resolve, reject) => {
            con.query('SELECT pinjam.*,book.title FROM pinjam INNER JOIN book ON book.bookid = pinjam.id_book where id_user= ?',idUser, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getPinjam: (idpinjam) => {
        return new Promise((resolve, reject) => {
            con.query('SELECT pinjam.* FROM pinjam where returned_at is null AND id = ?', idpinjam, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    postPinjam: (data) => {
        return new Promise((resolve, reject) => {
            con.query('INSERT INTO pinjam SET ?',data,(err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    patchBook :(data,bookid) => {
        return new Promise((resolve, reject) => {
            con.query('UPDATE book SET ? WHERE bookid = ?', [data, bookid], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    patchPinjam :(data,idpinjam) => {
        return new Promise((resolve, reject) => {
            con.query('UPDATE pinjam SET ? WHERE id = ?', [data, idpinjam], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
}