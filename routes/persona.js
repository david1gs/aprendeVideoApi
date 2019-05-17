var express = require('express');
var router = express.Router();
var presonaController = require('../controllers/persona.controller');

router.get('/persona', presonaController.persona_list);
router.get('/persona/:id', presonaController.persona);
router.post('/persona', presonaController.persona_save);
router.delete('/persona', presonaController.persona_delete);
router.put('/persona', presonaController.persona_update);

module.exports = router;