var mysql       = require('mysql');
var bcrypt      = require('bcrypt');   
var crypto      = require('crypto');
var config      = require('../helpers/config');
var fs          = require('fs');
var bodyParser  = require('body-parser');
var conexion    = mysql.createConnection(config);

module.exports.getcourses = (req,res,next) => {
    let sql = "select * from curso;";

    conexion.query(sql, (error,results,fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
}


module.exports.postcourse = (req,res,next) => {
    
    let curso = req.body.curso;
    let description = req.body.description;
    let token = req.session.token;
    
    let sql = "SELECT curso.Descripcion, tema.Nombre from tema join curso where tema.idCurso = curso.idCurso and curso.Nombre = ? ";
    var owner = false;
    var inscripcion = false;
    conexion.query(sql, [curso] , (error,results,fields) => {
        if(error){
            res.send(error);
        } 

        sql = 'select  * from sesion join cuenta join persona join curso where sesion.idCuenta = cuenta.idCuenta and persona.idCuenta = cuenta.idCuenta and curso.idPersona = persona.idPersona and curso.Nombre = ? and sesion.Token = ?'
       
        conexion.query(sql,[curso,token], (error1,results1,fields1) => {

            if (error1){
                res.send(error1);
            }

            if( results1.length > 0 ){
                owner = true;
                inscripcion = true
            }
            else 
                owner = false;
            
           
            let sql = "select * from sesion join cuenta join persona join inscripcion join curso where sesion.idCuenta = cuenta.idCuenta and persona.idCuenta = cuenta.idCuenta and inscripcion.idPersona = persona.idPersona and inscripcion.idCurso = curso.idCurso  and sesion.Token = ? and curso.Nombre = ? "

            conexion.query(sql,[token,curso], (error2,results2,fields2) => { 

                if(error2){
                    res.send(error2)
                }

                if( results2.length > 0 )
                    inscripcion = true;
                

                res.render( 'course', { request:req ,results:results, curso:curso, temas:results, desc:description, owner:owner, subscription:inscripcion } );

            })

        } )
        
    });    
    
}


