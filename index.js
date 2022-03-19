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
    if(req.url=="/test") 
    {
        res.writeHead(200,{"Content-Type":"text/plain"}); 
        res.write("Hello World ! test"); 
        res.end(); 
    }
    if(req.url=="/login") 
    {
        res.writeHead(200,{"Content-Type":"text/plain"}); 
        res.write("Hello World ! login"); 
        res.end(); 
    }
    if(req.url=="/search") 
    {
        res.writeHead(200,{"Content-Type":"text/plain"}); 
        res.write("Hello World ! Search"); 
        res.end(); 
    }
    if(req.url=="/registration") 
    {
        res.writeHead(200,{"Content-Type":"text/plain"}); 
        res.write("Hello World ! registration"); 
        res.end(); 
    }
    if(req.url=="/database") 
    {
        res.writeHead(200,{"Content-Type":"text/plain"}); 
        res.write("Hello World ! database"); 
        res.end(); 
    }
});

server.listen(PORT,()=>{
    console.log("Connection " + PORT + " ...");
})
