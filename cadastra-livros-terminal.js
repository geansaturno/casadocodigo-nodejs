var http = require('http');

var config = {
    hostname: 'localhost',
    port:3000,
    path:'/produtos',
    method: 'post',
    headers: {
        'Accept':'application/json',
        'Content-type':'application/json'
    }
};

var cliente = http.request(config, function(res){
    console.log(res.statusCode);

    res.on('data', function(body){
        console.log('Corpo :'+ body);
    });
});

var produto = {
    titulo : '',
    descricao : 'Este é um ótimo livro java',
    preco: 100
};

cliente.end(JSON.stringify(produto));
