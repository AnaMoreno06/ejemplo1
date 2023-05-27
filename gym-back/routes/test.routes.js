const express = require('express');
const router = express.Router();

const testCtrl = require('../controller/test');

router.post('', testCtrl.add);
router.post('/addEjercicio/:testId', testCtrl.addEjercicio);
router.get('/getEjercicio/:testId', testCtrl.getEjercicio);
router.get('', testCtrl.get);
router.get('/tipos', testCtrl.getTipos);
router.get('/:testId', testCtrl.getTestById);
router.put('/:testId', testCtrl.updateTestById);


module.exports = router;