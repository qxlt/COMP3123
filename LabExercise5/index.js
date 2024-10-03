const express = require('express')
const app = express()
const empRouter = require('./emp')
const userRouter = require('./user')
const SERVER_PORT = process.env.PORT || 3000;


app.use(empRouter)
app.use(userRouter)

app.listen(SERVER_PORT, () => {
    console.log('Server is running on port 3000');
})
