var express     = require('express');
var session     = require('express-session');
var path        = require('path');
var router      = express.Router();

var userController = require('../controllers/user.controller' );


router.get('/', (req, res, next) => {
    res.sendFile( path.join(__dirname, '../views/login.html'));
});

router.get('/home', function(request, response) {
	if ( request.session.loggedin ) {
		response.render( 'home', { request:request } );
	} else {
		response.send('Please login to view this page!');
		response.end();
	}
});

router.post('/auth', userController.user_auth);

module.exports = router;