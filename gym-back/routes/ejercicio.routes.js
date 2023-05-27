const express = require('express');
const router = express.Router();

const ejercicioCtrl = require('../controller/ejercicio');

router.post('', ejercicioCtrl.add);
router.get('', ejercicioCtrl.get);
router.get('/:ejercicioId', ejercicioCtrl.getEjercicioById);
router.put('/:ejercicioId', ejercicioCtrl.updateEjercicioById);

module.exports = router;