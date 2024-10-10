const noteModel = require('../models/NotesModel.js');
const express = require("express");
const router = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save

router.post('/notes', async (req, res) => {
    // Validate request
    if(!req.body.Title) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note
    try{
        const noteData = req.body;
        const note = new noteModel(noteData);
        const newNote = await note.save();
        console.log(`Note ${note.Title} has been added`);
        res.send(newNote);
    }catch(err){
        res.status(500).send(err.message);
        console.log({'Error Message': err.message});
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/notes', async (req, res) => {
    //TODO - Write your code here to returns all note
    try{
        const notes = await noteModel.find({});
        console.log(`Displaying... All Notes`);
        res.send(notes);
    }catch(err){
        res.status(500).send(err.message);
        console.log({'Error Message': err.message});
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/notes/:noteId', async (req, res) => {
    //TODO - Write your code here to return only one note using noteid
    try{
        const note = await noteModel.findById(req.params.noteId);
        if(note){        
            res.send(note);
            console.log(`Displaying... Note ${req.params.noteId}`);
        }else{
            res.status(404).send({message: 'Note not Found'});
        }
    }catch(err){
        res.status(500).send(err.message);
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body.Title) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    try{
        const note = await noteModel.findByIdAndUpdate(req.params.noteId,
            {
                ...req.body,               
                dateUpdated: Date.now()    
            },
            { new: true }
        );
        if(note){        
            res.send(note);
            console.log(`Updating... Note ${req.params.noteId}`);
        }else{
            res.status(404).send({message: 'Note not Found'});
        }
    }catch(err){
        res.status(500).send({message: err.message});
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.params.noteId) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
    try{
        noteModel.findByIdAndDelete(req.params.noteId);
        res.send('Deleting...')
    }catch(err){
        res.status(500).send({message: err.message});
    }
});

module.exports = router