const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.write("It is the home page");
        res.end();
    }
    if(req.url === "/api/courses"){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    } 
})

server.listen(1212);
console.log("Listening on 1212...");