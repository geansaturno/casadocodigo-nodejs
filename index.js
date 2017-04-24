
var app = require('./config/express.js')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io', io);

var porta = process.env.PORT || 3000;
server = http.listen(porta, function(){

    var host = server.address().address;
    var port = server.address().port;

    console.log('Servidor Rodando em http://%s:%s', host, port);
});
