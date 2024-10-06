const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs')
const router = express.Router();

app.use(express.json())


/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/

router.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './home.html'));
});

/*
- Return all details from user.json file to client as JSON format
*/

// Use fs.readFileSync (simpler for small files)
router.get('/profile', (req, res) => {
  const user = fs.readFileSync(path.join(__dirname, './user.json'));
  res.json(JSON.parse(user));
});


/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.post('/login/:username/:password', (req,res) => {
  const user = JSON.parse(fs.readFileSync(path.join(__dirname, './user.json')));
  const username = req.params.username;
  const password = req.params.password;
  console.log(user.username, user.password);
  if (user.username == username){
    if(user.password == password){
      res.send({
        "status": true,
        "message": "User is valid"
      })
    }else{
      res.send({
         status: false,
        message: "Password is invalid"
      })
    }
  }else{
    res.send({
      status: false,
        message: "User Name is invalid"
    })
  }
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req,res) => {
  const username = req.params.username;
  res.send(`<b>${username} succesfully logout</b>`);
});

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
// app.use((err,req,res,next) => {
//   res.send('This is error router');
// });
router.get('/error', (req, res)=>{
  throw new Error("This is a forced error");
})

const errorHandlerMiddleware = (err, req,res,next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
}

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));  

app.use('/', router);
app.use(errorHandlerMiddleware);


app.listen(process.env.port || 3000);

console.log('Web Server is listening at port '+ (process.env.port || 3000));