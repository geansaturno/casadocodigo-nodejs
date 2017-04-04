var mysql = require('mysql');

function createDbConection() {

    console.log(process.env.NODE_ENV);

    if(!process.env .NODE_ENV){
        var connection = mysql.createConnection({
            "host": "localhost",
            "user": "root",
            "password" : "",
            "database" : "casadocodigo",
        });
    }

    if(process.env.NODE_ENV == "test"){
        console.log();
        var connection = mysql.createConnection({
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
}
