const express = require('express');
const router = express.Router();

const entrenadorCtrl = require('../controller/entrenador');

router.post('', entrenadorCtrl.add);
router.get('', entrenadorCtrl.get);
router.get('/:entrenadorId', entrenadorCtrl.getEntrenadorById);
router.put('/:entrenadorId', entrenadorCtrl.updateEntrenadorById);
router.delete('/:entrenadorId', entrenadorCtrl.deleteEntrenadorById);

module.exports = router;