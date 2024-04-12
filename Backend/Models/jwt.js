const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
    token:{
        required:true,
        type:String

    }
})

const tokens = mongoose.model('token',tokenSchema)

module.exports = tokens;