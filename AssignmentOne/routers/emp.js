const express = require('express'); 
const router = express.Router();
const empSchema = require('../model/empSchema')

router.get('/employees', async (req, res) =>{
    try{
        const allEmployees = await empSchema.find({});
        res.status(200).send(allEmployees);
    }catch(err){
        res.status(500).send(err)
    }
})

router.post('/employees', async (req, res) =>{
    if(!req.body.email){
        res.status(400).send({message: 'cannot pass empty request'});
    }
    try{
        const empData = req.body;
        const emp = new empSchema(empData);
        const newemp = await emp.save();
        console.log('Employee has been added');
        res.status(201).send({
            message: "Employee created successfully.",
            employee_id: newemp.id
        })
    }catch(err){
        res.status(500).send(err)
    }
})

router.get('/employees/:eid', async (req, res)=>{
    const emp = await empSchema.findById(req.params.eid);
    if(emp){
        res.status(200).send(emp)
    }else{
        res.status(404).send({message: `cannot find the employee with id ${req.params.eid}`})
    }
})

router.put('/employees/:eid', async (req, res)=>{
    if(!req.body.email){
        res.status(400).send('request body cannot be empty');
    }
    try{
        const emp = await empSchema.findByIdAndUpdate(req.params.eid, {
            ...req.body,
            updated_at: Date.now()
        },
        {new: true});
        res.status(200).send({message: "Employee details updated successfully."})
    }catch(err){
        res.status(500).send(err)
    }
})

router.delete('/employees', async (req, res)=>{
    try{
        const eid = req.query.eid;
        await empSchema.deleteOne({id: eid});
        res.status(204).send({message: "Employee deleted successfully."})
    }catch(err){
        res.status(500).send(err);
    }
})


module.exports = router;