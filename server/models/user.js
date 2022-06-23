const mongoose = require('mongoose'),
    Schema = mongoose.Schema


const Users = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    }
}, { timestamps: true })

const User = mongoose.model('Users', Users)

module.exports = User;