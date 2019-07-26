const con = require('../configs/db')

module.exports = {
    getCateogries: () => {
        return new Promise((resolve, reject) => {
            con.query('SELECT * FROM category', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
    
}