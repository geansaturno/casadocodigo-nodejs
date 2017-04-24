module.exports = function(app){

    app.get("/", function(req, res, next){

        var conn = app.infra.connectionFactory();
        var produtosDAO  = new app.models.ProdutosDAO(conn);

        produtosDAO.list(function(err, results){


            if(err){
                console.error('Erro em get home', err);
                return next();
            }

            console.log('resultado', results);
            console.log('titulo', results['0'].titulo);
            res.format({
                html: function(){
                    res.render('home/index.ejs', {livros:results});
                },
                json: function(){
                    res.json(results);
                }
            });
        });

        conn.end();
    });
}
