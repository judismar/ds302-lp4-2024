var http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer((req, res) => { //função anônima como argumento para callback
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Primeiro programa Javascript do Andrey, do lado do servidor, usando Node.js.\n');
});

function f(){
    console.log('Servidor executando em http://' + hostname + ':' + port);
}

server.listen(port, hostname, f); //fesolvendo o problema de callback com função que tem nome
