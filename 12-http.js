var http = require('http');

var server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to my server')
    }
    if(req.url === '/about'){
        res.end('here is a short story')
    }
    res.end(`
        <h1>OOOPS!</h1>
        <p>We cant find page</p>
        <a href="/">Back to home</a>
    `)
    
})

server.listen(5000)