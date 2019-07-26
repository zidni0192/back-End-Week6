const connection = require('../configs/db')

module.exports = {
    getUsers:()=>{
        return new Promise((resolve,reject)=>{
            connection.query("SELECT user.*,role.name FROM user INNER JOIN role ON user.role_id = role.id",(err,result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(err)
                }
            })
        })
    }
    ,
    postUser:(data)=>{
        return new Promise((resolve,reject)=>{
            connection.query('INSERT INTO user SET ?',data,(err,result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(err)
                }
            })    
        })
    },
    getByEmail:(email) =>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT user.*,role.name as role FROM user INNER JOIN role ON role.id=user.role_id WHERE email=?',email,(err,result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(err)
                }
            })
        })
    }
}