var express = require('express');
var router = express.Router();
var presonaController = require('../controllers/persona.controller');

router.get('/persona', presonaController.persona_list);
//router.get('/persona/:id', presonaController.product);
//router.post('/persona', presonaController.product_save);
//router.delete('/persona/:id', presonaController.product_delete);
//router.put('/persona/:id', presonaController.product_update);

module.exports = router;