
var app = require('./config/express.js')();

app.listen(3000, function(){
    console.log('Servidor Rodando na porta ', 3000);
});