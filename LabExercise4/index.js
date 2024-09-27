const express = require('express');
const app = express();
const SERVER_PORT = 3001;

app.get('/hello', (request, response) =>{
    response.send('<h1>Hello Express Js</h1>');
})

app.get('/user', (request, response) => {
    console.log(request.query)
    const fnm = request.query.fnm;
    const lnm = request.query.lnm;
    const user = {
        firstname: fnm,
        lastname: lnm
    }
    response.send(user);
});

// app.get('/user', (request, response) => {
//     console.log(request.query);
//     const fnm = request.query.fnm;
//     const lnm = request.query.lnm;
//     response.send(`First Name: ${fnm}, Last Name: ${lnm}`);
// });

app.post('/user/:fnm/:lnm', (req, res)=>{
    console.log(req.params);
    const fnm = req.params.fnm;
    const lnm = req.params.lnm;
    const user = {
        firstname: fnm,
        lastname: lnm
    }
    res.send(user);
})

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});