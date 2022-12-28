// ************************ Task 1 ************************
// const http = require("http");
// const os = require('os');
// const path = require('path');
// const notes = '/users/projects/notes.txt'

// http.createServer((request, response) => {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write(`
//         <h3>${os.userInfo().username}</h3>
//         <h3>${os.type()}</h3>
//         <h3>${os.release() }</h3>
//         <h3>${os.uptime()}</h3>
//         <h3>${path.dirname(notes)}</h3>
//         <h3>${path.basename(notes)}</h3>
//     `);

//     response.end()
// }).listen(5000);
// console.log("Server is running at http://127.0.0.1:5000");

// ************************ Task 2 ************************
const personalmodule = require('./personalmodule');
console.log(personalmodule.greetings());
const http = require("http");

http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`<h3>${personalmodule.greetings() }</h3>`);
    response.end()
}).listen(5000);
console.log("Server is running at http://127.0.0.1:5000");
