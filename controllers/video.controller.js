var mysql       = require('mysql');
var bcrypt      = require('bcrypt');   
var crypto      = require('crypto');
var config      = require('../helpers/config');
var fs          = require('fs');
var conexion    = mysql.createConnection(config);

module.exports.getvideo = (req,res,next) => {

    let id = req.params.name;

    const path = './videos/' + id;

    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1] 
          ? parseInt(parts[1], 10)
          : fileSize-1
        const chunksize = (end-start)+1
        const file = fs.createReadStream(path, {start, end})
        const head = {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4',
        }
        res.writeHead(206, head);
        file.pipe(res);
      } else {
        const head = {
          'Content-Length': fileSize,
          'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
      }

}

module.exports.postvideo = (req,res,next) => {
    let id = req.body.name;
    let EDFile = req.files.file

    EDFile.mv(`./videos/${EDFile.name}`,err => {
        if(err) 
            return res.status(500).send({ message : err })

        return res.status(200).send({ message : 'File upload' })
    })
}
