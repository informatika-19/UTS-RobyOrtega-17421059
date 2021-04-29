const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        default: '',
        type: String
    },
    email: {
        default: '',
        type: String
    },
    password: {
        default: '',
        type: String
    },
    namalengkap: {
        default: '',
        type: String
    },
    alamat: {
        default: '',
        type: String
    }, 
    role: {
        type: Number,
        default:  2,
    }
})

module.exports = mongoose.model('user', userSchema)