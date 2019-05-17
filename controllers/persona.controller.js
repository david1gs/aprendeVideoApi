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
    connection.query('SELECT * FROM cuenta c JOIN persona p ON p.idCuenta=c.idCuenta WHERE (Baja=0)', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
    connection.end();
}

exports.persona = (req, res, next) => {   
    let connection = mysql.createConnection(config);
    connection.connect(); 
    connection.query('', [], function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
    connection.end();
}

exports.persona_save = (req, res, next) => {
    var idCuenta;
    let connection = mysql.createConnection(config);
    connection.connect(); 
    connection.query('INSERT INTO Cuenta(Usuario, Contrasena, Correo, Baja) VALUES(?,?,?,?)', [req.body.Usuario, req.body.Contrasena, req.body.Correo, 0], function (error, results, fields) {
        if (error) throw error;
        idCuenta = results.insertId;
        //res.json(results);
        connection.query('INSERT INTO Persona(idCuenta, Nombre, Apellido, Saldo) VALUES(?,?,?,?)', [idCuenta, req.body.Nombre, req.body.Apellido, 100], function (error, results, fields) {
            if (error) throw error;
            res.json(results);
        });
        connection.end();
    });    
    //connection.end();
}

exports.persona_delete = (req, res, next) => {
    let connection = mysql.createConnection(config);
    connection.connect(); 
    connection.query('UPDATE Cuenta SET Baja=? WHERE (idCuenta=?)', [1, req.body.idCuenta], function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
    connection.end();
}

exports.persona_update = (req, res, next) => {
    let connection = mysql.createConnection(config);
    connection.connect(); 
    connection.query('UPDATE Cuenta SET Usuario=?, Contrasena=?, Correo=? WHERE (idCuenta=?)', [req.body.Usuario, req.body.Contrasena, req.body.Correo, req.body.idCuenta], function (error, results, fields) {
        if (error) throw error;
        //res.json(results);
    });
    connection.query('UPDATE Persona SET Nombre=?, Apellido=? WHERE (idCuenta=?)', [req.body.Nombre, req.body.Apellido, req.body.idCuenta], function (error, results, fields) {
        if (error) throw error;
        //res.json(results);
    });
    connection.end();
}