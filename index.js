var http = require("http");
var PORT = process.env.PORT || 8080;
var server = http.createServer((req,res)=>{
    if(req.url=="/")
    {
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.write("Hello World ! /");
        res.end();
    }
    if(req.url=="/about") 
    {
        res.writeHead(200,{"Content-Type":"text/plain"}); 
        res.write("Hello World ! about"); 
        res.end(); 
    }
});

server.listen(PORT,()=>{
    console.log("Connection " + PORT + " ...");
})
