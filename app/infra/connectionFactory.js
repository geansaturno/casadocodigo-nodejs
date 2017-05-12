var mysql = require('mysql');

function createDbConection() {

    console.log(process.env.NODE_ENV);
    var connection = null;
    if(!process.env .NODE_ENV){
        connection = mysql.createConnection({
            "host": "localhost",
            "user": "root",
            "password" : "",
            "database" : "casadocodigo",
        });
    }

    if(process.env.NODE_ENV == "test"){
        console.log();
        connection = mysql.createConnection({
            "host": "localhost",
            "user": "root",
            "password" : "",
            "database" : "test",
        });
    }

    return connection;
}

module.exports = function(){
    return createDbConection;
};
