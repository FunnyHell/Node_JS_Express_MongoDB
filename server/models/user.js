const mongoose = require('mongoose'),
    Schema = mongoose.Schema


const Users = new Schema({
    name: {
        type: String, unique: true, required: true
    },
    email: {
        type: String, unique: true, required: true
    },
    password: {
        type: String, required: true
    }
}, { timestamps: true })

const User = mongoose.model('Users', Users)

module.exports = User;