function ProdutosDAO(connection){
    this._connection = connection;
}

ProdutosDAO.prototype.list = function(callback){
    this._connection.query("select * from livros", callback);
};

ProdutosDAO.prototype.save = function(values, callback) {
    this._connection.query("insert into livros set ?", values, callback);
};

module.exports = function(){
    return ProdutosDAO;
};
