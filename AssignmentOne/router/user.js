const express = require('express');
const router = express.Router();
const userSchema = require('../model/userSchema.js')
const bcrypt = require("bcrypt")


router.post('/signup', async (req, res)=>{
    if(!req.body.username){
        res.status(400).send({message: 'Request cannot be empty'});
    }

    try{
        const userData = req.body;
        const user = new userSchema(userData);
        const newuser = await user.save();
        console.log(`User: ${user.username} has been added`);
        console.log(newuser.password);
        res.status(201).send({
            message: "User created successfully",
            user_id: newuser.id
        });
    }catch(err){
        res.status(500).send({message: err.message})
    }
})

router.post('/login', async (req, res)=>{
    if(!req.body.username && !req.body.email){
        res.status(400).send({message: 'Request cannot be empty'});
    }
    try{
        let user = null;
        if(req.body.username){
            user = await userSchema.findOne({username: req.body.username});
        }
        if(req.body.email){
            user = await userSchema.findOne({email: req.body.email});
        }
        if(user){
            const matchPw = await bcrypt.compare(req.body.password, user.password);
            if(matchPw){            
                res.status(201).send({message: "Login Successfully"});
            }else{
                res.status(400).send({message:"Password doesn't match your email. Please try again"})
            }
        }else{
            res.status(404).send({message: "Your account cannot be found. Please sign up"})
        }
    }catch(err){
        res.status(500).send({message: err.message})
    }
})

module.exports = router;