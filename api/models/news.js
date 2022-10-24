const mongoose = require('mongoose');
const Schema = mongoose.Schema
const structure = {
    postedBy: {
        type: String,
        default: 'Admin'
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: 'https://image.shutterstock.com/image-illustration/illustration-photo-taken-space-first-600w-2177907377.jpg'
    },
    detail: {
        type: String,
        required: true
    },
}
const newsSchema = new Schema(structure, { timestamps: true,  toJSON: { virtuals: true }  })
const news = mongoose.model('News', newsSchema)
module.exports = news