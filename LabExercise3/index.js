var http = require("http");
//TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");
let employees = require('./Employee.js');
const { stringify } = require("querystring");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>Welcome to Lab Exercise 03</h1>');
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>Welcome to Emplyee Page</h1>');
            res.write(JSON.stringify(employees));
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>Welcome to Emplyee/Name Page</h1>');
            let fullName = []
            for (let emp in employees){
                fullName.push(employees[emp].firstName + employees[emp].lastName);
            }
            fullName.sort()
            res.write(JSON.stringify(fullName));
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>Welcome to Emplyee/Salary Page</h1>');
            let totalSalary = 0;
            for(let x in employees){
                totalSalary += employees[x].Salary;
            }
            const sum = {
                'total_salary' : totalSalary
            }
            res.write(JSON.stringify(sum));
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})