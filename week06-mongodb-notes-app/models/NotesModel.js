const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const Notes = new mongoose.Schema({
    Title: {
        type: String,
        lowercase: true
    },
    Description:{
        type: String,
        maxLength: 100
    },
    priority: {
        type: String, 
        uppercase: true
    },
    dateAdded: {
        type: Date,
        default: Date.now()
    },
    dateUpdated: {
        type: Date,
        default: Date.now()
    }
})

const Note = mongoose.model('Note',Notes)

module.exports = Note;