var mysql       = require('mysql');
var bcrypt      = require('bcrypt');   
var crypto      = require('crypto');
var config      = require('../helpers/config');
var fs          = require('fs');
var conexion    = mysql.createConnection(config);


module.exports.getimage = (req,res,next) => {
    let name = req.params.name;

    const path = './images/' + name;

    try {
        let img = fs.readFileSync(path);
        res.writeHead(200, {'Content-Type': 'image/gif' });
        res.end(img, 'binary');
    }
    catch(error) {
        console.log(error)
        res.writeHead(404, {'Content-Type': 'text/plain' });
        res.end('Image not found ! \n');
    }
}

