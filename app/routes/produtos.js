module.exports = function (app){

    app.get('/produtos', function(req, res, next){
        var connection = app.infra.connectionFactory();
        var produtos = new app.models.ProdutosDAO(connection);

        produtos.list(function(err, results){
            if(err){
                return next(err);
            }

            res.format({
                html: function(){
                    res.render("produtos/list.ejs", {lista: results});
                },
                json : function(){
                    res.json(results);
                }
            });

        });
    });

    app.get('/produtos/new', function(req, res){
        res.render('produtos/form.ejs', {errors: {}, produto: {}});
    });

    app.post('/produtos', function(req, res){

        req.assert('titulo', 'Titulo é obrigatório').notEmpty();
        req.aspl0sert('preco', 'Preço inválido').isFloat();

        var errors = req.validationErrors(true);
        if(errors){
            res.format({
                html: function(){
                    res.status(400).render('produtos/form.ejs', {errors: errors, produto: req.body});
                },
                json : function(){
                    res.status(400).json(errors);
                }
            });
            return ;
        }

        var connection = app.infra.connectionFactory();
        var produtos = new app.models.ProdutosDAO(connection);

        produtos.save(req.body, function(err, result){
            if(err){
                console.log(err);
            }
            res.redirect("/produtos");
        });

        connection.end();
    });
}
