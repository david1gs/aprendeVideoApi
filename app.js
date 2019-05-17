var express     = require('express');
var session     = require('express-session');
var path        = require('path');
var bodyParser  = require('body-parser');
var fileUpload  = require('express-fileupload')

var index   = require('./routes/index');
var account = require('./routes/account');
var video   = require('./routes/video');
var courses = require('./routes/courses');
var images  = require('./routes/images');

var port    = 3000;
var app     = express();


app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

app.use(fileUpload());
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true, expiresIn: 10}));
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/account', account);
app.use('/videos', video);
app.use('/courses', courses);
app.use('/images', images);

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port,() =>{
    console.log('Servidor iniciado en el puerto ' + port)
});