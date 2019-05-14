var mysql       = require('mysql');
var bcrypt      = require('bcrypt');   
var crypto      = require('crypto');
var config      = require('../helpers/config');
var conexion    = mysql.createConnection(config);


module.exports.user_auth = (req,res,next) => {
    var username = req.body.username;
    var pwd      = req.body.password;
    var session  = req.session;

    let sql = "SELECT * FROM cuenta WHERE Usuario = ?";

    if ( username && pwd ){ 

        var secret = username + new Date();
        var hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');

        conexion.query(sql, [username], (error,results,fields) => {
            if(error){
                res.send(error);
            }
            
            if(results.length > 0){
                if( bcrypt.compareSync(pwd, results[0].Contrasena ) ){
                    session.loggedin = true;
                    session.username = username;
                    session.gc_maxlifetime = 10;
                    session.token    = hash;
                    res.redirect('/home');
                }
            } else {
                res.send('Incorrect Username orcls Password');
            }
            
            res.end();
        });
    } else {
        res.send('Please enter Username and Password! ');
        res.end();
    } 
}

