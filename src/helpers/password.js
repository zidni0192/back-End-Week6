const crypto = require('crypto')
module.exports = {
    generateSalt: () => {
        return crypto.randomBytes(18/2).toString('hex').slice(0,18)
    },
    setPassword: (password,salt) =>{
        let hash = crypto.createHmac('sha512',salt)
        hash.update(password)
        let value=hash.digest('hex')
        return{
            salt:salt,
            passwordHash:value
        }
    }
}