const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({

    name:String,
    age:Number,
    adresse:String,
    email:{
        type:String,
        require:true,
        unique: true
    }


})

module.exports = mongoose.model('MeriamContact',ContactSchema)