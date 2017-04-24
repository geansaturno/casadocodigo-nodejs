module.exports = function(app){

    app.get('/promocoes/new', function(req, res, next){
        var conn = app.infra.connectionFactory();

        var prodDAO = new app.models.ProdutosDAO(conn);

        prodDAO.list(function(err, livros){

            if(err){
                next(err);
            }

            console.log(livros);

            res.render('promocoes/form', {livros: livros, promocao: {}, erro: {}});
        });
    });

    app.post('/promocoes', function(req, res){
        console.log(req.body);
        app.get('io').emit('novaPromocao', req.body);
        res.redirect(301, '/promocoes/new');
    });
}
