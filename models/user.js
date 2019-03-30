import mongoose from 'mongoose'

const schema = mongoose.Schema

let User = new schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model('User', User, 'users')