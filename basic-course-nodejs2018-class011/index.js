const http = require("http");
const fs = require("fs");

const server = http.createServer( ( request, response ) => {
    fs.readFile("./basic-course-nodejs2018-class011/index.html", ( e, data ) => {
        if (e) {console.error(e); return;}
        response.end(data);
    });
});

console.log('Initializing the server...');
server.listen(3000);