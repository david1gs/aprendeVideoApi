var mysql      = require('mysql');
var config     = require('../helpers/config');
 
/*
    productCode
    productName
    productLine
    productScale
    productVendor
    productDescription
    quantityInStock
    buyPrice
    MSRP
*/

exports.persona_list = (req, res, next) => {
    let connection = mysql.createConnection(config);
    connection.connect(); 
    connection.query('SELECT * FROM cuenta c JOIN persona p ON p.idCuenta=c.idCuenta;', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
    connection.end();
}

/*exports.persona = (req, res, next) => {   
    let connection = mysql.createConnection(config);
    connection.connect(); 
    connection.query('', [], function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
    connection.end();
}*/

/*exports.persona_save = (req, res, next) => {
    var product = req.body;
    let connection = mysql.createConnection(config);
    connection.connect(); 
    connection.query('', [], function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
    connection.end();
}*/

/*exports.persona_delete = (req, res, next) => {
    let connection = mysql.createConnection(config);
    connection.connect(); 
    connection.query('', [], function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
    connection.end();
}*/

/*exports.persona_update = (req, res, next) => {
    var product = req.body;
    let connection = mysql.createConnection(config);
    connection.connect(); 
    connection.query('', [], function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
    connection.end();
}*/