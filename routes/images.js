var express     = require('express');
var session     = require('express-session');
var path        = require('path');
var router      = express.Router();

var imageController = require('../controllers/image.controller');

router.get('/:name', imageController.getimage);

module.exports = router;