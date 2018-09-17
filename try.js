var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{
        "content-type":"text/plain"
    });
    response.send('111111');
}).listen(8000,'127.0.0.1');

console.log('create sererver on http~~~');