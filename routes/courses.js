var express     = require('express');
var session     = require('express-session');
var path        = require('path');
var router      = express.Router();

var coursesController = require('../controllers/courses.controller')

//Method to get all the courses in the web app
router.get('/', coursesController.getcourses )

//Method return the course web page 
router.post('/', coursesController.postcourse )


module.exports = router;