var express = require('../config/express.js')();
var supertest = require('supertest')(express);

describe("#ProdutosController", function(){

    beforeEach(function(done){
        var conn = express.infra.connectionFactory();
        conn.query('delete from livros', function(ex, result){
            if(!ex){
                // conn.end();
                done();
            } else {
                console.log(ex);
            }
        })
    });

    it('#listagem', function(done){
        supertest.get('/produtos/')
        .set('Accept', 'application/json')
        .expect('Content-type', /json/)
        .expect(200, done);
    });

    it('#cadastro de produto inválido', function(done){
        supertest.post('/produtos/')
        .send({titulo:"", descricao: "", preco:12})
        .expect(400, done);
    });

    it('#cadastro sem titulo', function(done){
        supertest.post('/produtos/')
        .send({titulo:"", descricao: "descricao", preco:12})
        .expect(400, done);
    });

    it('#cadastro', function(done){
        supertest.post('/produtos/')
        .send({titulo: 'Teste', descricao:"descricao", preco:50})
        .expect(302, done);
    });
});
