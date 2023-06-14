const mongoose = require('mongoose')

const EmailSchema = new mongoose.Schema({
    email : {
        type : String,
        require : true
    },
    firstName : {
        type : String,
        require : true
    },
    lastName : {
        type : String,
        require : true
    },
    mobileNumber : {
        type : Number,
        require : true
    },
    interestedIn : {
        type : String,
        require : true
    },
    noOfScreens : {
        type : String,
        require : true
    },
    features : {
        type : Array,
        require : true
    },
    language : {
        type : String,
        require : true
    },
    timeLine : {
        type : String,
        require : true
    },
    message : {
        type : String,
        require : true
    },

}, { timestamps: true })


const email = mongoose.model('email', EmailSchema)

module.exports = email