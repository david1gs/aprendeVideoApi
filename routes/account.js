var express     = require('express');
var session     = require('express-session');
var path        = require('path');
var router      = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile( path.join(__dirname, '../views/newAccount.html'));
});

module.exports = router;