const express = require('express');
const router = express.Router();

const clienteRoutes = require('./cliente.routes');
const entrenadorRoutes = require('./entrenador.routes');
const empleadoRoutes = require('./empleado.routes');
const ejercicioRoutes = require('./ejercicio.routes');
const testRoutes = require('./test.routes');

router.use('/cliente', clienteRoutes);
router.use('/entrenador', entrenadorRoutes);
router.use('/empleado', empleadoRoutes);
router.use('/ejercicio', ejercicioRoutes);
router.use('/test', testRoutes);

module.exports = router;