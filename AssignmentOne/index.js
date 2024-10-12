const express = require('express');
const mongoose = require('mongoose')
const userRouter = require('./router/user')
const empRouter = require('./router/emp')
const SERVER_PORT = process.env.NODE_ENV || 3002;

const app = express();
const DB_URL = "mongodb+srv://admin:pass@cluster0.nnsxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.Promise = global.Promise;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.use('/api/v1/user', userRouter);
app.use('/api/v1/emp', empRouter);


app.listen(SERVER_PORT, ()=>{
    console.log(`Server is running on port: ${SERVER_PORT}`)
})