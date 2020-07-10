const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: String,
    discription: String,
    
})