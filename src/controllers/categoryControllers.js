const model = require('../models/categoryModels')
const response = require('../helpers/responses')

module.exports = {
    getCategories : (req,res) =>{
            model.getCateogries()
            .then((results)=>{
                result = results
                response.ok(result,200,res)
            })
            .catch((err)=>{
                console.log(err)
            })
    },
}