const http = require("http");
// const data = {
//     firstName: 'Micheal',
//     lastName: 'Jadkson'
// };
const fs = require('fs');

const site = http.createServer( function(req, res) {
    // console.log("Hello World");
    // console.log(req.headers);
    // console.log(req.url);
    //res.setHeader('Content-Type', 'text/html');
    //res.write('<h1>Hello World</h1>');

    // res.setHeader('Content-Type', 'application/json');
    // res.write(JSON.stringify(data));
    // res.end();

    fs.readFile('test.json', function(error, data) {
        let dataObj = JSON.parse(data);
        res.setHeader('Content-Type', 'application/json');
        res.write(data);
        res.write(`First name: ${dataObj.firstName} Last name: ${dataObj.lastName}`)
        res.end();
    });
});

site.listen(3000);