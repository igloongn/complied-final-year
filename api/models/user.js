const mongoose = require('mongoose');
const Schema = mongoose.Schema
const structure = {
    username: {
        type: String,
        // required: true,
        unique: true
    },    
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
}
const userSchema = new Schema(structure, { timestamps: true })
const user = mongoose.model('User', userSchema)
module.exports = user