const mongoose = require('mongoose')

const Movie = new mongoose.Schema(
    {
        title: { type: String, required: true },
        years: { type: Number, required: true },
        poster: { type: String, required: true },
        trailer: { type: String, required: true },
        description: { type: String, required: true }
    }
)

module.exports = mongoose.model('movie', Movie)