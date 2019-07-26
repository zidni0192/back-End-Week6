const con = require('../configs/db')
module.exports = {
    bookList : (callback)=>{
        con.query('SELECT book.*,category.name as category FROM book LEFT JOIN category ON category.categoryid = book.category_id',(err,result)=>{
            callback(err,result)
        })
    },
    bookByCategory : (callback)=>{
        con.query('SELECT book.*,category.name as category FROM book LEFT JOIN category ON category.categoryid = book.category_id',(err,result)=>{
            callback(err,result)
        })
    }, 
    detailBook:(bookName)=>{
        con.query('SELECT book.*,category.name as category FROM book LEFT JOIN category ON category.categoryid = book.category_id AND book.name LIKE ?',bookName,(err,result)=>{
            console.log(result)            
            callback(err,result)
        })
    }
}