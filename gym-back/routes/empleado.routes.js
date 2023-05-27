const express = require('express');
const router = express.Router();

const empleadoCtrl = require('../controller/empleado');

router.post('/login', empleadoCtrl.login);
router.get('/:empleadoId', empleadoCtrl.getEmpleadoById);

module.exports = router;