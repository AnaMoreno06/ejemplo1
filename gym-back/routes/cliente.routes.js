const express = require('express');
const router = express.Router();

const clienteCtrl = require('../controller/clientes');

router.post('', clienteCtrl.add);
router.get('', clienteCtrl.get);
router.post('/login', clienteCtrl.login);
router.get('/:clienteId', clienteCtrl.getClienteById);
router.put('/:clienteId', clienteCtrl.updateClienteById);

module.exports = router;