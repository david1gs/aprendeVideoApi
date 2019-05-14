var express     = require('express');
var session     = require('express-session');
var path        = require('path');
var router      = express.Router();


var videoController = require('../controllers/video.controller');


router.get('/:name', videoController.getvideo);
router.post('/', videoController.postvideo);


module.exports = router;